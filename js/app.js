/**
 * Maestro Ciuchino - Applicazione Principale
 * Routing tra moduli, gestione popover di contesto, selettore fascia e reattività
 */

import { schoolLevels, schoolData } from './data/schoolData.js';
import { stateManager } from './state.js';
import { renderModuleIN } from './modules/moduleIN.js';
import { renderModule1 } from './modules/module1.js';
import { renderModule2 } from './modules/module2.js';
import { renderModule3 } from './modules/module3.js';
import { renderModule4 } from './modules/module4.js';
import { renderModule5 } from './modules/module5.js';
import { renderModuleOUT } from './modules/moduleOUT.js';

// Mappa dei moduli
const moduleRenderers = {
  in: renderModuleIN,
  1: renderModule1,
  2: renderModule2,
  3: renderModule3,
  4: renderModule4,
  5: renderModule5,
  out: renderModuleOUT
};

const moduleNavList = [
  { key: 'in', label: "Prima di iniziare", stepLabel: "Modulo IN" },
  { key: 1, label: "1. Chiedere una cosa o stabilire una regola", stepLabel: "Modulo 1" },
  { key: 2, label: "2. Modello COACH", stepLabel: "Modulo 2" },
  { key: 3, label: "3. Playground Prompt", stepLabel: "Modulo 3" },
  { key: 4, label: "4. Costruisci Chatbot", stepLabel: "Modulo 4" },
  { key: 5, label: "5. Verifica & Copia", stepLabel: "Modulo 5" },
  { key: 'out', label: "Alla fine del percorso", stepLabel: "Modulo OUT" }
];

class App {
  constructor() {
    this.appContainer = document.getElementById('app-main');
    this.navContainer = document.getElementById('modules-nav');
    this.levelPillsContainer = document.getElementById('level-pills');
    this.activePopover = null;

    this.init();
  }

  init() {
    this.renderLevelSelector();
    this.renderNavigation();
    this.renderCurrentModule();
    this.setupGlobalPopoverListener();
    this.setupRestartModalListener();

    // Gestione scroll da parametri URL (se presente)
    const urlParams = new URLSearchParams(window.location.search);
    const scrollTarget = urlParams.get('scroll');
    if (scrollTarget) {
      setTimeout(() => {
        const el = document.querySelector(scrollTarget);
        if (el) el.scrollIntoView();
      }, 300);
    }

    // Iscriviti agli aggiornamenti di stato
    stateManager.subscribe((state, changes) => {
      if (changes.currentModule !== undefined || changes.completedModules !== undefined) {
        this.renderNavigation();
        this.renderCurrentModule();
      } else if (changes.currentLevel !== undefined) {
        this.renderLevelSelector();
        this.renderCurrentModule();
      }
    });
  }

  setupRestartModalListener() {
    const modalEl = document.getElementById('restart-confirm-modal');
    const globalRestartBtn = document.getElementById('btn-global-restart');
    const cancelBtn = document.getElementById('btn-cancel-restart');
    const confirmBtn = document.getElementById('btn-confirm-restart');
    const m4TipBox = document.getElementById('restart-modal-m4-tip');

    const openRestartModal = () => {
      if (!modalEl) return;
      const state = stateManager.getState();
      const botData = state.m4BotData || {};
      const hasCustomData = (botData.role && botData.role.trim().length > 0) || 
                            (botData.context && botData.context.trim().length > 0) ||
                            (botData.objective && botData.objective.trim().length > 0) ||
                            (state.m3PromptText && state.m3PromptText.trim().length > 0);

      if (m4TipBox) {
        m4TipBox.style.display = hasCustomData ? 'block' : 'none';
      }

      modalEl.style.display = 'flex';
      modalEl.setAttribute('aria-hidden', 'false');
      if (cancelBtn) cancelBtn.focus();
    };

    const closeRestartModal = () => {
      if (!modalEl) return;
      modalEl.style.display = 'none';
      modalEl.setAttribute('aria-hidden', 'true');
    };

    if (globalRestartBtn) {
      globalRestartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openRestartModal();
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', closeRestartModal);
    }

    if (confirmBtn) {
      confirmBtn.addEventListener('click', () => {
        closeRestartModal();
        stateManager.resetAllProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    if (modalEl) {
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) {
          closeRestartModal();
        }
      });
    }

    window.openRestartModal = openRestartModal;
  }

