/**
 * Maestro Ciuchino - Modulo IN: Che cosa so già (Prima di iniziare)
 * Modulo formativo non valutativo per allineare le conoscenze di base sull'IA.
 */

import { schoolData } from '../data/schoolData.js';
import { stateManager } from '../state.js';

export function renderModuleIN(container) {
  const mInData = schoolData.moduleIN;
  const questions = mInData.questions;
  const state = stateManager.getState();
  const savedAnswers = state.mInQuizAnswers || {};

  container.innerHTML = `
    <!-- Header del Modulo IN -->
    <div class="module-header">
      <span class="module-tag">Modulo IN • Prima di iniziare</span>
      <h2 class="module-title">${mInData.intro.title}</h2>
      <p class="module-subtitle">${mInData.intro.subtitle}</p>
    </div>

    <!-- Consiglio del Maestro Ciuchino -->
    <div class="mascot-callout" role="region" aria-label="Consiglio del Maestro Ciuchino">
      <img src="assets/maestro_ciuchino.png" alt="Maestro Ciuchino" class="mascot-callout-avatar">
      <div class="mascot-callout-content">
        <div class="mascot-callout-title">
          <span>🐴</span> Benvenuto nel Laboratorio!
        </div>
        <p class="mascot-callout-text">
          "Prima di iniziare a scrivere prompt e costruire assistenti didattici, facciamo un rapido allineamento sulle basi dell'IA. <strong>Non è una verifica</strong>: se un concetto non ti è del tutto chiaro, troverai subito una spiegazione semplice per comprenderlo. Se invece ti senti già pronto, puoi iniziare direttamente dal Modulo 1!"
        </p>
      </div>
    </div>

    <!-- Barra Azione Rapida Salto -->
    <div style="display: flex; justify-content: flex-end; margin-bottom: 1.25rem;">
      <button type="button" class="btn-secondary" id="btn-skip-to-m1" style="font-size: 0.88rem;">
        Salta e inizia direttamente il Modulo 1 ➔
      </button>
    </div>

    <!-- Elenco Domande Formative -->
    <div class="in-questions-container" id="in-questions-list">
      ${questions.map((q, idx) => {
        const ans = savedAnswers[q.id] || null;
        const isAnswered = ans !== null;
        const isCorrect = ans?.isCorrect || false;

        return `
          <div class="content-card in-question-card ${isCorrect ? 'answered-correct' : ''}" id="card-${q.id}" style="margin-bottom: 1.5rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span class="step-num-badge" style="background-color: var(--primary-blue);">${idx + 1}</span>
                <span style="font-size: 0.82rem; font-weight: 700; color: var(--primary-blue); text-transform: uppercase; letter-spacing: 0.03em;">
                  ${q.topic}
                </span>
              </div>
              <span class="status-indicator-badge" id="status-${q.id}" style="font-size: 0.78rem; font-weight: 700; color: ${isCorrect ? 'var(--success-green)' : 'var(--text-muted)'};">
                ${isCorrect ? '✅ Argomento chiaro' : 'Da completare'}
              </span>
            </div>

            <p style="font-size: 1rem; font-weight: 600; color: var(--text-main); margin-bottom: 1rem; line-height: 1.5;">
              ${q.question}
            </p>

            <div class="in-options-grid" style="display: flex; flex-direction: column; gap: 0.6rem;">
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
                       <strong>💡 Concetto chiave:</strong> ${q.feedbackError}<br>
                       <span style="display: inline-block; margin-top: 0.35rem; font-weight: 600; color: var(--primary-blue);">
                         Rileggi le opzioni e riprova a selezionare la risposta corretta.
                       </span>
                     </div>`
              ) : ''}
            </div>
          </div>
        `;
      }).join('')}
    </div>

    <!-- Sezione Riepilogo e Completamento (Visibile dopo aver risposto) -->
    <div id="in-summary-panel" class="content-card" style="display: none; border-left: 4px solid var(--success-green); margin-top: 2rem;">
      <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 0.5rem;">
        🎯 Riepilogo delle Conoscenze di Base
      </h3>
      <div id="in-summary-content" style="margin-bottom: 1.25rem; font-size: 0.92rem; line-height: 1.55; color: var(--text-secondary);">
        <!-- Generato via JS -->
      </div>
      <div style="display: flex; justify-content: flex-end;">
        <button type="button" class="btn-primary" id="btn-start-course">
          Inizia il Laboratorio: Modulo 1 ➔
        </button>
      </div>
    </div>

    <!-- Footer Azioni Modulo IN -->
    <div class="module-footer-actions" style="margin-top: 2rem;">
      <div></div>
      <button type="button" class="btn-primary" id="btn-footer-continue-m1">
        Continua al Modulo 1 (Chiedere una cosa o stabilire una regola) ➔
      </button>
    </div>
  `;

  attachModuleINHandlers(container, questions);
  checkAndRenderSummary(container, questions);
}

function checkAndRenderSummary(container, questions) {
  const state = stateManager.getState();
  const answers = state.mInQuizAnswers || {};
  const summaryPanel = container.querySelector('#in-summary-panel');
  const summaryContent = container.querySelector('#in-summary-content');
  if (!summaryPanel || !summaryContent) return;

  const allAnswered = questions.every(q => answers[q.id] && answers[q.id].isCorrect);

  if (allAnswered) {
    summaryPanel.style.display = 'block';

    // Raccogli solo gli argomenti in cui il docente ha avuto bisogno di riprovare (retryCount > 0)
    const hadRetries = questions.filter(q => (answers[q.id]?.retryCount || 0) > 0);

    if (hadRetries.length > 0) {
      summaryContent.innerHTML = `
        <p style="margin-bottom: 0.75rem; color: var(--text-main); font-weight: 600;">
          Ecco i concetti su cui ti sei soffermato e che è utile tenere a mente durante il laboratorio:
        </p>
        <ul style="margin: 0; padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem;">
          ${hadRetries.map(q => `
            <li>
              <strong>${q.topic}:</strong> ${q.feedbackError}
            </li>
          `).join('')}
        </ul>
      `;
    } else {
      summaryContent.innerHTML = `
        <p style="color: #166534; font-weight: 600; margin: 0;">
          Tutte le conoscenze di base sono chiare e allineate. Sei pronto per iniziare a progettare i tuoi prompt e i tuoi assistenti didattici!
        </p>
      `;
    }
  } else {
    summaryPanel.style.display = 'none';
  }
}

function attachModuleINHandlers(container, questions) {
  const skipBtn = container.querySelector('#btn-skip-to-m1');
  const footerBtn = container.querySelector('#btn-footer-continue-m1');
  const startCourseBtn = container.querySelector('#btn-start-course');

  const goToModule1 = () => {
    stateManager.markModuleComplete('in', true);
    stateManager.setModule(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (skipBtn) skipBtn.addEventListener('click', goToModule1);
  if (footerBtn) footerBtn.addEventListener('click', goToModule1);
  if (startCourseBtn) startCourseBtn.addEventListener('click', goToModule1);

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
      const curAnswers = state.mInQuizAnswers || {};
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

      stateManager.setState({ mInQuizAnswers: updatedAnswers });

      // Aggiorna UI della card corrente
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
               <strong>💡 Concetto chiave:</strong> ${qObj.feedbackError}<br>
               <span style="display: inline-block; margin-top: 0.35rem; font-weight: 600; color: var(--primary-blue);">
                 Rileggi le opzioni e riprova a selezionare la risposta corretta.
               </span>
             </div>`;
      }

      checkAndRenderSummary(container, questions);
    });
  });
}
