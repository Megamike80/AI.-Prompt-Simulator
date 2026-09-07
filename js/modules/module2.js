/**
 * Maestro Ciuchino - Modulo 2: Scrivere un Prompt Efficace con il Modello COACH
 * Guida passo-passo ai 5 elementi (Contesto, Obiettivo, Azione, Criteri, Hai il controllo tu)
 * con esempi differenziati per fascia scolastica e builder interattivo in tempo reale.
 */

import { schoolLevels, schoolData } from '../data/schoolData.js';
import { stateManager } from '../state.js';

const pillarKeyMap = {
  0: 'c',
  1: 'o',
  2: 'a',
  3: 'crit',
  4: 'h'
};

const pillarClasses = {
  c: { badge: 'pillar-c1', tag: 'preview-tag-c1', name: 'Contesto' },
  o: { badge: 'pillar-o', tag: 'preview-tag-o', name: 'Obiettivo' },
  a: { badge: 'pillar-a', tag: 'preview-tag-a', name: 'Azione' },
  crit: { badge: 'pillar-c2', tag: 'preview-tag-c2', name: 'Criteri' },
  h: { badge: 'pillar-h', tag: 'preview-tag-h', name: 'Controllo' }
};

export function renderModule2(container) {
  const state = stateManager.getState();
  const levelKey = state.currentLevel || 'primaria';
  const levelInfo = schoolLevels[levelKey];
  const m2Data = schoolData.module2;
  const pillars = m2Data.pillars;

  // Assicurati che lo stato degli input esista
  const inputs = state.m2PillarInputs || { c: '', o: '', a: '', crit: '', h: '' };

  container.innerHTML = `
    <!-- Header del Modulo -->
    <div class="module-header">
      <span class="module-tag">Modulo 2 di 5</span>
      <h2 class="module-title">${m2Data.intro.title}</h2>
      <p class="module-subtitle">${m2Data.intro.subtitle} per la <strong>${levelInfo.name}</strong>.</p>
    </div>

    <!-- Scheda Fascia Attiva -->
    <div class="level-info-banner">
      <div class="level-info-left">
        <span class="level-badge ${levelInfo.badgeColor}">
          <span>${levelInfo.icon}</span> ${levelInfo.name} (${levelInfo.ageRange})
        </span>
        <span class="level-info-desc">Esempi calibrati su compiti didattici reali di questa fascia.</span>
      </div>
    </div>

    <!-- Consiglio del Maestro Ciuchino -->
    <div class="mascot-callout" role="region" aria-label="Consiglio del Maestro Ciuchino">
      <img src="assets/maestro_ciuchino.png" alt="Maestro Ciuchino" class="mascot-callout-avatar">
      <div class="mascot-callout-content">
        <div class="mascot-callout-title">
          <span>🐴</span> Il Segreto del Metodo COACH
        </div>
        <p class="mascot-callout-text">
          "Un prompt ben scritto non deve essere un tema lungo! Bastano 5 frasi chiare, una per ogni lettera di <strong>C-O-A-C-H</strong>. Compila le caselle qui sotto: vedrai il tuo prompt comporsi automaticamente a destra nel box blu!"
        </p>
      </div>
    </div>

    <!-- Layout a 2 Colonne: Form Pilastri + Anteprima Live -->
    <div class="coach-layout">
      <!-- Colonna Sinistra: I 5 Pilastri COACH -->
      <div class="coach-pillars-list">
        ${pillars.map((p, idx) => {
          const key = pillarKeyMap[idx];
          const classInfo = pillarClasses[key];
          const exampleText = p.examples[levelKey] || '';
          const currentValue = inputs[key] || '';

          return `
            <div class="pillar-card" id="pillar-card-${key}">
              <div class="pillar-header">
                <span class="pillar-letter-badge ${classInfo.badge}">${p.letter}</span>
                <div class="pillar-titles">
                  <div class="pillar-title">${p.title}</div>
                  <div class="pillar-subtitle">${p.subtitle}</div>
                </div>
              </div>

              <p class="pillar-explanation">${p.explanation}</p>

              <div class="pillar-example-box">
                <div class="pillar-example-label">Esempio per ${levelInfo.name}:</div>
                <div class="pillar-example-text">"${exampleText}"</div>
              </div>

              <div class="pillar-input-wrapper">
                <div class="pillar-input-label">
                  <span>Scrivi la tua versione per questo elemento:</span>
                  <div style="display: flex; align-items: center; gap: 0.4rem;">
                    <button type="button" class="btn-clear-field" data-target="input-pillar-${key}" style="display: ${currentValue ? 'inline-flex' : 'none'};">
                      <span>🧹</span> Pulisci
                    </button>
                    <button type="button" class="btn-use-example" data-pillar-key="${key}" data-example="${encodeURIComponent(exampleText)}">
                      ✨ Usa questo esempio
                    </button>
                  </div>
                </div>
                <textarea class="pillar-textarea" 
                          id="input-pillar-${key}" 
                          data-pillar-key="${key}"
                          placeholder="${p.exercisePlaceholder}">${currentValue}</textarea>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Colonna Destra: Anteprima Live del Prompt Assemblato -->
      <div class="live-preview-panel">
        <div class="live-preview-header">
          <div class="live-preview-title">
            <span>📝</span> Il tuo Prompt Assemblato
          </div>
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--text-muted);" id="preview-word-count">
            0 parole
          </span>
        </div>

        <div class="live-preview-box" id="live-prompt-preview">
          <!-- Generato via JavaScript -->
        </div>

        <div class="live-preview-actions">
          <button type="button" class="btn-secondary" id="btn-fill-all-examples" style="width: 100%; font-size: 0.85rem;">
            ⚡ Compila tutto con l'esempio guidato
          </button>
          <button type="button" class="btn-secondary" id="btn-copy-assembled-prompt" style="width: 100%;">
            📋 Copia Prompt
          </button>
          <button type="button" class="btn-primary" id="btn-send-to-playground" style="width: 100%;">
            🚀 Prova nel Playground (Modulo 3) ➔
          </button>
        </div>
      </div>
    </div>

    <!-- Sezione 2: Mettiti alla Prova: Quale elemento COACH manca? -->
    <section class="content-card" aria-labelledby="m2-quiz-heading" style="margin-top: 1.5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem;">
        <h3 id="m2-quiz-heading" style="font-size: 1.2rem; font-weight: 700; color: var(--primary-blue);">
          2. Mettiti alla prova: Quale ingrediente COACH manca?
        </h3>
        <span class="level-badge ${levelInfo.badgeColor}" style="font-size: 0.8rem;">
          Esempi per: ${levelInfo.name}
        </span>
      </div>
      <p style="font-size: 0.9375rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
        Leggi questi 3 prompt reali scritti da docenti: ciascuno ha una lacuna importante. Individua quale dei 5 elementi COACH è assente per scoprire perché è fondamentale e come andava formulato:
      </p>

      <div class="quiz-container">
        ${((m2Data.quiz && m2Data.quiz[levelKey]) || []).map((q, idx) => {
          const answered = state.m2QuizAnswers && state.m2QuizAnswers[q.id];
          const isSolved = answered && answered.isSolved;
          return `
            <div class="quiz-card" data-quiz-id="${q.id}">
              <div class="quiz-scenario">Prompt reale docente ${idx + 1}:</div>
              <div class="code-box" style="font-style: italic; margin-bottom: 0.75rem; font-size: 0.88rem; line-height: 1.5;">"${q.promptText}"</div>
              <div class="quiz-question">${q.question}</div>
              <div class="quiz-options">
                ${q.options.map((opt, optIdx) => {
                  const isSelected = answered && answered.selectedIdx === optIdx;
                  let btnClass = '';
                  if (isSelected) {
                    btnClass = answered.isCorrect ? 'correct' : 'incorrect';
                  }
                  return `
                    <button type="button" 
                            class="quiz-btn ${btnClass}"
                            data-is-correct="${opt.isCorrect}"
                            data-opt-idx="${optIdx}"
                            ${isSolved ? 'disabled' : ''}>
                      ${opt.text}
                    </button>
                  `;
                }).join('')}
              </div>
              <div class="quiz-feedback ${answered ? 'show ' + (answered.isCorrect ? 'success' : 'error') : ''}" id="feedback-${q.id}">
                ${answered ? (answered.isCorrect ? '🎉 ' : '⚠️ ') + answered.feedbackText : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </section>

    <!-- Footer Azioni Modulo 2 -->
    <div class="module-footer-actions">
      <button type="button" class="btn-secondary" id="btn-back-to-m1">
        ⬅ Torna al Modulo 1
      </button>
      <button type="button" class="btn-primary" id="btn-complete-m2">
        ${state.completedModules[2] ? 'Avanti al Modulo 3: Playground ➔' : 'Completa il Modulo 2 e Continua ➔'}
      </button>
    </div>
  `;

  // Attach Event Handlers
  attachModule2Handlers(container, pillars, levelKey);
  attachModule2QuizHandlers(container, (m2Data.quiz && m2Data.quiz[levelKey]) || []);
  updateLivePreview(container);
}

function updateLivePreview(container) {
  const state = stateManager.getState();
  const inputs = state.m2PillarInputs || { c: '', o: '', a: '', crit: '', h: '' };
  const previewBox = container.querySelector('#live-prompt-preview');
  const wordCountSpan = container.querySelector('#preview-word-count');

  if (!previewBox) return;

  const hasAnyContent = Object.values(inputs).some(val => val.trim().length > 0);

  if (!hasAnyContent) {
    previewBox.innerHTML = `
      <div class="empty-preview-hint">
        Inizia a scrivere negli esercizi a sinistra o clicca su "Usa questo esempio" per vedere il tuo prompt comporsi qui in tempo reale!
      </div>
    `;
    if (wordCountSpan) wordCountSpan.textContent = '0 parole';
    return;
  }

  let html = '';
  let fullRawText = '';

  const order = ['c', 'o', 'a', 'crit', 'h'];
  order.forEach(key => {
    const text = (inputs[key] || '').trim();
    if (text) {
      const info = pillarClasses[key];
      html += `<div style="margin-bottom: 0.6rem;">
        <span class="preview-tag ${info.tag}">${info.name}</span>
        <span>${escapeHtml(text)}</span>
      </div>`;
      fullRawText += text + ' ';
    }
  });

  previewBox.innerHTML = html;

  // Calcola parole
  const words = fullRawText.trim() ? fullRawText.trim().split(/\s+/).length : 0;
  if (wordCountSpan) {
    wordCountSpan.textContent = `${words} parole`;
  }
}

function attachModule2Handlers(container, pillars, levelKey) {
  const textareas = container.querySelectorAll('.pillar-textarea');
  const useExampleButtons = container.querySelectorAll('.btn-use-example');
  const fillAllBtn = container.querySelector('#btn-fill-all-examples');
  const copyBtn = container.querySelector('#btn-copy-assembled-prompt');
  const sendToPlaygroundBtn = container.querySelector('#btn-send-to-playground');
  const completeBtn = container.querySelector('#btn-complete-m2');
  const backBtn = container.querySelector('#btn-back-to-m1');

  const updateClearButtonsVisibility = () => {
    container.querySelectorAll('.btn-clear-field').forEach(btn => {
      const targetId = btn.getAttribute('data-target');
      const targetInp = container.querySelector(`#${targetId}`);
      if (targetInp) {
        btn.style.display = targetInp.value && targetInp.value.trim().length > 0 ? 'inline-flex' : 'none';
      }
    });
  };

  // Input listener in ciascuna textarea
  textareas.forEach(textarea => {
    textarea.addEventListener('input', () => {
      const key = textarea.getAttribute('data-pillar-key');
      const val = textarea.value;
      
      const state = stateManager.getState();
      const updatedInputs = { ...state.m2PillarInputs, [key]: val };
      stateManager.setState({ m2PillarInputs: updatedInputs });

      updateLivePreview(container);
      updateClearButtonsVisibility();
    });
  });

  // Gestione click pulsanti di pulizia singolo campo
  container.querySelectorAll('.btn-clear-field').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const targetInp = container.querySelector(`#${targetId}`);
      if (targetInp) {
        targetInp.value = '';
        btn.style.display = 'none';
        
        const key = targetInp.getAttribute('data-pillar-key');
        const state = stateManager.getState();
        const updatedInputs = { ...state.m2PillarInputs, [key]: '' };
        stateManager.setState({ m2PillarInputs: updatedInputs });

        updateLivePreview(container);
        targetInp.focus();
      }
    });
  });

  // Bottone "Usa questo esempio" singolo
  useExampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-pillar-key');
      const example = decodeURIComponent(btn.getAttribute('data-example'));
      
      const targetTextarea = container.querySelector(`#input-pillar-${key}`);
      if (targetTextarea) {
        targetTextarea.value = example;
      }

      const state = stateManager.getState();
      const updatedInputs = { ...state.m2PillarInputs, [key]: example };
      stateManager.setState({ m2PillarInputs: updatedInputs });

      updateLivePreview(container);
      updateClearButtonsVisibility();
    });
  });

  // Bottone "Compila tutto con l'esempio guidato"
  if (fillAllBtn) {
    fillAllBtn.addEventListener('click', () => {
      const state = stateManager.getState();
      const updatedInputs = {};

      pillars.forEach((p, idx) => {
        const key = pillarKeyMap[idx];
        const exText = p.examples[levelKey] || '';
        updatedInputs[key] = exText;

        const ta = container.querySelector(`#input-pillar-${key}`);
        if (ta) ta.value = exText;
      });

      stateManager.setState({ m2PillarInputs: updatedInputs });
      updateLivePreview(container);
      updateClearButtonsVisibility();
    });
  }

  // Copia prompt negli appunti
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      const rawText = getAssembledPromptText();
      if (!rawText.trim()) {
        alert('Compila prima almeno una sezione del modello COACH!');
        return;
      }
      try {
        await navigator.clipboard.writeText(rawText);
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '✅ Copiato negli appunti!';
        copyBtn.style.backgroundColor = 'var(--success-green-light)';
        copyBtn.style.borderColor = 'var(--success-green)';
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.backgroundColor = '';
          copyBtn.style.borderColor = '';
        }, 2000);
      } catch (e) {
        alert('Testo pronto: ' + rawText);
      }
    });
  }

  // Invia al Playground (Modulo 3)
  if (sendToPlaygroundBtn) {
    sendToPlaygroundBtn.addEventListener('click', () => {
      const rawText = getAssembledPromptText();
      const state = stateManager.getState();
      
      // Trasferisci il testo nel Modulo 3
      stateManager.setState({
        m3PromptText: rawText.trim() || '',
        currentModule: 3
      });
      stateManager.markModuleComplete(2, true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Navigazione Footer
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      stateManager.setModule(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      stateManager.markModuleComplete(2, true);
      stateManager.setModule(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function getAssembledPromptText() {
  const state = stateManager.getState();
  const inputs = state.m2PillarInputs || {};
  const order = ['c', 'o', 'a', 'crit', 'h'];
  return order
    .map(k => (inputs[k] || '').trim())
    .filter(Boolean)
    .join('\n\n');
}

function attachModule2QuizHandlers(container, quizList) {
  const quizCards = container.querySelectorAll('.quiz-card');
  quizCards.forEach(card => {
    const quizId = card.getAttribute('data-quiz-id');
    const quizObj = quizList.find(q => q.id === quizId);
    if (!quizObj) return;

    const buttons = card.querySelectorAll('.quiz-btn');
    const feedbackDiv = card.querySelector(`#feedback-${quizId}`);

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const isCorrect = btn.getAttribute('data-is-correct') === 'true';
        const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        const selectedOption = quizObj.options[optIdx];

        // Reset classi grafiche sui bottoni di questa card
        buttons.forEach(b => {
          b.classList.remove('correct', 'incorrect');
        });

        if (isCorrect) {
          btn.classList.add('correct');
          // Disabilita solo quando la risposta è corretta
          buttons.forEach(b => b.disabled = true);
          feedbackDiv.className = 'quiz-feedback show success';
          feedbackDiv.innerHTML = `🎉 <strong>Ottimo occhio!</strong> ${selectedOption.feedback}`;
        } else {
          btn.classList.add('incorrect');
          // Lascia i bottoni abilitati per consentire nuovi tentativi
          feedbackDiv.className = 'quiz-feedback show error';
          feedbackDiv.innerHTML = `⚠️ <strong>Riflettiamo insieme:</strong> ${selectedOption.feedback}`;
        }

        // Salva risposta nello stato
        const state = stateManager.getState();
        const currentAnswers = state.m2QuizAnswers || {};
        currentAnswers[quizId] = {
          selectedIdx: optIdx,
          isCorrect,
          isSolved: isCorrect,
          feedbackText: selectedOption.feedback
        };
        stateManager.setState({ m2QuizAnswers: currentAnswers });
      });
    });
  });
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
