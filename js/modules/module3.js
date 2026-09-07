/**
 * Maestro Ciuchino - Modulo 3: Playground con Autovalutazione Guidata COACH
 * Editor interattivo, scheda di autovalutazione con finestre di aiuto puntuale (?)
 * e simulatore didattico con disclaimer pedagogico obbligatorio.
 */

import { schoolLevels, schoolData } from '../data/schoolData.js';
import { stateManager } from '../state.js';

const coachPillarsMeta = [
  {
    key: 'c',
    letter: 'C',
    name: 'Contesto',
    badgeClass: 'pillar-c1',
    tagClass: 'preview-tag-c1',
    question: "Hai specificato chi sei, l'ordine di scuola e l'età/profilo della tua classe?",
    tipInfanzia: "Aggiungi: 'Sono un'educatrice/insegnante di scuola dell'infanzia con bambini di [3/4/5 anni]...'",
    tipPrimaria: "Aggiungi: 'Sono un docente di scuola primaria per una classe [1ª-5ª]...'",
    tipSecondaria: "Aggiungi: 'Sono un docente di [materia] per la classe [1ª-3ª] della scuola secondaria di I grado...'"
  },
  {
    key: 'o',
    letter: 'O',
    name: 'Obiettivo',
    badgeClass: 'pillar-o',
    tagClass: 'preview-tag-o',
    question: "Hai chiarito l'esatto prodotto o compito didattico che vuoi realizzare?",
    tipInfanzia: "Aggiungi: 'Obiettivo: creare una filastrocca/gioco motorio su [argomento]...'",
    tipPrimaria: "Aggiungi: 'Obiettivo: preparare una scheda operativa di comprensione/problema su [argomento]...'",
    tipSecondaria: "Aggiungi: 'Obiettivo: creare una verifica formativa/rubrica su [argomento]...'"
  },
  {
    key: 'a',
    letter: 'A',
    name: 'Azione',
    badgeClass: 'pillar-a',
    tagClass: 'preview-tag-a',
    question: "Hai usato verbi operativi e indicato la sequenza di passaggi che l'IA deve compiere?",
    tipInfanzia: "Aggiungi: 'Descrivi le 3 fasi del gioco ed esplicita le frasi brevi da pronunciare...'",
    tipPrimaria: "Aggiungi: 'Redigi il testo di 100 parole e formula 3 quesiti a scelta multipla...'",
    tipSecondaria: "Aggiungi: 'Struttura la prova in Sezione A (conoscenze) e Sezione B (competenze)...'"
  },
  {
    key: 'crit',
    letter: 'C',
    name: 'Criteri & Limiti',
    badgeClass: 'pillar-c2',
    tagClass: 'preview-tag-c2',
    question: "Hai fissato limiti di lunghezza, formato, tempo ed esclusioni esplicite (cosa NON fare)?",
    tipInfanzia: "Aggiungi: 'Massimo 100 parole, frasi brevissime, niente riferimenti a lezioni frontali...'",
    tipPrimaria: "Aggiungi: 'Massimo 150 parole, evidenzia in grassetto i termini chiave, 3 opzioni per quiz...'",
    tipSecondaria: "Aggiungi: 'Tempo 30 min, punteggio totale 10/10, evita quesiti ambigui o non spiegati...'"
  },
  {
    key: 'h',
    letter: 'H',
    name: 'Hai il controllo tu!',
    badgeClass: 'pillar-h',
    tagClass: 'preview-tag-h',
    question: "Hai chiesto all'IA di dichiarare fonti, assunti e le modifiche apportate rispetto alla tua richiesta?",
    tipInfanzia: "Aggiungi: 'Dichiara in calce le varianti di gioco introdotte rispetto all'idea iniziale.'",
    tipPrimaria: "Aggiungi: 'Concludi dichiarando quali termini hai semplificato e perché.'",
    tipSecondaria: "Aggiungi: 'Includi la dichiarazione esplicita delle scelte metodologiche e dei criteri di correzione.'"
  }
];

