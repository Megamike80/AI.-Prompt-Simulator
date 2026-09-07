/**
 * Maestro Ciuchino - Modulo 5: Verifica Pedagogica, Uso Responsabile ed Esportazione
 * Checklist finale con finestre di aiuto contestuale (?), centro di esportazione,
 * guida all'uso nelle piattaforme e attestato finale firmato da Maestro Ciuchino.
 */

import { schoolLevels, schoolData } from '../data/schoolData.js';
import { stateManager } from '../state.js';

export function renderModule5(container) {
  const state = stateManager.getState();
  const levelKey = state.currentLevel || 'primaria';
  const levelInfo = schoolLevels[levelKey];
  const m5Data = schoolData.module5;
  const checklistItems = m5Data.checklistItems;
  const savedChecks = state.m5Checklist || {};

  const botData = state.m4BotData || {};
  const currentSysPrompt = assembleSystemPromptText(botData, levelKey);

  const checkedCount = Object.values(savedChecks).filter(Boolean).length;
  const allChecked = checkedCount === checklistItems.length;

  container.innerHTML = `
    <!-- Header del Modulo -->
    <div class="module-header">
      <span class="module-tag">Modulo 5 di 5 • Traguardo Finale</span>
      <h2 class="module-title">${m5Data.intro.title}</h2>
      <p class="module-subtitle">${m5Data.intro.subtitle} (Fascia: <strong>${levelInfo.name}</strong>).</p>
    </div>

    <!-- Scheda Fascia Attiva -->
    <div class="level-info-banner">
      <div class="level-info-left">
        <span class="level-badge ${levelInfo.badgeColor}">
          <span>${levelInfo.icon}</span> ${levelInfo.name} (${levelInfo.ageRange})
        </span>
        <span class="level-info-desc">Tutte le verifiche sono formulate per la tutela pedagogica di questa fascia.</span>
      </div>
    </div>

    <!-- Consiglio del Maestro Ciuchino -->
    <div class="mascot-callout" role="region" aria-label="Consiglio del Maestro Ciuchino">
      <img src="assets/maestro_ciuchino.png" alt="Maestro Ciuchino" class="mascot-callout-avatar">
      <div class="mascot-callout-content">
        <div class="mascot-callout-title">
          <span>🐴</span> L'Ultima Parola è Sempre Tua!
        </div>
        <p class="mascot-callout-text">
          "Complimenti per essere arrivato fin qui! L'intelligenza artificiale è un formidabile assistente di bozza, ma il cuore della scuola resta la tua relazione umana e la tua responsabilità pedagogica. Esegui la <strong>checklist finale</strong> qui sotto prima di portare il tuo assistente in classe!"
        </p>
      </div>
    </div>

    <!-- Sezione 1: Checklist di Responsabilità Pedagogica -->
    <section class="content-card" aria-labelledby="checklist-heading">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
        <h3 id="checklist-heading" style="font-size: 1.2rem; font-weight: 700; color: var(--primary-blue);">
          1. Checklist di Controllo del Docente
        </h3>
        <span class="rubric-progress-badge ${allChecked ? 'complete' : ''}" id="checklist-badge">
          ${allChecked ? '🎉 Tutte le verifiche superate (5/5)' : `${checkedCount}/5 Verifiche eseguite`}
        </span>
      </div>
      <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1rem;">
        Spunta ciascun punto dopo aver effettuato la verifica. Tocca l'icona <strong>?</strong> per capire perché questo controllo compete unicamente a te e non all'applicazione.
      </p>

      <div class="checklist-container">
        ${checklistItems.map(item => {
          const isChecked = !!savedChecks[item.id];
          const tt = item.tooltip || {};

          return `
            <label class="checklist-item-card ${isChecked ? 'checked' : ''}" for="chk-${item.id}">
              <input type="checkbox" 
                     class="checklist-checkbox" 
                     id="chk-${item.id}" 
                     data-check-id="${item.id}"
                     ${isChecked ? 'checked' : ''}>
              
              <div class="checklist-content">
                <div class="checklist-title-group">
                  <span>${item.label}</span>
                  <button type="button" 
                          class="help-icon-btn" 
                          aria-label="Spiegazione verifica ${item.label}" 
                          aria-expanded="false"
                          data-help-title="${item.label}"
                          data-help-body="${escapeAttr(tt.whatToCheck || '')}"
                          data-help-reason="${escapeAttr(tt.whyTeacherOnly ? '📌 Perché compete solo al docente: ' + tt.whyTeacherOnly : '')}"
                          data-help-example="">?</button>
                </div>
                <div class="checklist-desc">${item.desc}</div>
              </div>
            </label>
          `;
        }).join('')}
      </div>
    </section>

    <!-- Sezione 2: Centro di Esportazione & Download -->
    <section class="export-hero-card" aria-labelledby="export-heading">
      <div class="export-hero-header">
        <div>
          <h3 id="export-heading" class="export-hero-title">
            <span>📦</span> Il tuo System Prompt è Pronto per l'Uso!
          </h3>
          <p style="font-size: 0.9rem; opacity: 0.9; margin-top: 0.35rem;">
            Copia il testo completo o scaricalo sul tuo computer per averlo sempre a portata di mano.
          </p>
        </div>

        <div class="export-buttons-group">
          <button type="button" class="btn-export-primary" id="btn-export-copy">
            📋 Copia System Prompt Completo
          </button>
          <button type="button" class="btn-export-secondary" id="btn-export-download">
            💾 Scarica Scheda Assistente (.txt)
          </button>
        </div>
      </div>

      <div style="background-color: rgba(0, 0, 0, 0.35); border-radius: var(--radius-sm); padding: 1rem; font-family: var(--font-mono); font-size: 0.8rem; line-height: 1.55; max-height: 200px; overflow-y: auto; border: 1px solid rgba(255, 255, 255, 0.2);">
        <pre style="white-space: pre-wrap; margin: 0;">${escapeHtml(currentSysPrompt)}</pre>
      </div>
    </section>

    <!-- Sezione 3: Guida Pratica alle Piattaforme -->
    <section class="content-card" aria-labelledby="platforms-heading">
      <h3 id="platforms-heading" style="font-size: 1.2rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 0.5rem;">
        2. Dove incollare il System Prompt?
      </h3>
      <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1rem;">
        Puoi usare questo System Prompt per configurare il tuo assistente permanente nei principali strumenti di intelligenza artificiale:
      </p>

      <!-- Avviso dinamicità interfacce -->
      <div class="validation-alert-banner warning" style="margin-bottom: 1.25rem;">
        <span>⚠️</span>
        <div>
          <strong>Nota sulle interfacce:</strong> Le schermate e i nomi dei menu di questi strumenti cambiano frequentemente. Se un percorso non corrisponde esattamente, cerca le sezioni <em>'Istruzioni'</em>, <em>'Configura'</em> o <em>'Crea assistente/progetto'</em> nella piattaforma che utilizzi.
        </div>
      </div>

      <div class="platforms-grid" style="grid-template-columns: 1fr; gap: 1.25rem;">
        ${m5Data.exportGuide.map(guide => `
          <div class="platform-card" style="border-left: 4px solid var(--primary-blue);">
            <div class="platform-card-header" style="font-size: 1.05rem;">
              <span>${guide.icon || '🔹'}</span> ${guide.platform}
            </div>
            <div class="platform-steps" style="font-size: 0.88rem; line-height: 1.6;">${guide.steps}</div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- Sezione 4: Attestato di Completamento di Maestro Ciuchino -->
    <div class="certificate-badge-card" role="region" aria-label="Attestato di Completamento">
      <img src="assets/maestro_ciuchino.png" alt="Sigillo di Maestro Ciuchino" class="certificate-avatar">
      <div class="certificate-content">
        <h4>🎓 Attestato di Merito: Docente Prompt Coach</h4>
        <p>
          "Hai completato con successo tutti i 5 moduli del laboratorio con <strong>Maestro Ciuchino</strong>. Ora possiedi gli strumenti per guidare l'IA a scuola con rigore didattico, chiarezza di prompt e piena trasparenza pedagogica!"
        </p>
        <div style="margin-top: 0.5rem; font-size: 0.8rem; font-weight: 700; color: var(--accent-amber);">
          Firmato con stima: Maestro Ciuchino • ${new Date().toLocaleDateString('it-IT')}
        </div>
      </div>
    </div>

    <!-- Footer Azioni Modulo 5 -->
    <div class="module-footer-actions">
      <button type="button" class="btn-secondary" id="btn-back-to-m4">
        ⬅ Torna al Costruttore Chatbot (Modulo 4)
      </button>
      <button type="button" class="btn-secondary" id="btn-restart-flow">
        🔄 Ricomincia da capo
      </button>
      <button type="button" class="btn-primary" id="btn-goto-module-out">
        Avanti al Modulo OUT (Che cosa ho imparato) ➔
      </button>
    </div>
  `;

  // Attach Event Handlers
  attachModule5Handlers(container, currentSysPrompt, levelKey);
}

function assembleSystemPromptText(botData, levelKey) {
  const preset = schoolData.module4.presets[levelKey] || schoolData.module4.presets.primaria;
  const role = (botData.role || preset.role || '').trim();
  const context = (botData.context || preset.context || '').trim();
  const objective = (botData.objective || preset.objective || '').trim();
  const actionInput = (botData.actionInput || preset.actionInput || '').trim();
  const criteria = (botData.criteria || preset.criteria || '').trim();
  const transparencyClause = (botData.transparencyClause !== undefined ? botData.transparencyClause : preset.transparencyClause).trim() || preset.transparencyClause;

  return `# RUOLO E IDENTITÀ DELL'ASSISTENTE
${role}

# CONTESTO DIDATTICO PERMANENTE
${context}

# OBIETTIVO DIDATTICO PRINCIPALE
${objective}

# ISTRUZIONI OPERATIVE E FORMATO DI INPUT/OUTPUT
${actionInput}

# CRITERI QUALITATIVI E LIMITI RIGOROSI
${criteria}

# DICHIARAZIONE DI TRASPARENZA E CONTROLLO DOCENTE (REGOLA DA INCLUDERE SEMPRE)
${transparencyClause}`;
}

function attachModule5Handlers(container, sysPromptText, levelKey) {
  const checkboxes = container.querySelectorAll('.checklist-checkbox');
  const copyBtn = container.querySelector('#btn-export-copy');
  const downloadBtn = container.querySelector('#btn-export-download');
  const backBtn = container.querySelector('#btn-back-to-m4');
  const restartBtn = container.querySelector('#btn-restart-flow');
  const gotoOutBtn = container.querySelector('#btn-goto-module-out');

  if (gotoOutBtn) {
    gotoOutBtn.addEventListener('click', () => {
      stateManager.markModuleComplete(5, true);
      stateManager.setModule('out');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Checkbox state sync
  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      const checkId = cb.getAttribute('data-check-id');
      const isChecked = cb.checked;
      const state = stateManager.getState();
      const updatedChecklist = { ...(state.m5Checklist || {}), [checkId]: isChecked };

      stateManager.setState({ m5Checklist: updatedChecklist });

      // Aggiorna classe card
      const parentCard = cb.closest('.checklist-item-card');
      if (parentCard) {
        if (isChecked) parentCard.classList.add('checked');
        else parentCard.classList.remove('checked');
      }

      // Aggiorna badge
      const total = schoolData.module5.checklistItems.length;
      const currentCount = Object.values(updatedChecklist).filter(Boolean).length;
      const badge = container.querySelector('#checklist-badge');
      if (badge) {
        badge.className = `rubric-progress-badge ${currentCount === total ? 'complete' : ''}`;
        badge.textContent = currentCount === total 
          ? `🎉 Tutte le verifiche superate (${total}/${total})`
          : `${currentCount}/${total} Verifiche eseguite`;
      }

      if (currentCount === total) {
        stateManager.markModuleComplete(5, true);
      }
    });
  });

  // Copia negli Appunti
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(sysPromptText);
        const orig = copyBtn.innerHTML;
        copyBtn.innerHTML = '✅ System Prompt Copiato negli Appunti!';
        copyBtn.style.backgroundColor = '#15803d';
        setTimeout(() => {
          copyBtn.innerHTML = orig;
          copyBtn.style.backgroundColor = '';
        }, 2500);
      } catch (e) {
        alert('Copia il seguente testo:\n\n' + sysPromptText);
      }
    });
  }

  // Download File .txt
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const levelInfo = schoolLevels[levelKey];
      const filename = `SystemPrompt_${levelKey}_MaestroCiuchino.txt`;
      const fileContent = `===============================================================
MAESTRO CIUCHINO — SCHEDA ASSISTENTE DIDATTICO
Fascia Scolastica: ${levelInfo.name} (${levelInfo.ageRange})
Data di generazione: ${new Date().toLocaleDateString('it-IT')}
===============================================================

ISTRUZIONI PER L'USO:
1. Copia il testo sottostante delimitato da --- INIZIO SYSTEM PROMPT ---
2. Incollalo nel campo 'Istruzioni' del tuo assistente dedicato:
   - Su ChatGPT: crea un Custom GPT (o Progetto) > scheda Configura > campo 'Istruzioni'.
   - Su Gemini: crea una nuova Gem > campo 'Istruzioni'.
   - Su Claude: crea un Project > 'Set Project Instructions'.
3. Quando userai l'assistente, ti basterà incollare il testo o l'argomento della lezione senza rispiegare le regole.
4. Ricorda: l'ultima parola e la validazione dei contenuti spettano sempre al docente!

--- INIZIO SYSTEM PROMPT ---

${sysPromptText}

--- FINE SYSTEM PROMPT ---
`;

      const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    });
  }

  // Torna al Modulo 4
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      stateManager.setModule(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Ricomincia da capo
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      if (typeof window.openRestartModal === 'function') {
        window.openRestartModal();
      } else {
        if (confirm("Vuoi ricominciare il percorso da capo cancellando i progressi? L'operazione non è reversibile.")) {
          stateManager.resetAllProgress();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttr(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
