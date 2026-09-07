/**
 * Maestro Ciuchino - Modulo 4: Costruttore del Chatbot (System Prompt)
 * Wizard guidato in 5 step per la creazione del System Prompt permanente.
 * Include validazione di completezza COACH, finestre di aiuto puntuale (?)
 * e clausola non negoziabile di dichiarazione modifiche ("Casella H").
 */

import { schoolLevels, schoolData } from '../data/schoolData.js';
import { stateManager } from '../state.js';

export function renderModule4(container) {
  const state = stateManager.getState();
  const levelKey = state.currentLevel || 'primaria';
  const levelInfo = schoolLevels[levelKey];
  const m4Data = schoolData.module4;
  const tooltips = m4Data.tooltips[levelKey] || {};
  const preset = m4Data.presets[levelKey] || {};

  const botData = state.m4BotData || {
    role: '',
    context: '',
    objective: '',
    actionInput: '',
    criteria: '',
    transparencyAccepted: true
  };

  const validation = validateCoachCompleteness(botData);

  container.innerHTML = `
    <!-- Header del Modulo -->
    <div class="module-header">
      <span class="module-tag">Modulo 4 di 5</span>
      <h2 class="module-title">${m4Data.intro.title}</h2>
      <p class="module-subtitle">${m4Data.intro.subtitle} per la <strong>${levelInfo.name}</strong>.</p>
    </div>

    <!-- Scheda Fascia Attiva -->
    <div class="level-info-banner">
      <div class="level-info-left">
        <span class="level-badge ${levelInfo.badgeColor}">
          <span>${levelInfo.icon}</span> ${levelInfo.name} (${levelInfo.ageRange})
        </span>
        <span class="level-info-desc">Ogni campo è pre-tarato con suggerimenti per ${levelInfo.name}.</span>
      </div>
      <button type="button" class="btn-secondary" id="btn-load-m4-preset" style="font-size: 0.82rem;">
        ✨ Carica Preset per ${levelInfo.name.split(' ')[1] || 'Docenti'}
      </button>
    </div>

    <!-- Consiglio del Maestro Ciuchino -->
    <div class="mascot-callout" role="region" aria-label="Consiglio del Maestro Ciuchino">
      <img src="assets/maestro_ciuchino.png" alt="Maestro Ciuchino" class="mascot-callout-avatar">
      <div class="mascot-callout-content">
        <div class="mascot-callout-title">
          <span>🐴</span> Dalla Richiesta al Tuo Assistente Personale
        </div>
        <p class="mascot-callout-text">
          "Qui non scriviamo una richiesta per una sola volta: creiamo le <strong>istruzioni permanenti</strong> (System Prompt) del tuo assistente! Guarda a destra: il testo si compone in tempo reale. Ricorda di <strong>includere sempre la Dichiarazione delle Modifiche</strong>: l'IA non deve nasconderti cosa ha cambiato, semplificato o dedotto!"
        </p>
      </div>
    </div>

    <!-- Layout a 2 Colonne: Form Wizard + Live System Prompt Preview -->
    <div class="builder-layout">
      <!-- Colonna Sinistra: Form a Step Guidato -->
      <div class="builder-form-card">
        
        <!-- Step 1: Contesto & Ruolo (C) -->
        <div class="wizard-step-card" id="step-card-context">
          <div class="wizard-step-header">
            <div class="wizard-step-title-group">
              <span class="step-num-badge">1</span>
              <span>Contesto & Identità del Bot</span>
              <button type="button" 
                      class="help-icon-btn" 
                      aria-label="Aiuto su Contesto e Ruolo" 
                      aria-expanded="false"
                      data-help-title="Step 1: Contesto & Identità"
                      data-help-body="${escapeAttr(tooltips.context?.shortDef || '')}"
                      data-help-reason="${escapeAttr(tooltips.context?.whyItMatters || '')}"
                      data-help-example="${escapeAttr(tooltips.context?.example || '')}">?</button>
            </div>
            <span class="preview-tag preview-tag-c1">C - Contesto</span>
          </div>
          <div class="wizard-step-desc">
            Definisci chi è l'assistente, a quale ordine di scuola si rivolge e con quali alunni lavora.
          </div>
          <div style="margin-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
              <label for="input-bot-role" style="font-size: 0.8rem; font-weight: 700; color: var(--text-secondary);">
                Nome & Ruolo dell'assistente:
              </label>
              <button type="button" class="btn-clear-field" data-target="input-bot-role" style="display: ${botData.role ? 'inline-flex' : 'none'};">
                <span>🧹</span> Pulisci
              </button>
            </div>
            <input type="text" 
                   class="builder-input" 
                   id="input-bot-role" 
                   placeholder="Es: Assistente per la comprensione del testo e compiti graduati"
                   value="${escapeAttr(botData.role)}">
          </div>
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
              <label for="input-bot-context" style="font-size: 0.8rem; font-weight: 700; color: var(--text-secondary);">
                Contesto pedagogico permanente:
              </label>
              <button type="button" class="btn-clear-field" data-target="input-bot-context" style="display: ${botData.context ? 'inline-flex' : 'none'};">
                <span>🧹</span> Pulisci
              </button>
            </div>
            <textarea class="builder-textarea" 
                      id="input-bot-context" 
                      placeholder="Es: Sei un assistente pedagogico specializzato per docenti di scuola primaria (classi 3ª-5ª)...">${botData.context}</textarea>
          </div>
        </div>

        <!-- Step 2: Obiettivo Didattico Ricorrente (O) -->
        <div class="wizard-step-card" id="step-card-objective">
          <div class="wizard-step-header">
            <div class="wizard-step-title-group">
              <span class="step-num-badge">2</span>
              <span>Obiettivo Didattico Principale</span>
              <button type="button" 
                      class="help-icon-btn" 
                      aria-label="Aiuto sull'Obiettivo" 
                      aria-expanded="false"
                      data-help-title="Step 2: Obiettivo Didattico"
                      data-help-body="${escapeAttr(tooltips.objective?.shortDef || '')}"
                      data-help-reason="${escapeAttr(tooltips.objective?.whyItMatters || '')}"
                      data-help-example="${escapeAttr(tooltips.objective?.example || '')}">?</button>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <button type="button" class="btn-clear-field" data-target="input-bot-objective" style="display: ${botData.objective ? 'inline-flex' : 'none'};">
                <span>🧹</span> Pulisci
              </button>
              <span class="preview-tag preview-tag-o">O - Obiettivo</span>
            </div>
          </div>
          <div class="wizard-step-desc">
            Qual è la mansione didattica ricorrente che questo chatbot dovrà svolgere ogni volta?
          </div>
          <textarea class="builder-textarea" 
                    id="input-bot-objective" 
                    placeholder="Es: Elaborare testi didattici graduati, schede di comprensione con glossario ed esercizi inclusivi...">${botData.objective}</textarea>
        </div>

        <!-- Step 3: Input del Docente & Azioni del Bot (A) -->
        <div class="wizard-step-card" id="step-card-action">
          <div class="wizard-step-header">
            <div class="wizard-step-title-group">
              <span class="step-num-badge">3</span>
              <span>Input Atteso & Azioni di Elaborazione</span>
              <button type="button" 
                      class="help-icon-btn" 
                      aria-label="Aiuto su Input e Azioni" 
                      aria-expanded="false"
                      data-help-title="Step 3: Input & Azioni"
                      data-help-body="${escapeAttr(tooltips.actionInput?.shortDef || '')}"
                      data-help-reason="${escapeAttr(tooltips.actionInput?.whyItMatters || '')}"
                      data-help-example="${escapeAttr(tooltips.actionInput?.example || '')}">?</button>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <button type="button" class="btn-clear-field" data-target="input-bot-action" style="display: ${botData.actionInput ? 'inline-flex' : 'none'};">
                <span>🧹</span> Pulisci
              </button>
              <span class="preview-tag preview-tag-a">A - Azione</span>
            </div>
          </div>
          <div class="wizard-step-desc">
            Cosa incollerai al bot ogni volta e quale struttura di risposta deve generare passo dopo passo?
          </div>
          <textarea class="builder-textarea" 
                    id="input-bot-action" 
                    placeholder="Es: Il docente ti incollerà un testo o argomento. Tu genererai: 1) Versione semplificata a paragrafi, 2) Glossario con 3 parole chiave, 3) 3 quesiti a scelta multipla...">${botData.actionInput}</textarea>
        </div>

        <!-- Step 4: Criteri Rigorosi & Limiti Didattici (C) -->
        <div class="wizard-step-card" id="step-card-criteria">
          <div class="wizard-step-header">
            <div class="wizard-step-title-group">
              <span class="step-num-badge">4</span>
              <span>Criteri di Risposta, Tono e Limiti</span>
              <button type="button" 
                      class="help-icon-btn" 
                      aria-label="Aiuto su Criteri e Limiti" 
                      aria-expanded="false"
                      data-help-title="Step 4: Criteri & Limiti"
                      data-help-body="${escapeAttr(tooltips.criteria?.shortDef || '')}"
                      data-help-reason="${escapeAttr(tooltips.criteria?.whyItMatters || '')}"
                      data-help-example="${escapeAttr(tooltips.criteria?.example || '')}">?</button>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <button type="button" class="btn-clear-field" data-target="input-bot-criteria" style="display: ${botData.criteria ? 'inline-flex' : 'none'};">
                <span>🧹</span> Pulisci
              </button>
              <span class="preview-tag preview-tag-c2">C - Criteri</span>
            </div>
          </div>
          <div class="wizard-step-desc">
            Fissa i paletti invalicabili: lunghezza massima, registro linguistico e cosa NON deve mai fare.
          </div>
          <textarea class="builder-textarea" 
                    id="input-bot-criteria" 
                    placeholder="Es: Sintassi lineare (max 15 parole a periodo). Evidenzia parole chiave in grassetto. Non inventare fatti storici o scientifici...">${botData.criteria}</textarea>
        </div>

        <!-- Step 5: Trasparenza & Controllo Docente (H - Da Includere Sempre) -->
        <div class="transparency-locked-card" id="step-card-transparency">
          <div class="transparency-header">
            <div class="wizard-step-title-group">
              <span class="step-num-badge" style="background-color: var(--success-green);">5</span>
              <span>Dichiarazione Modifiche & Controllo Docente</span>
              <button type="button" 
                      class="help-icon-btn" 
                      aria-label="Aiuto sulla Trasparenza" 
                      aria-expanded="false"
                      data-help-title="Step 5: Trasparenza (Casella H)"
                      data-help-body="${escapeAttr(tooltips.transparency?.shortDef || '')}"
                      data-help-reason="${escapeAttr(tooltips.transparency?.whyItMatters || '')}"
                      data-help-example="${escapeAttr(tooltips.transparency?.example || '')}">?</button>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <button type="button" class="btn-clear-field" data-target="input-bot-transparency" style="display: ${(botData.transparencyClause !== undefined ? botData.transparencyClause : preset.transparencyClause) ? 'inline-flex' : 'none'};">
                <span>🧹</span> Pulisci
              </button>
              <span class="transparency-badge">DA INCLUDERE SEMPRE</span>
            </div>
          </div>
          <p style="font-size: 0.85rem; color: #166534; margin-bottom: 0.5rem; line-height: 1.45;">
            Includi sempre questa regola nel tuo assistente. Ricorda che l'IA può non rispettarla: controlla ogni volta che la dichiarazione sia presente.
          </p>
          <textarea class="builder-textarea" 
                    id="input-bot-transparency" 
                    style="background-color: #fff; border: 1.5px solid var(--success-green-border);"
                    placeholder="Es: Alla fine di ogni risposta aggiungi una sezione «Dichiarazione modifiche» in cui elenchi che cosa hai aggiunto, semplificato o dedotto...">${escapeHtml(botData.transparencyClause !== undefined ? botData.transparencyClause : (preset.transparencyClause || ''))}</textarea>
        </div>

      </div>

      <!-- Colonna Destra: Live System Prompt Preview & Validazione -->
      <div class="system-prompt-panel">
        <div class="system-prompt-header">
          <div class="system-prompt-title">
            <span>⚙️</span> System Prompt Generato
          </div>
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted);" id="sysprompt-words-count">
            0 parole
          </span>
        </div>

        <!-- Banner di Validazione Completezza COACH -->
        <div class="validation-alert-banner ${validation.isComplete ? 'success' : 'warning'}" id="m4-validation-banner">
          ${validation.isComplete 
            ? `<span>✅</span> <div><strong>COACH Completo:</strong> Tutti i 5 elementi fondamentali sono presenti. Il System Prompt è pronto per la verifica e l'uso!</div>`
            : `<span>⚠️</span> <div><strong>Incompleto:</strong> Mancano ancora: <em>${validation.missingFields.join(', ')}</em>. Compilali per garantire un assistente affidabile.</div>`
          }
        </div>

        <div class="system-prompt-preview" id="system-prompt-output">
          <!-- Generato via JavaScript -->
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <button type="button" class="btn-secondary" id="btn-copy-sysprompt" style="width: 100%;">
            📋 Copia System Prompt
          </button>
          <button type="button" class="btn-primary" id="btn-goto-module5" style="width: 100%;">
            🔍 Vai alla Verifica Finale (Modulo 5) ➔
          </button>
        </div>
      </div>
    </div>

    <!-- Footer Azioni Modulo 4 -->
    <div class="module-footer-actions">
      <button type="button" class="btn-secondary" id="btn-back-to-m3">
        ⬅ Torna al Modulo 3 (Playground)
      </button>
      <button type="button" class="btn-primary" id="btn-complete-m4">
        ${state.completedModules[4] ? 'Avanti al Modulo 5: Verifica & Copia ➔' : 'Completa il Modulo 4 e Continua ➔'}
      </button>
    </div>
  `;

  // Attach Event Handlers
  attachModule4Handlers(container, preset, levelKey);
  updateSystemPromptPreview(container, levelKey);
}

function validateCoachCompleteness(botData, defaultClause = '') {
  const missing = [];
  if (!botData.role || botData.role.trim().length === 0) missing.push('Nome & Ruolo (C)');
  if (!botData.context || botData.context.trim().length === 0) missing.push('Contesto (C)');
  if (!botData.objective || botData.objective.trim().length === 0) missing.push('Obiettivo (O)');
  if (!botData.actionInput || botData.actionInput.trim().length === 0) missing.push('Input & Azione (A)');
  if (!botData.criteria || botData.criteria.trim().length === 0) missing.push('Criteri & Limiti (C)');
  
  const hClause = botData.transparencyClause !== undefined ? botData.transparencyClause : defaultClause;
  if (!hClause || hClause.trim().length === 0) missing.push('Dichiarazione Modifiche (H)');

  return {
    isComplete: missing.length === 0,
    missingFields: missing
  };
}

function assembleSystemPrompt(botData, levelKey) {
  const preset = schoolData.module4.presets[levelKey] || schoolData.module4.presets.primaria;
  const role = (botData.role || '').trim() || '[NOME E RUOLO ASSISTENTE]';
  const context = (botData.context || '').trim() || '[CONTESTO SCOLASTICO E CLASSE]';
  const objective = (botData.objective || '').trim() || '[OBIETTIVO DIDATTICO RICORRENTE]';
  const actionInput = (botData.actionInput || '').trim() || '[INPUT ATTESO E STRUTTURA OUTPUT]';
  const criteria = (botData.criteria || '').trim() || '[CRITERI DI RISPOSTA, FORMATO E LIMITI]';
  const transparencyClause = (botData.transparencyClause !== undefined ? botData.transparencyClause : preset.transparencyClause).trim() || '[DICHIARAZIONE DI TRASPARENZA E CONTROLLO DOCENTE]';

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

function updateSystemPromptPreview(container, levelKey) {
  const preset = schoolData.module4.presets[levelKey] || schoolData.module4.presets.primaria;
  const state = stateManager.getState();
  const botData = state.m4BotData || {};
  const outputBox = container.querySelector('#system-prompt-output');
  const wordsCountSpan = container.querySelector('#sysprompt-words-count');
  const validationBanner = container.querySelector('#m4-validation-banner');

  if (!outputBox) return;

  const fullPrompt = assembleSystemPrompt(botData, levelKey);
  outputBox.textContent = fullPrompt;

  const words = fullPrompt.trim().split(/\s+/).length;
  if (wordsCountSpan) {
    wordsCountSpan.textContent = `${words} parole`;
  }

  const validation = validateCoachCompleteness(botData, preset.transparencyClause);
  if (validationBanner) {
    validationBanner.className = `validation-alert-banner ${validation.isComplete ? 'success' : 'warning'}`;
    validationBanner.innerHTML = validation.isComplete
      ? `<span>✅</span> <div><strong>COACH Completo:</strong> Tutti i 5 elementi fondamentali sono presenti. Il System Prompt è pronto per la verifica e l'uso!</div>`
      : `<span>⚠️</span> <div><strong>Incompleto:</strong> Mancano ancora: <em>${validation.missingFields.join(', ')}</em>. Compilali per garantire un assistente affidabile.</div>`;
  }
}

