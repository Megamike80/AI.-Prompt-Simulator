/**
 * Maestro Ciuchino - Modulo 1: Chiedere una cosa o stabilire una regola
 * Spiegazione semplice senza gergo della differenza tra Richiesta e Regola permanente.
 * Confronto interattivo prima/dopo e mini-quiz metacognitivo.
 */

import { schoolLevels, schoolData } from '../data/schoolData.js';
import { stateManager } from '../state.js';

export function renderModule1(container) {
  const state = stateManager.getState();
  const levelKey = state.currentLevel || 'primaria';
  const levelInfo = schoolLevels[levelKey];
  const m1Data = schoolData.module1;
  const comparison = m1Data.comparisons[levelKey];

  container.innerHTML = `
    <!-- Header del Modulo -->
    <div class="module-header">
      <span class="module-tag">Modulo 1 di 5</span>
      <h2 class="module-title">${m1Data.intro.title}</h2>
      <p class="module-subtitle">${m1Data.intro.subtitle}</p>
    </div>

    <!-- Scheda Informativa Fascia Scolastica Attiva -->
    <div class="level-info-banner">
      <div class="level-info-left">
        <span class="level-badge ${levelInfo.badgeColor}">
          <span>${levelInfo.icon}</span> ${levelInfo.name} (${levelInfo.ageRange})
        </span>
        <span class="level-info-desc">${levelInfo.description}</span>
      </div>
      <small style="color: var(--text-muted); font-size: 0.78rem;">
        Puoi cambiare fascia in alto a destra in qualsiasi momento.
      </small>
    </div>

    <!-- Sezione 1: I due concetti a confronto -->
    <section class="content-card" aria-labelledby="concepts-heading">
      <h3 id="concepts-heading" style="font-size: 1.2rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 0.5rem;">
        1. Due modi completamente diversi di dialogare con l'IA
      </h3>
      <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1rem;">
        Quando usiamo l'intelligenza artificiale a scuola, possiamo trovarci in due situazioni diverse:
      </p>

      <div class="concept-grid">
        <!-- Card Prompt Singolo -->
        <div class="concept-card concept-card-prompt">
          <div class="concept-header">
            <span class="concept-title">${m1Data.intro.conceptPrompt.title}</span>
            <span class="concept-tag">${m1Data.intro.conceptPrompt.tag}</span>
          </div>
          <div class="concept-metaphor">💡 ${m1Data.intro.conceptPrompt.metaphor}</div>
          <p class="concept-desc">${m1Data.intro.conceptPrompt.description}</p>
        </div>

        <!-- Card System Prompt -->
        <div class="concept-card concept-card-system">
          <div class="concept-header">
            <span class="concept-title">${m1Data.intro.conceptSystemPrompt.title}</span>
            <span class="concept-tag">${m1Data.intro.conceptSystemPrompt.tag}</span>
          </div>
          <div class="concept-metaphor">📘 ${m1Data.intro.conceptSystemPrompt.metaphor}</div>
          <p class="concept-desc">${m1Data.intro.conceptSystemPrompt.description}</p>
        </div>
      </div>

      <!-- Avviso Privacy sulle funzioni di memoria tra conversazioni -->
      <div class="validation-alert-banner warning" style="margin-top: 1.25rem;">
        <span>🔒</span>
        <div>
          <strong>Avviso fondamentale sulla Privacy:</strong> Poiché i moderni strumenti di intelligenza artificiale (come ChatGPT, Claude e Gemini) dispongono di funzionalità di memoria e possono conservare informazioni tra conversazioni diverse, <strong>non inserire MAI nomi di alunni, valutazioni individuali, diagnosi o dati personali</strong>, nemmeno in una singola richiesta che pensi di chiudere o eliminare subito.
        </div>
      </div>
    </section>

    <!-- Consiglio del Maestro Ciuchino -->
    <div class="mascot-callout" role="region" aria-label="Consiglio del Maestro Ciuchino">
      <img src="assets/maestro_ciuchino.png" alt="Maestro Ciuchino con occhiali e giacca di pelle" class="mascot-callout-avatar">
      <div class="mascot-callout-content">
        <div class="mascot-callout-title">
          <span>🐴</span> Il Consiglio del Maestro Ciuchino
        </div>
        <p class="mascot-callout-text">
          "Se chiedi all'IA una cosa vaga, lei tirerà a indovinare e il 90% delle volte userà parole da adulti o strutture noiose. Guarda qui sotto cosa succede quando le diamo il contesto e i criteri esatti per la tua fascia: <strong>${levelInfo.name}</strong>!"
        </p>
      </div>
    </div>

    <!-- Sezione 2: Esempio Interattivo Prima & Dopo -->
    <section class="content-card" aria-labelledby="compare-heading">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.75rem;">
        <h3 id="compare-heading" style="font-size: 1.2rem; font-weight: 700; color: var(--primary-blue);">
          2. Laboratorio di Confronto: Prima e Dopo
        </h3>
        <span class="level-badge ${levelInfo.badgeColor}" style="font-size: 0.8rem;">
          Caso reale: ${comparison.topic}
        </span>
      </div>
      <p style="font-size: 0.9375rem; color: var(--text-secondary); margin-bottom: 1rem;">
        Ecco come la stessa intenzione didattica produce due risultati opposti a seconda di come viene formulata la richiesta:
      </p>

      <div class="comparison-grid">
        <!-- Colonna A: Richiesta Vaga -->
        <div class="compare-col compare-col-bad">
          <div class="compare-header">${comparison.bad.title}</div>
          <div class="output-box-title">La richiesta scritta dal docente:</div>
          <div class="code-box">"${comparison.bad.prompt}"</div>
          
          <div class="output-box-title">Il risultato prodotto dall'IA:</div>
          <div class="code-box" style="font-style: italic; color: #475569;">${comparison.bad.output}</div>

          <div class="output-box-title" style="color: var(--danger-red);">Perché non va bene:</div>
          <ul class="bullet-list">
            ${comparison.bad.flaws.map(f => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <!-- Colonna B: Richiesta Efficace -->
        <div class="compare-col compare-col-good">
          <div class="compare-header">${comparison.good.title}</div>
          <div class="output-box-title">La richiesta strutturata (COACH):</div>
          <div class="code-box" style="font-weight: 500;">"${comparison.good.prompt}"</div>
          
          <div class="output-box-title">Il risultato prodotto dall'IA:</div>
          <div class="code-box" style="white-space: pre-wrap; font-size: 0.84rem;">${comparison.good.output}</div>

          <div class="output-box-title" style="color: var(--success-green);">Perché funziona:</div>
          <ul class="bullet-list">
            ${comparison.good.strengths.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div style="background-color: var(--bg-subtle); border-radius: var(--radius-sm); padding: 0.875rem; margin-top: 1.25rem; border-left: 4px solid var(--primary-blue);">
        <strong>📌 La lezione pratica:</strong> ${comparison.coachTakeaway}
      </div>
    </section>

    <!-- Sezione 3: Mini-Quiz "Riconosci la Differenza" -->
    <section class="content-card" aria-labelledby="quiz-heading">
      <h3 id="quiz-heading" style="font-size: 1.2rem; font-weight: 700; color: var(--primary-blue); margin-bottom: 0.5rem;">
        3. Mettiti alla prova: Richiesta Singola o Istruzione Permanente?
      </h3>
      <p style="font-size: 0.9375rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
        Leggi questi 3 scenari scolastici e scegli quale strumento è più opportuno usare:
      </p>

      <div class="quiz-container">
        ${m1Data.quiz.map((q, idx) => {
          const answered = state.m1QuizAnswers && state.m1QuizAnswers[q.id];
          const isSolved = answered && answered.isSolved;
          return `
            <div class="quiz-card" data-quiz-id="${q.id}">
              <div class="quiz-scenario">Scenario ${idx + 1}: ${q.scenario}</div>
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

    <!-- Footer Azioni Modulo 1 -->
    <div class="module-footer-actions">
      <button type="button" class="btn-secondary" id="btn-back-to-in">
        ⬅ Torna al Modulo IN (Prima di iniziare)
      </button>
      <button type="button" class="btn-primary" id="btn-complete-m1">
        ${state.completedModules[1] ? 'Avanti al Modulo 2: Il Modello COACH ➔' : 'Completa il Modulo 1 e Continua ➔'}
      </button>
    </div>
  `;

  // Attach Event Handlers per il Quiz
  attachQuizHandlers(container, m1Data.quiz);

  // Attach Handler per i pulsanti footer
  const backBtn = container.querySelector('#btn-back-to-in');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      stateManager.setModule('in');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const completeBtn = container.querySelector('#btn-complete-m1');
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      stateManager.markModuleComplete(1, true);
      stateManager.setModule(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function attachQuizHandlers(container, quizList) {
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

        // Reset delle classi grafiche sui pulsanti di questa card
        buttons.forEach(b => {
          b.classList.remove('correct', 'incorrect');
        });

        if (isCorrect) {
          btn.classList.add('correct');
          // Blocca i bottoni solo quando la risposta è corretta
          buttons.forEach(b => b.disabled = true);
          feedbackDiv.className = 'quiz-feedback show success';
          feedbackDiv.innerHTML = `🎉 <strong>Ottimo!</strong> ${selectedOption.feedback}`;
        } else {
          btn.classList.add('incorrect');
          // Lascia i bottoni abilitati per permettere di riprovare subito
          feedbackDiv.className = 'quiz-feedback show error';
          feedbackDiv.innerHTML = `⚠️ <strong>Riflettiamo insieme:</strong> ${selectedOption.feedback}`;
        }

        // Salva risposta nello stato
        const state = stateManager.getState();
        const currentAnswers = state.m1QuizAnswers || {};
        currentAnswers[quizId] = {
          selectedIdx: optIdx,
          isCorrect,
          isSolved: isCorrect,
          feedbackText: selectedOption.feedback
        };
        stateManager.setState({ m1QuizAnswers: currentAnswers });
      });
    });
  });
}