  renderLevelSelector() {
    const currentLevel = stateManager.getState().currentLevel;
    if (!this.levelPillsContainer) return;

    this.levelPillsContainer.innerHTML = Object.values(schoolLevels).map(lvl => `
      <button type="button" 
              class="level-btn" 
              data-level="${lvl.id}" 
              aria-pressed="${lvl.id === currentLevel}">
        <span>${lvl.icon}</span> ${lvl.name.replace('Scuola ', '')}
      </button>
    `).join('');

    const buttons = this.levelPillsContainer.querySelectorAll('.level-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const lvl = btn.getAttribute('data-level');
        stateManager.setLevel(lvl);
      });
    });
  }

  renderNavigation() {
    const { currentModule, completedModules } = stateManager.getState();
    if (!this.navContainer) return;

    this.navContainer.innerHTML = `
      <ul class="modules-nav-list" role="tablist" aria-label="Percorso dei moduli didattici">
        ${moduleNavList.map(m => {
          const isActive = m.key === currentModule;
          const isCompleted = completedModules[m.key];
          return `
            <li class="module-nav-item" role="presentation">
              <button type="button" 
                      class="module-nav-btn ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}"
                      data-module-key="${m.key}"
                      role="tab"
                      aria-selected="${isActive}">
                <div class="nav-step-number">
                  ${isCompleted ? '✓' : '•'} ${m.stepLabel}
                </div>
                <div class="nav-step-title">${m.label}</div>
              </button>
            </li>
          `;
        }).join('')}
      </ul>
    `;

    const navButtons = this.navContainer.querySelectorAll('.module-nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-module-key');
        stateManager.setModule(key);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  renderCurrentModule() {
    const currentModule = stateManager.getState().currentModule;
    const renderer = moduleRenderers[currentModule] || renderModuleIN;

    // Pulisci contenitore e renderizza il modulo attivo
    this.appContainer.innerHTML = '';
    this.closeAnyActivePopover();
    renderer(this.appContainer);
  }

  // ============================================================
  // GESTORE FINESTRE DI CONTESTO (HELP POPOVER CON ICONA '?')
  // ============================================================
  setupGlobalPopoverListener() {
    const popoverEl = document.getElementById('global-context-popover');
    if (!popoverEl) return;

    // Ascolta i click/tap sull'intero documento
    document.addEventListener('click', (event) => {
      const helpBtn = event.target.closest('.help-icon-btn');

      if (helpBtn) {
        event.stopPropagation();
        const isOpen = helpBtn.getAttribute('aria-expanded') === 'true';

        if (isOpen) {
          this.closePopover(popoverEl, helpBtn);
        } else {
          this.openPopover(popoverEl, helpBtn);
        }
        return;
      }

      // Se clicca all'interno del popover (tranne il pulsante di chiusura), non chiudere
      if (popoverEl.contains(event.target)) {
        if (event.target.closest('.popover-close-btn')) {
          this.closeAnyActivePopover();
        }
        return;
      }

      // Altrimenti chiudi per light dismiss (click all'esterno)
      this.closeAnyActivePopover();
    });

    // Chiusura con tasto Escape
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.closeAnyActivePopover();
      }
    });
  }

  openPopover(popoverEl, triggerBtn) {
    this.closeAnyActivePopover();

    const title = triggerBtn.getAttribute('data-help-title') || 'Guida Pratica';
    const body = triggerBtn.getAttribute('data-help-body') || '';
    const example = triggerBtn.getAttribute('data-help-example') || '';
    const reason = triggerBtn.getAttribute('data-help-reason') || '';

    let contentHtml = `
      <div class="popover-header">
        <span class="popover-title">💡 ${title}</span>
        <button type="button" class="popover-close-btn" aria-label="Chiudi guida">✕</button>
      </div>
      <div class="popover-body">
        <p>${body}</p>
        ${reason ? `<p style="margin-top: 0.4rem; font-weight: 600; color: var(--primary-blue);">${reason}</p>` : ''}
        ${example ? `<div class="popover-example">${example}</div>` : ''}
      </div>
    `;

    popoverEl.innerHTML = contentHtml;
    popoverEl.classList.add('active');
    triggerBtn.setAttribute('aria-expanded', 'true');
    this.activePopover = { popoverEl, triggerBtn };

    // Posizionamento preciso vicino all'icona
    const rect = triggerBtn.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    let top = rect.bottom + scrollTop + 6;
    let left = rect.left + scrollLeft - 140; // centrato rispetto all'icona

    // Limiti finestra
    const popoverWidth = 320;
    if (left < 10) left = 10;
    if (left + popoverWidth > window.innerWidth - 10) {
      left = window.innerWidth - popoverWidth - 10;
    }

    popoverEl.style.top = `${top}px`;
    popoverEl.style.left = `${left}px`;
  }

  closePopover(popoverEl, triggerBtn) {
    popoverEl.classList.remove('active');
    if (triggerBtn) {
      triggerBtn.setAttribute('aria-expanded', 'false');
    }
    this.activePopover = null;
  }

  closeAnyActivePopover() {
    const popoverEl = document.getElementById('global-context-popover');
    if (popoverEl) {
      popoverEl.classList.remove('active');
    }
    document.querySelectorAll('.help-icon-btn[aria-expanded="true"]').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
    this.activePopover = null;
  }
}

// Avvia l'app al caricamento del DOM
document.addEventListener('DOMContentLoaded', () => {
  window.maestroCiuchinoApp = new App();
});