function attachModule4Handlers(container, preset, levelKey) {
  const roleInput = container.querySelector('#input-bot-role');
  const contextInput = container.querySelector('#input-bot-context');
  const objectiveInput = container.querySelector('#input-bot-objective');
  const actionInput = container.querySelector('#input-bot-action');
  const criteriaInput = container.querySelector('#input-bot-criteria');
  const transparencyInput = container.querySelector('#input-bot-transparency');
  const loadPresetBtn = container.querySelector('#btn-load-m4-preset');
  const copyBtn = container.querySelector('#btn-copy-sysprompt');
  const gotoM5Btn = container.querySelector('#btn-goto-module5');
  const completeBtn = container.querySelector('#btn-complete-m4');
  const backBtn = container.querySelector('#btn-back-to-m3');

  const updateClearButtonsVisibility = () => {
    container.querySelectorAll('.btn-clear-field').forEach(btn => {
      const targetId = btn.getAttribute('data-target');
      const targetInp = container.querySelector(`#${targetId}`);
      if (targetInp) {
        btn.style.display = targetInp.value && targetInp.value.trim().length > 0 ? 'inline-flex' : 'none';
      }
    });
  };

  const syncStateFromInputs = () => {
    const updated = {
      role: roleInput ? roleInput.value : '',
      context: contextInput ? contextInput.value : '',
      objective: objectiveInput ? objectiveInput.value : '',
      actionInput: actionInput ? actionInput.value : '',
      criteria: criteriaInput ? criteriaInput.value : '',
      transparencyClause: transparencyInput ? transparencyInput.value : ''
    };
    stateManager.setState({ m4BotData: updated });
    updateSystemPromptPreview(container, levelKey);
    updateClearButtonsVisibility();
  };

  [roleInput, contextInput, objectiveInput, actionInput, criteriaInput, transparencyInput].forEach(inp => {
    if (inp) {
      inp.addEventListener('input', syncStateFromInputs);
    }
  });

  // Gestione click pulsanti di pulizia singolo campo
  container.querySelectorAll('.btn-clear-field').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetInp = container.querySelector(`#${targetId}`);
      if (targetInp) {
        targetInp.value = '';
        btn.style.display = 'none';
        syncStateFromInputs();
        targetInp.focus();
      }
    });
  });

  // Carica Preset
  if (loadPresetBtn) {
    loadPresetBtn.addEventListener('click', () => {
      if (roleInput) roleInput.value = preset.role || '';
      if (contextInput) contextInput.value = preset.context || '';
      if (objectiveInput) objectiveInput.value = preset.objective || '';
      if (actionInput) actionInput.value = preset.actionInput || '';
      if (criteriaInput) criteriaInput.value = preset.criteria || '';
      if (transparencyInput) transparencyInput.value = preset.transparencyClause || '';

      syncStateFromInputs();
    });
  }

  // Copia System Prompt
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const state = stateManager.getState();
      const botData = state.m4BotData || {};
      const validation = validateCoachCompleteness(botData);

      if (!validation.isComplete) {
        if (!confirm(`Attenzione: Mancano ancora i seguenti elementi: ${validation.missingFields.join(', ')}.\nVuoi comunque copiare la bozza del System Prompt?`)) {
          return;
        }
      }

      const text = assembleSystemPrompt(botData, levelKey);
      try {
        await navigator.clipboard.writeText(text);
        const orig = copyBtn.innerHTML;
        copyBtn.innerHTML = '✅ System Prompt Copiato!';
        copyBtn.style.backgroundColor = 'var(--success-green-light)';
        copyBtn.style.borderColor = 'var(--success-green)';
        setTimeout(() => {
          copyBtn.innerHTML = orig;
          copyBtn.style.backgroundColor = '';
          copyBtn.style.borderColor = '';
        }, 2500);
      } catch (e) {
        alert('Testo pronto per la copia:\n\n' + text);
      }
    });
  }

  // Avanzamento a Modulo 5
  const proceedToModule5 = () => {
    const state = stateManager.getState();
    const botData = state.m4BotData || {};
    const validation = validateCoachCompleteness(botData);

    if (!validation.isComplete) {
      const confirmProceed = confirm(
        `Attenzione! Il tuo System Prompt non ha ancora tutti i 5 elementi del modello COACH:\n• ${validation.missingFields.join('\n• ')}\n\nVuoi continuare comunque verso la Verifica Finale?`
      );
      if (!confirmProceed) return;
    }

    stateManager.markModuleComplete(4, true);
    stateManager.setModule(5);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (gotoM5Btn) gotoM5Btn.addEventListener('click', proceedToModule5);
  if (completeBtn) completeBtn.addEventListener('click', proceedToModule5);

  // Torna al Modulo 3
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      stateManager.setModule(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function escapeAttr(str) {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