export function renderModule3(container) {
  const state = stateManager.getState();
  const levelKey = state.currentLevel || 'primaria';
  const levelInfo = schoolLevels[levelKey];
  const m3Data = schoolData.module3;
  const tooltips = m3Data.tooltips[levelKey] || {};
  const samplePrompt = m3Data.samplePrompts[levelKey] || {};

  const promptText = state.m3PromptText || '';
  const checks = state.m3CoachChecks || { c: false, o: false, a: false, crit: false, h: false };

  const verifiedCount = Object.values(checks).filter(Boolean).length;
  const isAllComplete = verifiedCount === 5;

  container.innerHTML = `
    <!-- Header del Modulo -->
    <div class="module-header">
      <span class="module-tag">Modulo 3 di 5</span>
      <h2 class="module-title">${m3Data.intro.title}</h2>
      <p class="module-subtitle">${m3Data.intro.subtitle} (Fascia attiva: <strong>${levelInfo.name}</strong>).</p>
    </div>

    <!-- Scheda Fascia Attiva -->
    <div class="level-info-banner">
      <div class="level-info-left">
        <span class="level-badge ${levelInfo.badgeColor}">
          <span>${levelInfo.icon}</span> ${levelInfo.name} (${levelInfo.ageRange})
        </span>
        <span class="level-info-desc">Tutte le guide e le icone '?' sono tarate su compiti scolastici per ${levelInfo.name}.</span>
      </div>
    </div>

    <!-- Consiglio del Maestro Ciuchino -->
    <div class="mascot-callout" role="region" aria-label="Consiglio del Maestro Ciuchino">
      <img src="assets/maestro_ciuchino.png" alt="Maestro Ciuchino" class="mascot-callout-avatar">
      <div class="mascot-callout-content">
        <div class="mascot-callout-title">
          <span>🐴</span> Come funziona l'Autovalutazione COACH
        </div>
        <p class="mascot-callout-text">
          "Non ci sono voti o giudizi: sei tu a guidare il processo! Scrivi il tuo prompt a sinistra, poi guarda la <strong>Scheda COACH a destra</strong>. Se hai un dubbio su una voce, tocca l'icona <strong>?</strong> per vedere cosa significa ed un mini-esempio su misura per la tua scuola!"
        </p>
      </div>
    </div>

    <!-- Griglia Principale: Editor + Scheda Autovalutazione -->
    <div class="playground-grid">
      <!-- Colonna Sinistra: Editor del Prompt -->
      <div class="playground-editor-card">
        <div class="editor-toolbar">
          <div class="toolbar-title">
            <span>✍️</span> Il tuo Prompt
          </div>
            <button type="button" class="btn-tool" id="btn-load-sample" title="Carica un prompt di esempio per ${levelInfo.name}">
              ✨ Esempio ${levelInfo.name.split(' ')[1] || ''}
            </button>
            <button type="button" class="btn-tool" id="btn-clear-prompt" title="Cancella testo" style="display: ${promptText && promptText.trim().length > 0 ? 'inline-flex' : 'none'};">
              🧹 Pulisci
            </button>
          </div>
        </div>

        <textarea class="playground-textarea" 
                  id="playground-prompt-input" 
                  placeholder="Scrivi o incolla qui il tuo prompt completo, oppure clicca sul pulsante 'Esempio' in alto...">${promptText}</textarea>

        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.5rem; font-size: 0.78rem; color: var(--text-muted);">
          <span id="prompt-stats">0 parole • 0 caratteri</span>
          <span style="font-style: italic;">Salvataggio automatico attivo</span>
        </div>
      </div>

      <!-- Colonna Destra: Scheda di Autovalutazione Guidata COACH -->
      <div class="rubric-card">
        <div class="rubric-header">
          <div class="rubric-title">
            <span>🔍</span> Verifica Metodo COACH
          </div>
          <span class="rubric-progress-badge ${isAllComplete ? 'complete' : ''}" id="rubric-badge">
            ${isAllComplete ? '🎉 COACH Completo (5/5)' : `${verifiedCount}/5 Elementi Verificati`}
          </span>
        </div>

        <div class="rubric-items-list">
          ${coachPillarsMeta.map(p => {
            const isChecked = !!checks[p.key];
            const tt = tooltips[p.key] || {};
            const tipText = levelKey === 'infanzia' ? p.tipInfanzia : (levelKey === 'secondaria' ? p.tipSecondaria : p.tipPrimaria);

            return `
              <div class="rubric-item ${isChecked ? 'checked' : ''}" id="rubric-item-${p.key}">
                <div class="rubric-item-header">
                  <div class="rubric-item-title-group">
                    <span class="preview-tag ${p.tagClass}">${p.letter}</span>
                    <span>${p.name}</span>
                    <button type="button" 
                            class="help-icon-btn" 
                            aria-label="Informazioni su ${p.name}" 
                            aria-expanded="false"
                            data-help-title="${p.name} (Modello COACH)"
                            data-help-body="${escapeAttr(tt.shortDef || p.question)}"
                            data-help-reason="${escapeAttr(tt.whyItMatters || '')}"
                            data-help-example="${escapeAttr(tt.miniExample || '')}">?</button>
                  </div>

                  <button type="button" 
                          class="rubric-toggle-btn ${isChecked ? 'btn-present' : 'btn-missing'}"
                          data-pillar-key="${p.key}">
                    ${isChecked ? '✅ Presente' : '⏳ Da aggiungere'}
                  </button>
                </div>

                <div class="rubric-question">${p.question}</div>

                ${!isChecked ? `
                  <div class="rubric-tip-box" id="tip-box-${p.key}">
                    <span>💡</span>
                    <div>
                      <strong>Suggerimento pratico:</strong> ${tipText}
                    </div>
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>

    <!-- Sezione Simulazione Didattica -->
    <div class="simulation-card">
      <div class="simulation-header">
        <div class="simulation-title">
          <span>🧪</span> Simulazione Risposta IA Didattica
        </div>
        <button type="button" class="btn-secondary" id="btn-run-simulation" style="font-size: 0.85rem;">
          ⚡ Genera Simulazione Risposta
        </button>
      </div>

      <div class="simulation-box" id="simulation-output-box">
        <p style="color: var(--text-muted); font-style: italic;">
          Clicca su "Genera Simulazione Risposta" per visualizzare come un'intelligenza artificiale interpreterebbe il prompt scritto sopra applicando i criteri didattici.
        </p>
      </div>

      <div class="simulation-disclaimer">
        <span>⚠️</span>
        <span><strong>Controllo del Docente:</strong> Questa è una simulazione didattica generata a scopo formativo. La verifica scientifica, la conformità al programma e l'adeguatezza alla classe competono unicamente all'insegnante.</span>
      </div>
    </div>

    <!-- Footer Azioni Modulo 3 -->
    <div class="module-footer-actions">
      <button type="button" class="btn-secondary" id="btn-back-to-m2">
        ⬅ Torna al Modulo 2 (COACH)
      </button>
      <button type="button" class="btn-primary" id="btn-complete-m3">
        ${state.completedModules[3] ? 'Avanti al Modulo 4: Costruisci Chatbot ➔' : 'Completa il Modulo 3 e Continua ➔'}
      </button>
    </div>
  `;

  // Attach Event Handlers
  attachModule3Handlers(container, samplePrompt, levelKey);
  updatePromptStats(container);
}

function updatePromptStats(container) {
  const textarea = container.querySelector('#playground-prompt-input');
  const statsSpan = container.querySelector('#prompt-stats');
  if (!textarea || !statsSpan) return;

  const text = textarea.value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  const chars = text.length;

  statsSpan.textContent = `${words} parole • ${chars} caratteri`;
}

function attachModule3Handlers(container, samplePrompt, levelKey) {
  const textarea = container.querySelector('#playground-prompt-input');
  const loadSampleBtn = container.querySelector('#btn-load-sample');
  const clearBtn = container.querySelector('#btn-clear-prompt');
  const toggleButtons = container.querySelectorAll('.rubric-toggle-btn');
  const simulationBtn = container.querySelector('#btn-run-simulation');
  const simOutputBox = container.querySelector('#simulation-output-box');
  const backBtn = container.querySelector('#btn-back-to-m2');
  const completeBtn = container.querySelector('#btn-complete-m3');

  const updateClearBtnDisplay = () => {
    if (clearBtn && textarea) {
      clearBtn.style.display = textarea.value && textarea.value.trim().length > 0 ? 'inline-flex' : 'none';
    }
  };

  // Input listener textarea
  if (textarea) {
    textarea.addEventListener('input', () => {
      const val = textarea.value;
      stateManager.setState({ m3PromptText: val });
      updatePromptStats(container);
      updateClearBtnDisplay();
    });
  }

  // Carica Esempio
  if (loadSampleBtn) {
    loadSampleBtn.addEventListener('click', () => {
      if (samplePrompt && samplePrompt.text) {
        textarea.value = samplePrompt.text;
        stateManager.setState({
          m3PromptText: samplePrompt.text,
          // Spunta tutti i 5 elementi poiché l'esempio è completo
          m3CoachChecks: { c: true, o: true, a: true, crit: true, h: true }
        });
        updatePromptStats(container);
        renderModule3(container);
      }
    });
  }

  // Pulisci
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      textarea.value = '';
      clearBtn.style.display = 'none';
      stateManager.setState({
        m3PromptText: '',
        m3CoachChecks: { c: false, o: false, a: false, crit: false, h: false }
      });
      updatePromptStats(container);
      renderModule3(container);
      const newTa = container.querySelector('#playground-prompt-input');
      if (newTa) newTa.focus();
    });
  }

  // Toggle checklist autovalutazione
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-pillar-key');
      const state = stateManager.getState();
      const currentChecks = state.m3CoachChecks || {};
      const nextState = !currentChecks[key];

      const updatedChecks = { ...currentChecks, [key]: nextState };
      stateManager.setState({ m3CoachChecks: updatedChecks });

      // Rirenderizza per aggiornare i suggerimenti e il badge di completezza
      renderModule3(container);
    });
  });

  // Generatore Simulazione Risposta Didattica
  if (simulationBtn) {
    simulationBtn.addEventListener('click', () => {
      const state = stateManager.getState();
      const currentText = (state.m3PromptText || textarea.value || '').trim();

      if (!currentText) {
        alert('Scrivi o carica prima un prompt nel riquadro di sinistra!');
        return;
      }

      const checks = state.m3CoachChecks || {};
      const count = Object.values(checks).filter(Boolean).length;

      simOutputBox.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; color: var(--primary-blue); font-weight: 700;">
          <span>🤖</span> Elaborazione dell'assistente per la ${schoolLevels[levelKey].name}...
        </div>
        <div style="background-color: var(--bg-surface); border-radius: var(--radius-sm); padding: 1rem; border: 1px solid var(--border-subtle); white-space: pre-wrap; font-size: 0.9rem; line-height: 1.6;">
${generateSimulatedResponse(currentText, levelKey, count)}
        </div>
      `;
    });
  }

  // Navigazione Footer
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      stateManager.setModule(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      stateManager.markModuleComplete(3, true);
      stateManager.setModule(4);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function generateSimulatedResponse(promptText, levelKey, verifiedCount) {
  if (levelKey === 'infanzia') {
    return `🌿 FILASTROCCA: "È ARRIVATA LA PRIMAVERA!" (Sezione 4 anni)
-----------------------------------------------------------------
Vola vola la rondinella,
porta in becco una foglia bella.
Sotto l'albero c'è un bel fiore,
che si apre con tanto amore.

Batte batte il sole tiepido,
sull'erbetta verde e lucida.
Tutti i bimbi batton le mani,
per giocare insieme a noi oggi e domani!

Modalità di accompagnamento:
A ogni fine verso, i bambini eseguono due battiti delle mani sulle ginocchia a tempo di filastrocca.

[DICHIARAZIONE SCELTE RITMICHE & MODIFICHE]:
• Ho impostato una struttura in 8 versi con rime baciate binarie (rondinella/bella, fiore/amore, tiepido/lucida come assonanza facilitata per i 4 anni, mani/domani) e ritmo cantilenato a 4 tempi per facilitare la coordinazione motoria.
• Ho selezionato esclusivamente le immagini concrete richieste (rondinella, fiore, sole tiepido), evitando qualsiasi concetto astratto o stagionale complesso.`;
  } else if (levelKey === 'secondaria') {
    return `TRACCIA PER TESTO ARGOMENTATIVO — Classe 3ª Secondaria di I Grado
Disciplina: Italiano | Tipologia: Testo argomentativo
Argomento: Smartphone, social network e gestione del tempo libero

DOCUMENTO-STIMOLO:
"Oggi smartphone e social network occupano una parte importante delle giornate dei ragazzi: permettono di restare sempre in contatto con gli amici, condividere passioni e scoprire nuove informazioni. Allo stesso tempo, molti giovani raccontano di sentirsi spesso distratti durante lo studio e di dedicare meno tempo alla lettura, allo sport o ad altre attività all'aria aperta."

SCALETTA CON DOMANDE-GUIDA:
1. TESI (La tua opinione): Qual è la tua posizione personale sul ruolo dei social network nella vita quotidiana dei ragazzi? Quali sono le opportunità e i vantaggi principali che offrono?
2. ANTITESI (Il punto di vista opposto): Quali sono invece le obiezioni o i rischi più frequenti legati a un uso eccessivo o inconsapevole degli schermi nel tempo libero?
3. CONCLUSIONE (La tua sintesi): Come è possibile, secondo te, costruire un equilibrio sano tra il tempo trascorso online e le relazioni ed esperienze nella vita reale?

GRIGLIA DI AUTOVALUTAZIONE ALUNNO (4 Punti):
[ ] 1. Ho espresso con chiarezza la mia tesi fin dall'introduzione?
[ ] 2. Ho sostenuto la mia tesi con almeno due argomenti ed esempi concreti?
[ ] 3. Ho esaminato l'antitesi e formulato una conclusione coerente con la premessa?
[ ] 4. Ho utilizzato connettivi logici appropriati (infatti, d'altra parte, tuttavia, pertanto)?

[DICHIARAZIONE MODIFICHE & SPUNTI AGGIUNTI]:
• Documento-stimolo: Ho redatto un testo di 59 parole con una formulazione qualitativa ed equilibrata, evitando deliberatamente statistiche o percentuali inventate.
• Spunti di riflessione aggiunti dall'IA: Nella domanda di conclusione ho introdotto lo spunto della ricerca di un equilibrio tra vita online e offline; nella griglia di autovalutazione ho declinato i 4 punti richiesti su coerenza della tesi, esempi a supporto, gestione dell'antitesi e uso dei connettivi logici.`;
  } else {
    // Primaria
    return `SCHEDA OPERATIVA: MATEMATICA IN PASTICCERIA — Classe 4ª Primaria
-----------------------------------------------------------------
Contesto di realtà: "La Bottega dei Dolci"

Testo del problema:
Il pasticciere Carlo prepara 6 grandi vassoi di pasticcini per la festa del quartiere. Su ciascun vassoio dispone 15 bignè alla crema e 10 tartellette alla frutta. Prima di aprire il negozio, confeziona tutti i pasticcini preparati distribuendoli in parti uguali dentro 5 scatole regalo per i clienti.

Domande progressive di lavoro:
1. Quanti pasticcini ha preparato in totale il pasticciere Carlo?
   (Pista: calcola prima quanti dolci ci sono su ogni vassoio, poi moltiplica per il numero totale dei vassoi).
2. Quanti pasticcini ci saranno dentro ciascuna delle 5 scatole regalo?
   (Pista: dividi il numero totale di pasticcini per il numero di scatole).

[DICHIARAZIONE STRATEGIE DI CALCOLO E SCELTE INTRODOTTE]:
• Strategie di calcolo sollecitate: addizione iniziale per il totale parziale (15 + 10 = 25 dolci a vassoio), moltiplicazione per i vassoi (25 × 6 = 150 dolci complessivi) e successiva divisione esatta a una cifra senza resto (150 ÷ 5 = 30 dolci per scatola).
• Scelte e assunti aggiunti dall'IA: ho introdotto l'elemento narrativo delle 5 scatole regalo per creare un contesto concreto per la divisione richiesta, garantendo risultati con soli numeri naturali interi (senza decimali né resti).`;
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
