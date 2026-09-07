/**
 * Maestro Ciuchino - Modulo OUT: Che cosa ho imparato (Alla fine del percorso)
 * Modulo formativo e di orientamento differenziato per ordine di scuola.
 */

import { schoolLevels, schoolData } from '../data/schoolData.js';
import { stateManager } from '../state.js';

export function renderModuleOUT(container) {
  const state = stateManager.getState();
  const levelKey = state.currentLevel || 'primaria';
  const levelInfo = schoolLevels[levelKey];
  const mOutData = schoolData.moduleOUT;
  const questions = mOutData.levels[levelKey] || mOutData.levels.primaria;
  const savedAnswers = state.mOutQuizAnswers || {};

  container.innerHTML = `
    <!-- Header del Modulo OUT -->
    <div class="module-header">
      <span class="module-tag">Modulo OUT • Alla fine del percorso</span>
      <h2 class="module-title">${mOutData.intro.title}</h2>
      <p class="module-subtitle">${mOutData.intro.subtitle} (Fascia: <strong>${levelInfo.name}</strong>).</p>
    </div>

    <!-- Scheda Informativa Fascia Scolastica Attiva -->
    <div class="level-info-banner">
      <div class="level-info-left">
        <span class="level-badge ${levelInfo.badgeColor}">
          <span>${levelInfo.icon}</span> ${levelInfo.name} (${levelInfo.ageRange})
        </span>
        <span class="level-info-desc">I quesiti di orientamento sono calibrati sui materiali e compiti della ${levelInfo.name}.</span>
      </div>
    </div>

    <!-- Consiglio del Maestro Ciuchino -->
    <div class="mascot-callout" role="region" aria-label="Consiglio del Maestro Ciuchino">
      <img src="assets/maestro_ciuchino.png" alt="Maestro Ciuchino" class="mascot-callout-avatar">
      <div class="mascot-callout-content">
        <div class="mascot-callout-title">
          <span>🐴</span> Orientamento Finale del Percorso
        </div>
        <p class="mascot-callout-text">
          "Congratulazioni per essere arrivato alla conclusione del percorso! Questo momento serve per orientarti: <strong>non è un esame</strong>, ma una guida pratica per scoprire se conviene riprendere qualche concetto prima di iniziare a lavorare con l'IA nella tua didattica."
        </p>
      </div>
    </div>

    <!-- Elenco Domande Formative Differenziate -->
    <div class="out-questions-container" id="out-questions-list">
      ${questions.map((q, idx) => {
        const ans = savedAnswers[q.id] || null;
        const isAnswered = ans !== null;
        const isCorrect = ans?.isCorrect || false;

        return `
          <div class="content-card out-question-card ${isCorrect ? 'answered-correct' : ''}" id="card-${q.id}" style="margin-bottom: 1.5rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span class="step-num-badge" style="background-color: var(--primary-blue);">${idx + 1}</span>
                <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary-blue); text-transform: uppercase; letter-spacing: 0.03em;">
                  ${q.moduleName.split(':')[0]}
                </span>
              </div>
              <span class="status-indicator-badge" id="status-${q.id}" style="font-size: 0.78rem; font-weight: 700; color: ${isCorrect ? 'var(--success-green)' : 'var(--text-muted)'};">
                ${isCorrect ? '✅ Argomento chiaro' : 'Da completare'}
              </span>
            </div>

            <p style="font-size: 1rem; font-weight: 600; color: var(--text-main); margin-bottom: 1rem; line-height: 1.5;">
              ${q.question}
            </p>

            <div class="out-options-grid" style="display: flex; flex-direction: column; gap: 0.6rem;">
              ${q.options.map((opt, optIdx) => {
                let btnClass = 'quiz-option-btn';
                if (isAnswered) {
                  if (ans.selectedIdx === optIdx) {
                    btnClass += ans.isCorrect ? ' correct' : ' incorrect-choice';
                  } else if (ans.isCorrect && optIdx === q.correctIndex) {
                    btnClass += ' correct';
                  }
                }
                return `
                  <button type="button" 
                          class="${btnClass}" 
                          data-qid="${q.id}" 
                          data-optidx="${optIdx}"
                          style="text-align: left; line-height: 1.45; padding: 0.85rem 1rem;">
                    ${opt}
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Feedback formativo -->
            <div class="quiz-feedback-box" id="feedback-${q.id}" style="display: ${isAnswered ? 'block' : 'none'}; margin-top: 1rem;">
              ${isAnswered ? (
                isCorrect 
                  ? `<div class="feedback-content success" style="background-color: var(--success-green-light); border: 1.5px solid var(--success-green-border); border-radius: var(--radius-md); padding: 0.85rem 1rem; color: #166534; font-size: 0.9rem; line-height: 1.5;">
                       <strong>💡 Approfondimento:</strong> ${q.feedbackSuccess}
                     </div>`
                  : `<div class="feedback-content warning" style="background-color: #fffbeb; border: 1.5px solid #fcd34d; border-radius: var(--radius-md); padding: 0.85rem 1rem; color: #92400e; font-size: 0.9rem; line-height: 1.5;">
                       <strong>💡 Indicazione didattica:</strong> ${q.feedbackError}<br>
                       <span style="display: inline-block; margin-top: 0.35rem; font-weight: 600; color: var(--primary-blue);">
                         Rileggi con attenzione il testo e riprova a selezionare la risposta.
                       </span>
                     </div>`
              ) : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Guida di Orientamento Finale (Visibile al completamento) -->
    <div id="out-summary-panel" class="content-card" style="display: none; border-left: 4px solid var(--primary-blue); margin-top: 2rem;">
      <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 0.75rem;">
        🧭 Guida di Orientamento: Dove Conviene Tornare
      </h3>
      <div id="out-summary-content" style="margin-bottom: 1.5rem;">
        <!-- Generato via JS -->
      </div>
    </div>

    <!-- Footer Azioni Modulo OUT -->
    <div class="module-footer-actions" style="margin-top: 2rem;">
      <button type="button" class="btn-secondary" id="btn-back-to-m5">
        ⬅ Torna al Modulo 5 (Verifica & Copia)
      </button>
      <button type="button" class="btn-secondary" id="btn-restart-app-out">
        🔄 Ricomincia da capo
      </button>
    </div>
  `;

  attachModuleOUTHandlers(container, questions);
  checkAndRenderOUTSummary(container, questions);
}

function checkAndRenderOUTSummary(container, questions) {
  const state = stateManager.getState();
  const answers = state.mOutQuizAnswers || {};
  const summaryPanel = container.querySelector('#out-summary-panel');
  const summaryContent = container.querySelector('#out-summary-content');
  if (!summaryPanel || !summaryContent) return;

  const allAnswered = questions.every(q => answers[q.id] && answers[q.id].isCorrect);

  if (allAnswered) {
    summaryPanel.style.display = 'block';

    // Raccogli i moduli per cui ci sono stati errori / tentativi ripetuti
    const modulesToRevisit = [];
    const seenModules = new Set();

    questions.forEach(q => {
      const ans = answers[q.id];
      if (ans && (ans.retryCount || 0) > 0) {
        if (!seenModules.has(q.targetModule)) {
          seenModules.add(q.targetModule);
          modulesToRevisit.push({
            moduleNum: q.targetModule,
            moduleName: q.moduleName,
            whyRevisit: q.whyRevisit
          });
        }
      }
    });

    if (modulesToRevisit.length > 0) {
      summaryContent.innerHTML = `
        <p style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 1rem; line-height: 1.5;">
          In base alle risposte fornite, ecco i moduli che ti consigliamo di riprendere per consolidare la tua pratica:
        </p>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${modulesToRevisit.map(m => `
            <div style="background-color: var(--bg-surface); border: 1.5px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
              <div style="flex: 1; min-width: 250px;">
                <div style="font-weight: 700; color: var(--primary-blue); font-size: 0.98rem; margin-bottom: 0.25rem;">
                  ${m.moduleName}
                </div>
                <div style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.45;">
                  ${m.whyRevisit}
                </div>
              </div>
              <button type="button" 
                      class="btn-primary btn-jump-to-module" 
                      data-target-mod="${m.moduleNum}"
                      style="padding: 0.6rem 1.1rem; font-size: 0.88rem; white-space: nowrap;">
                🔍 Vai al Modulo ${m.moduleNum} ➔
              </button>
            </div>
          `).join('')}
        </div>
      `;

      // Attacca i listener ai pulsanti di salto diretto
      summaryContent.querySelectorAll('.btn-jump-to-module').forEach(btn => {
        btn.addEventListener('click', () => {
          const modNum = parseInt(btn.getAttribute('data-target-mod'), 10);
          stateManager.setModule(modNum);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    } else {
      summaryContent.innerHTML = `
        <div style="background-color: var(--success-green-light); border: 1.5px solid var(--success-green-border); border-radius: var(--radius-md); padding: 1rem 1.25rem; color: #166534; font-size: 0.95rem; font-weight: 600; line-height: 1.5;">
          🎉 Tutti gli argomenti fondamentali del percorso sono chiari e consolidati. Puoi iniziare a utilizzare i tuoi prompt e assistenti didattici in classe con piena consapevolezza!
        </div>
      `;
    }
  } else {
    summaryPanel.style.display = 'none';
  }
}

function attachModuleOUTHandlers(container, questions) {
  const backBtn = container.querySelector('#btn-back-to-m5');
  const restartBtn = container.querySelector('#btn-restart-app-out');

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      stateManager.setModule(5);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

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

  // Gestione click sulle opzioni
  const optionButtons = container.querySelectorAll('.quiz-option-btn');
  optionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const qId = btn.getAttribute('data-qid');
      const selectedIdx = parseInt(btn.getAttribute('data-optidx'), 10);
      const qObj = questions.find(q => q.id === qId);
      if (!qObj) return;

      const isCorrect = selectedIdx === qObj.correctIndex;
      const state = stateManager.getState();
      const curAnswers = state.mOutQuizAnswers || {};
      const prevAns = curAnswers[qId] || { retryCount: 0 };
      const newRetryCount = isCorrect ? prevAns.retryCount : (prevAns.retryCount + 1);

      const updatedAnswers = {
        ...curAnswers,
        [qId]: {
          selectedIdx,
          isCorrect,
          retryCount: newRetryCount
        }
      };

      stateManager.setState({ mOutQuizAnswers: updatedAnswers });

      // Aggiorna UI card
      const card = container.querySelector(`#card-${qId}`);
      if (!card) return;

      const cardButtons = card.querySelectorAll('.quiz-option-btn');
      cardButtons.forEach(b => {
        const optIdx = parseInt(b.getAttribute('data-optidx'), 10);
        b.className = 'quiz-option-btn';
        if (optIdx === selectedIdx) {
          b.className += isCorrect ? ' correct' : ' incorrect-choice';
        }
      });

      const statusBadge = card.querySelector(`#status-${qId}`);
      if (statusBadge) {
        statusBadge.innerHTML = isCorrect ? '✅ Argomento chiaro' : '⚠️ Riprova';
        statusBadge.style.color = isCorrect ? 'var(--success-green)' : '#b45309';
      }

      if (isCorrect) {
        card.classList.add('answered-correct');
      } else {
        card.classList.remove('answered-correct');
      }

      const feedbackBox = card.querySelector(`#feedback-${qId}`);
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = isCorrect 
          ? `<div class="feedback-content success" style="background-color: var(--success-green-light); border: 1.5px solid var(--success-green-border); border-radius: var(--radius-md); padding: 0.85rem 1rem; color: #166534; font-size: 0.9rem; line-height: 1.5;">
               <strong>💡 Approfondimento:</strong> ${qObj.feedbackSuccess}
             </div>`
          : `<div class="feedback-content warning" style="background-color: #fffbeb; border: 1.5px solid #fcd34d; border-radius: var(--radius-md); padding: 0.85rem 1rem; color: #92400e; font-size: 0.9rem; line-height: 1.5;">
               <strong>💡 Indicazione didattica:</strong> ${qObj.feedbackError}<br>
               <span style="display: inline-block; margin-top: 0.35rem; font-weight: 600; color: var(--primary-blue);">
                 Rileggi con attenzione il testo e riprova a selezionare la risposta.
               </span>
             </div>`;
      }

      checkAndRenderOUTSummary(container, questions);
    });
  });
}
