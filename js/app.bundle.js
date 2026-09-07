/**
 * Maestro Ciuchino - Bundle Applicativo Completo Standalone (Zero-CORS, Funziona su file:/// e http://)
 * Include: schoolData, stateManager, moduleIN, module1, module2, module3, module4, module5, moduleOUT e App Controller
 */
(function () {
  'use strict';

  // 1. DATI DIDATTICI
/**
 * Maestro Ciuchino - Archivio Dati Didattici
 * Contenuti differenziati per Scuola dell'Infanzia, Primaria e Secondaria di I Grado
 */

const schoolLevels = {
  infanzia: {
    id: 'infanzia',
    name: "Scuola dell'Infanzia",
    ageRange: "3-6 anni",
    icon: "🎨",
    badgeColor: "level-badge-infanzia",
    description: "Attività ludiche, fiabe sensoriali, schede di continuità casa-scuola e routine di sezione.",
    focusAreas: "Linguaggio, narrazione, coordinazione motoria, esplorazione emotiva e relazioni con le famiglie."
  },
  primaria: {
    id: 'primaria',
    name: "Scuola Primaria",
    ageRange: "6-11 anni",
    icon: "📚",
    badgeColor: "level-badge-primaria",
    description: "Compiti graduati, brani di comprensione, schede operative, compiti di realtà e interdisciplinarietà.",
    focusAreas: "Lettura e scrittura, logica matematica, scienze e storia narrate, inclusione e differenziazione."
  },
  secondaria: {
    id: 'secondaria',
    name: "Scuola Secondaria di I Grado",
    ageRange: "11-14 anni",
    icon: "🔬",
    badgeColor: "level-badge-secondaria",
    description: "Tracce di verifica strutturate, rubriche di valutazione, sintesi concettuali e compiti a stazioni.",
    focusAreas: "Pensiero critico, metodo di studio, comprensione approfondita di fonti, argomentazione e verifiche."
  }
};

const schoolData = {
  // ==========================================
  // MODULO 1: Chiedere una cosa o stabilire una regola
  // ==========================================
  module1: {
    intro: {
      title: "Chiedere una cosa o stabilire una regola",
      subtitle: "La differenza fondamentale tra una 'Richiesta Singola' e una 'Istruzione Permanente'",
      conceptPrompt: {
        title: "Una Richiesta Singola (Prompt)",
        metaphor: "Come un bigliettino volante con istruzioni per un singolo compito",
        description: "Serve per un compito specifico e circoscritto. All'interno della stessa conversazione puoi chiedere modifiche e affinare la risposta, ma per svolgere lo stesso tipo di lavoro in futuro dovrai riscrivere ogni volta tutte le istruzioni, il contesto e i criteri.",
        tag: "Compito Specifico"
      },
      conceptSystemPrompt: {
        title: "Un'Istruzione Permanente (System Prompt)",
        metaphor: "Come il diario di bordo con le regole stabili del tuo assistente",
        description: "Definisce un comportamento stabile, specializzato e riutilizzabile. Trasforma l'IA in un assistente didattico su misura: ogni volta che gli assegni un nuovo argomento, applicherà automaticamente le tue regole, il tuo stile e la tua fascia scolastica senza doverli ripetere.",
        tag: "Assistente Riutilizzabile"
      }
    },
    comparisons: {
      infanzia: {
        topic: "Attività di accoglienza e routine del mattino",
        bad: {
          title: "❌ Richiesta Vaga (Senza Contesto né Criteri)",
          prompt: "Scrivimi una storia per l'accoglienza dei bambini a scuola.",
          output: "C'era una volta il piccolo Marco che andava a scuola con il suo zaino pieno di quaderni a righe. Arrivato nell'aula numero 4, salutò il professore e si mise a studiare la geografia sui banchi con grande diligenza...",
          flaws: [
            "L'IA ha confuso l'infanzia con le scuole superiori (quaderni a righe, banchi, professore).",
            "Nessun riferimento a stimoli sensoriali, pupazzi o routine di rassicurazione.",
            "Linguaggio freddo e non adatto a bambini di 3-4 anni."
          ]
        },
        good: {
          title: "✅ Richiesta Efficace (Strutturata con Modello COACH)",
          prompt: "Agisci come educatore di scuola dell'infanzia (bambini 3-4 anni). Obiettivo: creare una breve storia illustrabile (massimo 150 parole) per la routine di accoglienza di settembre. Usa frasi molto brevi, un tono caloroso e rassicurante, con protagonista uno scoiattolino di nome Nocciolino che porta un cuscino morbido nella tana. Non menzionare banchi né lezioni formali.",
          output: "Nel grande bosco delle foglie d'oro, il piccolo scoiattolo Nocciolino stringe forte il suo cuscino morbido. Oggi è il suo primo giorno nella casetta del bosco! La maestra Lepre lo accoglie con un sorriso caldo: 'Vieni Nocciolino, qui c'è un cesto pieno di ghiande colorate da esplorare insieme'. Nocciolino sorride, appoggia il suo cuscino nell'angolo morbido e scopre che giocare insieme agli altri scoiattolini è un'avventura bellissima.\n\n[Dichiarazione modifiche: Ho mantenuto il testo entro le 130 parole e strutturato il racconto con due pause visive per facilitare la drammatizzazione con i burattini.]",
          strengths: [
            "Fascia d'età perfettamente rispettata (3-4 anni).",
            "Ambiente accogliente (angolo morbido, maestra Lepre, ghiande colorate).",
            "Testo breve e ritmato, pronto per la lettura ad alta voce in sezione."
          ]
        },
        coachTakeaway: "Specificare la fascia (3-4 anni), la lunghezza (150 parole) e i divieti espliciti (niente banchi) ha evitato che l'IA producesse un testo totalmente fuori contesto."
      },
      primaria: {
        topic: "Comprensione del testo per classe 3ª primaria",
        bad: {
          title: "❌ Richiesta Vaga (Senza Contesto né Criteri)",
          prompt: "Dammi un testo sui dinosauri con domande.",
          output: "I dinosauri sono un gruppo eterogeneo di rettili del clade Dinosauria comparsi durante il Triassico superiore (circa 230 milioni di anni fa). Durante il Giurassico e il Cretaceo dominarono l'ecosistema terrestre prima dell'evento di estinzione K-T causato da un bolide extraterrestre...\nDomande:\n1. Quale clade definisce i dinosauri?\n2. Che impatto ebbe la transizione Giurassico-Cretaceo sulla biomassa?",
          flaws: [
            "Lessico universitario e accademico inaccessibile a un bambino di 8 anni.",
            "Domande puramente mnemoniche e nozionistiche.",
            "Zero elementi di stimolo alla curiosità o legati al programma di 3ª primaria."
          ]
        },
        good: {
          title: "✅ Richiesta Efficace (Strutturata con Modello COACH)",
          prompt: "Agisci come docente di scuola primaria. Obiettivo: redigere un breve testo narrativo-informativo (circa 120 parole) sul Triceratopo per una classe 3ª. Criteri: linguaggio semplice, periodi con soggetto-verbo-oggetto, evidenzia in grassetto 3 parole chiave (es. corna, collare osseo, erbivoro). Includi 3 domande a scelta multipla (con 3 opzioni ciascuna) e 1 domanda aperta di riflessione personale. Non usare termini tecnici non spiegati.",
          output: "Milioni di anni fa viveva il Triceratopo, uno dei dinosauri più curiosi del nostro pianeta. Era un grande **erbivoro**, il che significa che si nutriva solo di felci, foglie e rami bassi.\nSulla testa aveva tre grandi **corna** e un robusto **collare osseo** a forma di scudo: gli serviva per proteggersi dai predatori come il T-Rex e per farsi riconoscere dal suo gruppo!\n\nDomande di comprensione:\n1. Di che cosa si nutriva il Triceratopo?\n   a) Di piccoli pesci di fiume\n   b) Di felci, foglie e rami bassi\n   c) Di carne di altri dinosauri\n2. Quante corna aveva sulla testa?\n   a) Una sola\n   b) Due\n   c) Tre grandi corna\n3. A cosa serviva il collare osseo?\n   a) A nuotare più veloce\n   b) A proteggersi dai predatori\n   c) A volare tra gli alberi\n4. Domanda aperta: Se potessi incontrare un Triceratopo nel suo bosco preistorico, quale domanda gli faresti?\n\n[Dichiarazione modifiche: Ho aggiunto il glossario contestuale immediato per la parola 'erbivoro' e tarato le domande su 3 opzioni per non affaticare la memoria di lavoro.]",
          strengths: [
            "Testo calibrato per la classe 3ª con sintassi chiara.",
            "Parole chiave in grassetto che guidano la lettura.",
            "Domande mirate con opzioni plausibili e domanda aperta che attiva l'immaginazione."
          ]
        },
        coachTakeaway: "Fornire la struttura esatta (120 parole, 3 parole chiave in grassetto, 3 domande a scelta multipla a 3 opzioni + 1 aperta) fa risparmiare 20 minuti di correzione al docente."
      },
      secondaria: {
        topic: "Verifica formativa di storia/italiano (classe 2ª media)",
        bad: {
          title: "❌ Richiesta Vaga (Senza Contesto né Criteri)",
          prompt: "Fai una verifica sulla Rivoluzione Industriale per la media.",
          output: "Verifica di Storia.\n1. Spiega in modo esaustivo le origini del capitalismo industriale dal 1760 al 1840.\n2. Analizza la teoria del plusvalore di Karl Marx.\n3. Descrivi l'evoluzione del telaio meccanico di Cartwright.\n4. Che cos'è la siderurgia?",
          flaws: [
            "Mescola concetti da scuola superiore/università (teoria del plusvalore) con nozionismo puro.",
            "Nessun criterio di valutazione, punteggio o indicazione di tempo.",
            "Domande aperte generiche che rendono la correzione soggettiva e disomogenea."
          ]
        },
        good: {
          title: "✅ Richiesta Efficace (Strutturata con Modello COACH)",
          prompt: "Agisci come docente di lettere e storia per la classe 2ª secondaria di I grado. Obiettivo: creare una verifica formativa di 30 minuti sulla prima Rivoluzione Industriale (focus: macchina a vapore, carbone, passaggio dalla campagna alla città). Struttura: Sezione A con 4 quesiti a risposta multipla (4 opzioni); Sezione B con 2 domande a risposta aperta breve (massimo 4 righe ciascuna, con guida ai punti chiave da citare); Sezione C con 1 mini-caso di realtà storica su una giornata tipica di un ragazzo operaio. Includi la griglia di correzione con punteggi (totale 10 punti).",
          output: "VERIFICA FORMATIVA DI STORIA — Classe 2ª Secondaria di I Grado\nArgomento: La prima Rivoluzione Industriale (Tempo: 30 minuti)\n\nSEZIONE A — Quesiti a risposta multipla (1 punto ciascuno, tot. 4 punti)\n1. Quale nuova fonte di energia rese possibile il funzionamento continuo della macchina a vapore?\n   a) L'energia eolica\n   b) Il carbone fossile\n   c) Il petrolio raffinato\n   d) L'energia idraulica dei mulini\n[... quesiti 2, 3, 4 ...]\n\nSEZIONE B — Risposta sintetica guidata (2 punti ciascuna, tot. 4 punti)\n5. Perché molte famiglie di contadini decisero di trasferirsi dalle campagne alle città industriali?\n   (Punti chiave da inserire nella risposta: enclosures/recinzioni, ricerca di lavoro nelle fabbriche, crescita delle città).\n   Spazio risposta: [ 4 righe tratteggiate ]\n\nSEZIONE C — Compito di realtà storica (2 punti)\n7. Leggi la breve testimonianza di Thomas (13 anni, Manchester, 1820) e individua due differenze tra la sua vita e la tua giornata scolastica attuale.\n\nGRIGLIA DOCENTE: Punteggio totale 10/10. Suggerimenti per BES: concedere 10 minuti aggiuntivi e consentire l'uso della mappa concettuale approvata.\n\n[Dichiarazione modifiche: Ho inserito i suggerimenti specifici per i punti chiave nella risposta aperta per uniformare i criteri di correzione.]",
          strengths: [
            "Struttura calibrata sui 30 minuti di lezione.",
            "Domande progressive (dalla conoscenza puntuale al confronto storico).",
            "Griglia di valutazione trasparente e predisposizione per alunni BES."
          ]
        },
        coachTakeaway: "Chiedere la ripartizione in sezioni (A, B, C) e la griglia con i punti chiave trasforma l'output dell'IA in uno strumento immediatamente spendibile in classe."
      }
    },
    quiz: [
      {
        id: "q1",
        scenario: "Hai bisogno di una filastrocca rapida in rima baciata sui colori dell'autunno da recitare domani mattina con la classe.",
        question: "Per questo scopo, cosa conviene usare?",
        options: [
          { text: "Una Richiesta Singola (Prompt chiaro con modello COACH)", isCorrect: true, feedback: "Esatto! È un'esigenza momentanea e circoscritta. Un buon prompt one-shot risolve il compito in 30 secondi." },
          { text: "Un'Istruzione Permanente (System Prompt per creare un assistente)", isCorrect: false, feedback: "Non serve creare un chatbot permanente solo per una filastrocca una tantum: basterebbe un buon prompt singolo!" }
        ]
      },
      {
        id: "q2",
        scenario: "Ogni settimana devi preparare un brano di lettura con 4 domande graduate e un glossario per gli alunni che hanno bisogno di un testo semplificato.",
        question: "Per questo compito ricorrente, qual è la scelta migliore?",
        options: [
          { text: "Riscrivere ogni volta da capo tutto il prompt con tutte le regole e i divieti", isCorrect: false, feedback: "Riscrivere ogni volta le stesse istruzioni fa perdere tempo e porta a risultati discontinui." },
          { text: "Costruire un System Prompt stabile (Assistente didattico per la semplificazione)", isCorrect: true, feedback: "Bravissimo/a! È un compito che si ripete ogni settimana: con un'istruzione permanente dovrai solo incollare il testo originale e il tuo assistente applicherà in automatico tutte le tue regole didattiche!" }
        ]
      },
      {
        id: "q3",
        scenario: "Vuoi un assistente che formatti sempre le tracce delle verifiche secondo la griglia di valutazione del tuo istituto e che dichiari sempre le fonti.",
        question: "Questo è l'esempio tipico di:",
        options: [
          { text: "Un System Prompt (Istruzione permanente)", isCorrect: true, feedback: "Proprio così! Il System Prompt fissa il ruolo, i vincoli e le convenzioni stabili del docente in modo riutilizzabile." },
          { text: "Una chat generica aperta al volo", isCorrect: false, feedback: "In una chat generica senza istruzioni permanenti, queste regole non sono impostate stabilmente e dovresti rispiegarle per ogni nuovo compito." }
        ]
      }
    ]
  },

  // ==========================================
  // MODULO 2: Il Modello COACH
  // ==========================================
  module2: {
    intro: {
      title: "Il Modello COACH: I 5 Ingredienti del Prompt Efficace",
      subtitle: "Un metodo mnemonico e pratico per non dimenticare mai nessun elemento cruciale"
    },
    // Casi didattici completi e unitari per fascia scolastica
    guidedCases: {
      infanzia: {
        title: "Filastrocca e Gioco Motorio delle 4 Stagioni (Circle-Time)",
        c: "Sono un'educatrice di scuola dell'infanzia con una sezione di 20 bambini di 4 anni durante il momento del circle-time.",
        o: "Il mio obiettivo è ideare un'attività integrata con una breve filastrocca e un gioco di movimento per esplorare le 4 stagioni.",
        a: "Componi una filastrocca di 8 versi in rima baciata e descrivi 4 movimenti corporei semplici da associare a ciascuna stagione (caduta delle foglie, fiocco di neve, germoglio che cresce, sole che scalda).",
        crit: "Usa frasi brevissime e lessico concreto. Durata complessiva dell'attività: massimo 10 minuti. Non proporre movimenti a terra veloci o materiali piccoli non sicuri.",
        h: "Al termine, elenca in una breve nota quali immagini sensoriali e varianti motorie hai introdotto di tua iniziativa."
      },
      primaria: {
        title: "Compito di Realtà sulla Spesa Sostenibile (Matematica & Educazione Civica)",
        c: "Sono una docente di matematica per una classe 4ª primaria con 22 alunni, inclusi due alunni con bisogni educativi speciali.",
        o: "Il mio obiettivo è realizzare una scheda operativa con un compito di realtà sulla spesa sostenibile al mercato rionale.",
        a: "Formula un testo introduttivo realistico di 80 parole con un listino prezzi di frutta e verdura, seguito da 3 quesiti a tappe che richiedano l'uso di addizioni, moltiplicazioni e calcolo del resto in euro.",
        crit: "Mantieni il testo totale entro le 180 parole. Evita calcoli con numeri decimali superiori ai centesimi. Evidenzia in grassetto i dati numerici e non usare formule astratte.",
        h: "Concludi con una breve dichiarazione in cui indichi le strategie di calcolo sollecitate e le facilitazioni lessicali che hai introdotto."
      },
      secondaria: {
        title: "Confronto tra Democrazia Ateniese e Repubblica Romana (Storia & Educazione Civica)",
        c: "Sono un docente di lettere per una classe 2ª della scuola secondaria di I grado con 24 studenti.",
        o: "Il mio obiettivo è creare una scheda didattica di approfondimento e confronto storico tra la democrazia ateniese del V secolo a.C. e la repubblica romana.",
        a: "Elabora una tabella comparativa a tre colonne (Criterio, Atene, Roma) su 4 aspetti chiave (cittadinanza, organi di governo, assemblee popolari, limiti democratici) e formula 3 quesiti di sintesi e riflessione critica per la discussione guidata.",
        crit: "Linguaggio rigoroso ma accessibile, testo complessivo entro 250 parole. Evidenzia i concetti storiografici essenziali in grassetto e non includere nozioni universitarie o dettagli eruditi non adatti alla secondaria di I grado.",
        h: "Includi in calce una nota di trasparenza in cui dichiari quali semplificazioni storiografiche hai adottato e quali fonti di riferimento hai privilegiato."
      }
    },
    pillars: [
      {
        letter: "C",
        title: "Contesto",
        subtitle: "Chi sei tu e a chi è rivolto il compito",
        explanation: "Indica chiaramente il tuo ruolo, l'ordine di scuola, l'età degli alunni o il livello di partenza. L'IA non sa se stai parlando a bambini di 4 anni o a ragazzi di 13 anni se non glielo dici tu.",
        examples: {
          infanzia: "Sono un'educatrice di scuola dell'infanzia con una sezione di 20 bambini di 4 anni durante il momento del circle-time.",
          primaria: "Sono una docente di matematica per una classe 4ª primaria con 22 alunni, inclusi due alunni con bisogni educativi speciali.",
          secondaria: "Sono un docente di lettere per una classe 2ª della scuola secondaria di I grado con 24 studenti."
        },
        exercisePlaceholder: "Es: Sono un docente di [materia/sezione] per una classe [età/livello]..."
      },
      {
        letter: "O",
        title: "Obiettivo",
        subtitle: "Che cosa vuoi ottenere esattamente",
        explanation: "Definisci il prodotto didattico finale: una fiaba, una scheda operativa, un compito di realtà, una traccia di verifica o una comunicazione per le famiglie.",
        examples: {
          infanzia: "Il mio obiettivo è ideare un'attività integrata con una breve filastrocca e un gioco di movimento per esplorare le 4 stagioni.",
          primaria: "Il mio obiettivo è realizzare una scheda operativa con un compito di realtà sulla spesa sostenibile al mercato rionale.",
          secondaria: "Il mio obiettivo è creare una scheda didattica di approfondimento e confronto storico tra la democrazia ateniese del V secolo a.C. e la repubblica romana."
        },
        exercisePlaceholder: "Es: Il mio obiettivo è creare [prodotto didattico specifico]..."
      },
      {
        letter: "A",
        title: "Azione",
        subtitle: "Cosa deve fare l'IA passo dopo passo",
        explanation: "Usa verbi operativi chiari: 'redigi', 'semplifica', 'organizza in tabella', 'genera 5 domande', 'proponi 3 alternative ludiche'. Evita comandi generici come 'parlami di'.",
        examples: {
          infanzia: "Componi una filastrocca di 8 versi in rima baciata e descrivi 4 movimenti corporei semplici da associare a ciascuna stagione (caduta delle foglie, fiocco di neve, germoglio che cresce, sole che scalda).",
          primaria: "Formula un testo introduttivo realistico di 80 parole con un listino prezzi di frutta e verdura, seguito da 3 quesiti a tappe che richiedano l'uso di addizioni, moltiplicazioni e calcolo del resto in euro.",
          secondaria: "Elabora una tabella comparativa a tre colonne (Criterio, Atene, Roma) su 4 aspetti chiave (cittadinanza, organi di governo, assemblee popolari, limiti democratici) e formula 3 quesiti di sintesi e riflessione critica per la discussione guidata."
        },
        exercisePlaceholder: "Es: Elabora [verbo operativo] una sequenza di [passaggi dettagliati]..."
      },
      {
        letter: "C",
        title: "Criteri",
        subtitle: "Formato, limiti, tono e regole da rispettare",
        explanation: "Fissa i paletti: lunghezza (parole o minuti), registro linguistico, struttura visiva (elenchi, tabelle), cose da NON inserire (divieti espliciti).",
        examples: {
          infanzia: "Usa frasi brevissime e lessico concreto. Durata complessiva dell'attività: massimo 10 minuti. Non proporre movimenti a terra veloci o materiali piccoli non sicuri.",
          primaria: "Mantieni il testo totale entro le 180 parole. Evita calcoli con numeri decimali superiori ai centesimi. Evidenzia in grassetto i dati numerici e non usare formule astratte.",
          secondaria: "Linguaggio rigoroso ma accessibile, testo complessivo entro 250 parole. Evidenzia i concetti storiografici essenziali in grassetto e non includere nozioni universitarie o dettagli eruditi non adatti alla secondaria di I grado."
        },
        exercisePlaceholder: "Es: Lunghezza [numero parole/righe], struttura [elenco/tabella], evita [cosa non fare]..."
      },
      {
        letter: "H",
        title: "Hai il controllo tu!",
        subtitle: "Trasparenza, fonti e revisione del docente",
        explanation: "L'IA non decide al posto tuo. Chiedile di esplicitare le fonti, di non inventare contenuti non richiesti e di dichiarare sempre che cosa ha aggiunto o modificato.",
        examples: {
          infanzia: "Al termine, elenca in una breve nota quali immagini sensoriali e varianti motorie hai introdotto di tua iniziativa.",
          primaria: "Concludi con una breve dichiarazione in cui indichi le strategie di calcolo sollecitate e le facilitazioni lessicali che hai introdotto.",
          secondaria: "Includi in calce una nota di trasparenza in cui dichiari quali semplificazioni storiografiche hai adottato e quali fonti di riferimento hai privilegiato."
        },
        exercisePlaceholder: "Es: Al termine dell'output, elenca le modifiche e le aggiunte introdotte rispetto alla richiesta."
      }
    ],
    quiz: {
      infanzia: [
        {
          id: "m2_q1_inf",
          promptText: "Scrivi una breve storia per bambini con protagonista una ranocchia che impara a saltare tra le foglie di ninfea. Usa frasi semplici in rima baciata, mantieniti entro le 100 parole e includi suoni onomatopeici. Al termine dichiara quali scelte ritmiche hai adottato.",
          question: "Quale elemento del modello COACH manca in questo prompt?",
          options: [
            { text: "Contesto", isCorrect: true, feedback: "Esatto! Manca il <strong>Contesto</strong>: il prompt dice 'per bambini' in modo generico, senza specificare se parliamo di una sezione 3 anni (frasi brevissime, stimoli sonori) o 5 anni (continuità, lessico più ricco). Sarebbe bastato specificare: <em>'Sono un'educatrice di scuola dell'infanzia con una sezione di 3-4 anni...'</em>" },
            { text: "Obiettivo", isCorrect: false, feedback: "L'Obiettivo è presente: creare una storia in rima su una ranocchia tra le ninfee. Rileggi bene: a chi è destinata esattamente l'attività?" },
            { text: "Criteri", isCorrect: false, feedback: "I Criteri ci sono: frasi semplici in rima baciata, massimo 100 parole e suoni onomatopeici. Guarda l'identità del docente o del target!" },
            { text: "Hai il controllo", isCorrect: false, feedback: "La richiesta di controllo c'è: è stato chiesto di dichiarare le scelte ritmiche al termine. Rifletti su chi realizzerà o ascolterà la storia!" }
          ]
        },
        {
          id: "m2_q2_inf",
          promptText: "Sono un'insegnante di scuola dell'infanzia in una sezione di bambini di 4 anni. Vorrei proporre un'attività di drammatizzazione e gioco simbolico sul tema degli animali della fattoria durante il circle-time. Descrivi passo dopo passo le azioni e i movimenti che i bambini dovranno compiere. Al termine elenca le eventuali varianti che hai introdotto.",
          question: "Quale elemento del modello COACH manca in questo prompt?",
          options: [
            { text: "Contesto", isCorrect: false, feedback: "Il Contesto è chiarissimo: insegnante di scuola dell'infanzia per una sezione di 4 anni. Cerca altrove la lacuna!" },
            { text: "Azione", isCorrect: false, feedback: "L'Azione è presente: descrivere passo dopo passo i movimenti e le azioni del gioco simbolico. Rifletti sui vincoli pratici!" },
            { text: "Criteri", isCorrect: true, feedback: "Bravissimo/a! Mancano i <strong>Criteri</strong>: non è specificata la durata massima del gioco (es. 8-10 minuti per la soglia di attenzione dei 4 anni) né i vincoli di sicurezza sui materiali. Sarebbe bastato aggiungere: <em>'Durata massima: 8 minuti; proponi solo movimenti a terra senza usare oggetti piccoli.'</em>" },
            { text: "Hai il controllo", isCorrect: false, feedback: "La trasparenza è garantita: è stato chiesto di elencare le varianti introdotte in calce. Cosa manca sul piano delle regole e dei limiti?" }
          ]
        },
        {
          id: "m2_q3_inf",
          promptText: "Sono un educatore di scuola dell'infanzia in una sezione di 5 anni. Componi una filastrocca sull'avvicendarsi delle quattro stagioni, strutturata in 4 quartine con rime semplici. Usa solo parole concrete legate alla natura, non superare le 80 parole complessive ed evita metafore astratte.",
          question: "Quale elemento del modello COACH manca in questo prompt?",
          options: [
            { text: "Contesto", isCorrect: false, feedback: "Il Contesto c'è: educatore per una sezione di 5 anni. Rileggi la parte finale del prompt!" },
            { text: "Obiettivo", isCorrect: false, feedback: "L'Obiettivo è ben definito: una filastrocca sulle quattro stagioni. C'è un altro principio COACH trascurato!" },
            { text: "Criteri", isCorrect: false, feedback: "I Criteri sono dettagliati: 4 quartine, rime semplici, parole concrete, max 80 parole, divieto di metafore astratte. Quale clausola di verifica manca?" },
            { text: "Hai il controllo", isCorrect: true, feedback: "Proprio così! Manca la clausola <strong>Hai il controllo</strong>: non è stato chiesto all'IA di dichiarare cosa ha inventato o quali immagini ha aggiunto di sua iniziativa. Sarebbe bastato aggiungere in chiusura: <em>'Al termine, dichiara quali elementi sensoriali hai inserito autonomamente.'</em>" }
          ]
        }
      ],
      primaria: [
        {
          id: "m2_q1_pri",
          promptText: "Sono un'insegnante di scuola primaria in una classe 4ª. Devo spiegare agli alunni come funziona il ciclo dell'acqua. Mantieni il testo entro le 150 parole, evidenzia in grassetto i 3 termini scientifici principali e dichiara in calce le semplificazioni lessicali adottate.",
          question: "Quale elemento del modello COACH manca in questo prompt?",
          options: [
            { text: "Contesto", isCorrect: false, feedback: "Il Contesto c'è: insegnante di scuola primaria in classe 4ª. Cerca quale istruzione operativa è rimasta nel vago!" },
            { text: "Obiettivo", isCorrect: false, feedback: "L'Obiettivo didattico è presente: far comprendere il ciclo dell'acqua. Ma cosa deve fare praticamente l'IA?" },
            { text: "Azione", isCorrect: true, feedback: "Esatto! Manca l'<strong>Azione</strong>: il docente indica l'argomento ('il ciclo dell'acqua'), ma non spiega operativamente cosa produrre (un racconto? un testo informativo a paragrafi? un esperimento da fare in classe? una scheda con domande?). Sarebbe bastato precisare: <em>'Redigi un testo informativo diviso in 3 paragrafi con 3 domande a scelta multipla.'</em>" },
            { text: "Criteri", isCorrect: false, feedback: "I Criteri ci sono: massimo 150 parole e 3 termini evidenziati in grassetto. Guarda come è descritto il compito da svolgere!" }
          ]
        },
        {
          id: "m2_q2_pri",
          promptText: "Crea una scheda didattica con 4 problemi di matematica ambientati durante la spesa al supermercato. Formula i testi con situazioni realistiche, indica i passaggi di calcolo per risolverli, usa solo addizioni e sottrazioni ed evita testi più lunghi di 100 parole per problema. Concludi dichiarando le strategie di calcolo sollecitate.",
          question: "Quale elemento del modello COACH manca in questo prompt?",
          options: [
            { text: "Contesto", isCorrect: true, feedback: "Ottimo occhio! Manca il <strong>Contesto</strong>: l'IA non sa se la scheda è per una classe 2ª (numeri interi entro il 100, lessico elementare) o per una 4ª (euro e centesimi). Sarebbe bastato indicare: <em>'Sono un docente di matematica per una classe 2ª primaria...'</em> evitando output fuori scala." },
            { text: "Obiettivo", isCorrect: false, feedback: "L'Obiettivo è ben specificato: creare una scheda operativa con 4 problemi di matematica sulla spesa. Prova a verificare a chi è rivolto il lavoro!" },
            { text: "Azione", isCorrect: false, feedback: "L'Azione è chiara: formulare i testi dei problemi e indicare i relativi passaggi di risoluzione. Cosa manca per calibrare il livello?" },
            { text: "Criteri", isCorrect: false, feedback: "I Criteri sono presenti: solo addizioni e sottrazioni, massimo 100 parole per problema. Rileggi l'inizio del prompt!" }
          ]
        },
        {
          id: "m2_q3_pri",
          promptText: "Sono un maestro di scienze per una classe 5ª primaria. Prepara una scheda didattica sul sistema solare per introdurre la distinzione tra pianeti rocciosi e pianeti gassosi. Descrivi le caratteristiche principali dei due gruppi e formula quattro domande di comprensione per gli alunni. Al termine elenca le fonti o le semplificazioni adottate.",
          question: "Quale elemento del modello COACH manca in questo prompt?",
          options: [
            { text: "Contesto", isCorrect: false, feedback: "Il Contesto è esplicito: maestro di scienze per una classe 5ª primaria. Guarda quali vincoli mancano!" },
            { text: "Azione", isCorrect: false, feedback: "L'Azione c'è: descrivere le caratteristiche dei pianeti e formulare quattro domande di comprensione. Rifletti sui dettagli formali!" },
            { text: "Criteri", isCorrect: true, feedback: "Corretto! Mancano i <strong>Criteri</strong>: non sono indicati i limiti di lunghezza del testo, il formato delle domande (a risposta multipla o aperte?) né cosa evitare (es. valori astronomici difficili). Sarebbe bastato aggiungere: <em>'Massimo 130 parole, domande a scelta multipla con 3 opzioni, non inserire distanze numeriche complesse.'</em>" },
            { text: "Hai il controllo", isCorrect: false, feedback: "La richiesta di trasparenza c'è: è stato chiesto di elencare fonti e semplificazioni in calce. Quali regole mancano per guidare il formato?" }
          ]
        }
      ],
      secondaria: [
        {
          id: "m2_q1_sec",
          promptText: "Sono un docente di lettere per una classe 2ª secondaria di I grado. Prepara una verifica scritta di storia sul feudalesimo e sulla nascita dei comuni, formulando quattro domande a risposta aperta e una breve traccia di compito di realtà sulle corporazioni di mestiere. In calce dichiara i criteri storiografici e le scelte didattiche che hai seguito.",
          question: "Quale elemento del modello COACH manca in questo prompt?",
          options: [
            { text: "Contesto", isCorrect: false, feedback: "Il Contesto c'è: docente di lettere per una classe 2ª secondaria di I grado. Cosa manca sul piano della somministrazione della prova?" },
            { text: "Obiettivo", isCorrect: false, feedback: "L'Obiettivo è chiaro: preparare una verifica scritta sul feudalesimo e sui comuni. Rifletti sui vincoli operativi!" },
            { text: "Criteri", isCorrect: true, feedback: "Esatto! Mancano i <strong>Criteri</strong>: senza indicare il tempo di svolgimento (es. 40 minuti), il limite di righe per risposta e il punteggio su scala 10/10, l'IA produrrà una verifica sproporzionata o difficile da valutare. Sarebbe bastato aggiungere: <em>'Tempo massimo 45 minuti, massimo 5 righe a risposta, griglia con punteggio totale in decimi.'</em>" },
            { text: "Hai il controllo", isCorrect: false, feedback: "La clausola di trasparenza è presente: è stato chiesto di dichiarare in calce criteri storiografici e scelte didattiche. Quali limiti formali mancano?" }
          ]
        },
        {
          id: "m2_q2_sec",
          promptText: "Sono una docente di tecnologia per la classe 3ª della secondaria di I grado. Elabora una spiegazione comparativa sulle fonti di energia rinnovabili e non rinnovabili, includendo una tabella a due colonne con vantaggi e svantaggi, senza superare le 200 parole complessive. Al termine indica le fonti energetiche escluse dalla trattazione.",
          question: "Quale elemento del modello COACH manca in questo prompt?",
          options: [
            { text: "Contesto", isCorrect: false, feedback: "Il Contesto è presente: docente di tecnologia per la classe 3ª della scuola secondaria di I grado. Rileggi il fine didattico!" },
            { text: "Obiettivo", isCorrect: true, feedback: "Bravissimo/a! Manca l'<strong>Obiettivo didattico</strong>: il prompt chiede genericamente una 'spiegazione comparativa', ma non chiarisce a cosa serve (una scheda di ripasso rapido per l'esame di Stato? una sintesi per la flipped classroom? una traccia per un'interrogazione?). Sarebbe bastato specificare: <em>'Obiettivo: strutturare una guida di ripasso sintetico per la preparazione all'esame di Stato.'</em>" },
            { text: "Azione", isCorrect: false, feedback: "L'Azione è indicata: elaborare la spiegazione e compilare una tabella comparativa a due colonne. Quale scopo didattico non è esplicitato?" },
            { text: "Criteri", isCorrect: false, feedback: "I Criteri ci sono: tabella a due colonne e limite di 200 parole complessive. Guarda la finalità dell'attività!" }
          ]
        },
        {
          id: "m2_q3_sec",
          promptText: "Sono una docente di scienze per una classe 1ª secondaria di I grado. Struttura un compito di realtà sulla densità dei liquidi articolato in un caso-stimolo iniziale, tre quesiti di calcolo con dati realistici e una domanda finale di argomentazione. Prevedi un tempo di svolgimento di 45 minuti e una valutazione in decimi, evitando formule fisiche superiori al livello del primo anno.",
          question: "Quale elemento del modello COACH manca in questo prompt?",
          options: [
            { text: "Contesto", isCorrect: false, feedback: "Il Contesto è ben definito: docente di scienze per una classe 1ª secondaria di I grado. Rileggi l'ultima parte del prompt!" },
            { text: "Obiettivo", isCorrect: false, feedback: "L'Obiettivo c'è: realizzare un compito di realtà sulla densità dei liquidi. Quale clausola di verifica e trasparenza è assente?" },
            { text: "Criteri", isCorrect: false, feedback: "I Criteri sono ricchi di dettagli: 45 minuti, valutazione in decimi, divieto di formule complesse. Cosa manca sul piano della revisione del docente?" },
            { text: "Hai il controllo", isCorrect: true, feedback: "Proprio così! Manca la clausola <strong>Hai il controllo</strong>: non è stato richiesto all'IA di esplicitare le semplificazioni o gli assunti teorici introdotti nei quesiti di calcolo. Sarebbe bastato aggiungere in chiusura: <em>'Dichiara in calce quali semplificazioni dei valori fisici hai adottato per la classe 1ª.'</em>" }
          ]
        }
      ]
    }
  },

  // ==========================================
  // MODULO 3: Playground e Autovalutazione Guidata
  // ==========================================
  module3: {
    intro: {
      title: "Playground del Prompt con Autovalutazione COACH",
      subtitle: "Scrivi o incolla un prompt, poi verifica criticamente la presenza dei 5 elementi fondamentali"
    },
    samplePrompts: {
      infanzia: {
        label: "Esempio Infanzia (Attività sensoriale)",
        text: "Agisci come insegnante di scuola dell'infanzia (sezione 4 anni). Obiettivo: creare una filastrocca in rima baciata di 8 versi sull'arrivo della primavera. Usa parole concrete (fiori, rondini, sole tiepido) e ritmi facili da accompagnare con il battito delle mani. Non usare parole astratte o difficili. Al termine, dichiara le scelte ritmiche adottate."
      },
      primaria: {
        label: "Esempio Primaria (Problema matematico)",
        text: "Agisci come docente di matematica per classe 4ª primaria. Obiettivo: redigere un problema di realtà ambientato in una pasticceria che richieda l'uso di moltiplicazioni e divisioni. Criteri: testo chiaro di massimo 80 parole, dati numerici realistici, formula 2 domande progressive. Non includere calcoli con numeri decimali. Concludi dichiarando le strategie di calcolo sollecitate."
      },
      secondaria: {
        label: "Esempio Secondaria (Traccia argomentativa)",
        text: "Agisci come docente di italiano per classe 3ª secondaria di I grado. Obiettivo: strutturare una traccia per un testo argomentativo sui social network e il tempo libero. Criteri: fornisci un breve documento-stimolo (60 parole), 3 domande-guida per la scaletta (tesi, antitesi, conclusione) e una griglia di autovalutazione in 4 punti. Dichiara in calce quali spunti di riflessione hai aggiunto."
      }
    },
    // Help puntuale (icone ?) per Modulo 3
    tooltips: {
      infanzia: {
        c: {
          shortDef: "Contesto: Specifica chi sei e i destinatari (sezione 3, 4 o 5 anni).",
          miniExample: "Es: 'Sono educatrice di nido/infanzia per bambini di 3 anni...'",
          whyItMatters: "Permette all'IA di non confondere i bambini con alunni di scuola primaria o ragazzi più grandi."
        },
        o: {
          shortDef: "Obiettivo: Il prodotto didattico o l'attività che vuoi realizzare.",
          miniExample: "Es: 'Creare un canovaccio per un teatrino delle marionette...'",
          whyItMatters: "Focalizza la generazione su un'attività concreta e non su nozioni teoriche."
        },
        a: {
          shortDef: "Azione: Il comando operativo dettagliato dato all'IA.",
          miniExample: "Es: 'Descrivi le battute dei due personaggi e i movimenti da fare...'",
          whyItMatters: "Evita risposte vaghe e fornisce all'IA i passaggi esatti da eseguire."
        },
        crit: {
          shortDef: "Criteri: Limiti di tempo, formato, lessico e divieti espliciti.",
          miniExample: "Es: 'Usa frasi di massimo 6 parole; durata 5 minuti; niente oggetti appuntiti.'",
          whyItMatters: "Garantisce che il materiale sia realmente sicuro, comprensibile e praticabile in sezione."
        },
        h: {
          shortDef: "Hai il controllo: Richiesta di trasparenza e dichiarazione modifiche.",
          miniExample: "Es: 'Dichiara le varianti di movimento che hai introdotto nel gioco.'",
          whyItMatters: "Ti permette di individuare subito cosa l'IA ha dedotto o aggiunto di sua iniziativa."
        }
      },
      primaria: {
        c: {
          shortDef: "Contesto: Ruolo, materia e classe specifica (es. 2ª o 5ª primaria).",
          miniExample: "Es: 'Docente di scienze per classe 4ª con alunni bilingui...'",
          whyItMatters: "Adatta istantaneamente il registro linguistico e la difficoltà concettuale."
        },
        o: {
          shortDef: "Obiettivo: Il materiale didattico preciso che intendi produrre.",
          miniExample: "Es: 'Una scheda operativa di ripasso con 4 esercizi progressivi...'",
          whyItMatters: "Evita che l'IA risponda con spiegazioni generiche anziché con materiale pronto all'uso."
        },
        a: {
          shortDef: "Azione: I compiti specifici che l'IA deve svolgere.",
          miniExample: "Es: 'Elabora un testo di 100 parole e ricava 3 domande di inferenza...'",
          whyItMatters: "Guida l'IA nella costruzione pedagogica della prova passo dopo passo."
        },
        crit: {
          shortDef: "Criteri: Numero di parole, evidenziazioni in grassetto, divieti.",
          miniExample: "Es: 'Massimo 120 parole, evidenzia 4 termini chiave, evita subordinate complesse.'",
          whyItMatters: "Rispetta le capacità di carico cognitivo e attenzione degli alunni."
        },
        h: {
          shortDef: "Hai il controllo: Revisione critica e dichiarazione trasparenza.",
          miniExample: "Es: 'Indica in calce quali termini hai semplificato rispetto al testo base.'",
          whyItMatters: "Mantiene il docente arbitro assoluto della correttezza disciplinare."
        }
      },
      secondaria: {
        c: {
          shortDef: "Contesto: Classe, livello di autonomia ed eventuali difficoltà ricorrenti.",
          miniExample: "Es: 'Docente di lettere in una 2ª media con alcuni alunni con difficoltà nella comprensione del testo...'",
          whyItMatters: "Permette all'IA di calibrare la complessità sul livello effettivo di autonomia degli alunni e sulle difficoltà reali della classe (es. tempi di attenzione, lessico, bisogni educativi)."
        },
        o: {
          shortDef: "Obiettivo: La risorsa o la prova da generare per la classe.",
          miniExample: "Es: 'Traccia di compito di realtà con rubrica a livelli...'",
          whyItMatters: "Chiarisce lo scopo formativo o sommativo del compito."
        },
        a: {
          shortDef: "Azione: Le istruzioni operative e la sequenza delle sezioni.",
          miniExample: "Es: 'Struttura la prova in: 1) Analisi del testo, 2) Quesiti aperti, 3) Lessico.'",
          whyItMatters: "Assicura che la prova segua la struttura metodologica desiderata dal docente."
        },
        crit: {
          shortDef: "Criteri: Tempo massimo, punteggio, vincoli formali e divieti.",
          miniExample: "Es: 'Tempo: 45 min; punteggio su 100; non richiedere nozioni storiche oltre il 1861.'",
          whyItMatters: "Rende la prova equa, standardizzata e allineata con i tempi effettivi di lezione."
        },
        h: {
          shortDef: "Hai il controllo: Esplicitazione di fonti, assunti e modifiche introdotte.",
          miniExample: "Es: 'Dichiara se hai introdotto semplificazioni concettuali rispetto al testo sorgente.'",
          whyItMatters: "Garantisce il controllo deontologico e la prevenzione di allucinazioni storiche o scientifiche."
        }
      }
    }
  },

  // ==========================================
  // MODULO 4: Costruttore del Chatbot (System Prompt)
  // ==========================================
  module4: {
    intro: {
      title: "Costruttore del Chatbot: Dalla Richiesta alla Regola Permanente",
      subtitle: "Compila i 5 pilastri per generare il System Prompt del tuo assistente didattico riutilizzabile"
    },
    presets: {
      infanzia: {
        role: "Assistente Didattico per Storie e Routine dell'Infanzia",
        context: "Sei un assistente pedagogico specializzato per la scuola dell'infanzia (bambini dai 3 ai 5 anni).",
        objective: "Trasformare argomenti didattici o situazioni quotidiane in brevi racconti illustrabili, giochi motori e filastrocche ritmate.",
        actionInput: "Il docente ti fornirà un argomento (es. le stagioni, le emozioni, la condivisione) o un testo grezzo. Tu genererai: 1) Una storia breve (max 120 parole) con dialoghi semplici, 2) Una proposta di drammatizzazione o gioco con le mani, 3) Due domande stimolo per il circle-time.",
        criteria: "Usa frasi corte (soggetto-verbo-oggetto), lessico concreto ed emotivamente rassicurante. Non usare riferimenti a compiti scritti, voti o nozioni scolastiche astratte.",
        transparencyClause: "Alla fine di ogni risposta aggiungi una sezione «Dichiarazione modifiche» in cui elenchi che cosa hai aggiunto, semplificato o dedotto rispetto a quanto richiesto, e ogni informazione che il docente deve verificare."
      },
      primaria: {
        role: "Assistente per Schede di Comprensione e Compiti Graduati",
        context: "Sei un assistente per docenti di scuola primaria (classi 1ª-5ª).",
        objective: "Elaborare testi didattici graduati, schede di comprensione, problemi matematici narrativi ed esercizi per l'inclusione.",
        actionInput: "Il docente ti incollerà un testo o un argomento disciplinare. Tu produrrai: 1) Il testo adattato e diviso in paragrafi brevi, 2) Glossario con 3 parole chiave spiegate in modo semplice, 3) 3 domande a scelta multipla (con 3 opzioni) e 2 a risposta aperta, 4) Una breve chiave di correzione per il docente.",
        criteria: "Sintassi lineare, mai più di 15 parole per periodo. Evidenzia in grassetto i termini importanti. Non inventare fatti scientifici o storici non verificati.",
        transparencyClause: "Alla fine di ogni risposta aggiungi una sezione «Dichiarazione modifiche» in cui elenchi che cosa hai aggiunto, semplificato o dedotto rispetto a quanto richiesto, e ogni informazione che il docente deve verificare."
      },
      secondaria: {
        role: "Assistente per Verifiche Formative e Rubriche Disciplinari",
        context: "Sei un assistente per docenti di scuola secondaria di I grado (scuola media).",
        objective: "Costruire prove di verifica formative, tracce di approfondimento, compiti di realtà e rubriche di valutazione analitiche.",
        actionInput: "Il docente ti indicherà la disciplina, l'argomento e il tempo a disposizione. Tu genererai: 1) Struttura della prova divisa in Sezione A (conoscenze), Sezione B (competenze/analisi) e Sezione C (compito di realtà/argomentazione), 2) Griglia di valutazione con indicatori chiari e punteggio, 3) Guida alla correzione per il docente con risposte attese.",
        criteria: "Linguaggio chiaro, diretto e privo di ambiguità. Rispetta rigorosamente i limiti di tempo prefissati e adatta la complessità al livello di autonomia della classe.",
        transparencyClause: "Alla fine di ogni risposta aggiungi una sezione «Dichiarazione modifiche» in cui elenchi che cosa hai aggiunto, semplificato o dedotto rispetto a quanto richiesto, e ogni informazione che il docente deve verificare."
      }
    },
    // Help puntuale (icone ?) per Modulo 4
    tooltips: {
      infanzia: {
        role: {
          shortDef: "Nome & Ruolo: Chi è l'assistente e come si qualifica.",
          whyItMatters: "Fissa l'identità dell'IA evitando che risponda come un generico motore di ricerca.",
          example: "Es: 'Assistente per fiabe educative e circle time (Infanzia)'"
        },
        context: {
          shortDef: "Contesto permanente: La scuola, la sezione e il target di bambini.",
          whyItMatters: "L'IA applicherà sempre questa sensibilità pedagogica senza doverla ripetere ogni volta.",
          example: "Es: 'Scuola dell'infanzia, bambini di 3-5 anni, approccio laboratoriale e sensoriale.'"
        },
        objective: {
          shortDef: "Obiettivo principale: Il compito ricorrente per cui crei questo bot.",
          whyItMatters: "Chiarisce lo scopo dell'assistente per focalizzarlo su una sola mansione specialistica.",
          example: "Es: 'Creare storie brevi e attività di movimento a partire da una parola chiave.'"
        },
        actionInput: {
          shortDef: "Input & Azione: Cosa gli incollerai e come dovrà elaborarlo.",
          whyItMatters: "Fornisce la scaletta esatta di produzione ogni volta che gli dai un nuovo testo.",
          example: "Es: 'Io incollo un tema (es. pioggia); tu generi una storia di 100 parole + un gioco motorio.'"
        },
        criteria: {
          shortDef: "Criteri & Limiti: Regole stilistiche, lunghezza e divieti non negoziabili.",
          whyItMatters: "Impedisce all'IA di usare un linguaggio troppo adulto o proporre attività non idonee.",
          example: "Es: 'Frasi brevissime, niente riferimenti a voti o banchi, durata max 5 minuti.'"
        },
        transparency: {
          shortDef: "Trasparenza (Casella H): La regola che richiedi all'assistente per dichiarare le modifiche.",
          whyItMatters: "Includi sempre questa regola nel tuo assistente per mantenere il controllo didattico. Ricorda che l'IA può non rispettarla: controlla ogni volta che la dichiarazione sia presente.",
          example: "Es: 'Alla fine di ogni risposta aggiungi una sezione «Dichiarazione modifiche» in cui elenchi che cosa hai aggiunto, semplificato o dedotto rispetto a quanto richiesto, e ogni informazione che il docente deve verificare.'"
        }
      },
      primaria: {
        role: {
          shortDef: "Nome & Ruolo: Il profilo dell'assistente didattico.",
          whyItMatters: "Imposta il tono e la figura professionale di riferimento dell'IA.",
          example: "Es: 'Assistente per la comprensione del testo e la differenziazione didattica'"
        },
        context: {
          shortDef: "Contesto permanente: Grado scolastico, fasce d'età e approccio inclusivo.",
          whyItMatters: "Permette al bot di calibrare automaticamente la complessità sintattica.",
          example: "Es: 'Scuola primaria, classi 3ª-5ª, attenzione specifica per alunni con DSA e BES.'"
        },
        objective: {
          shortDef: "Obiettivo ricorrente: La tipologia di materiale che il bot produrrà.",
          whyItMatters: "Specializza il chatbot rendendolo un vero strumento di lavoro su misura.",
          example: "Es: 'Adattare brani di lettura e generare domande a scelta multipla con griglia.'"
        },
        actionInput: {
          shortDef: "Input & Azione: I passaggi operativi che il bot deve compiere sui testi che riceve.",
          whyItMatters: "Definisce il formato standard di output che troverai pronto ogni volta.",
          example: "Es: 'Riceve un testo d'autore; restituisce versione semplificata + 4 domande + glossario.'"
        },
        criteria: {
          shortDef: "Criteri & Limiti: Lunghezza massima, formattazione e divieti disciplinari.",
          whyItMatters: "Elimina le risposte prolisse e impedisce allucinazioni sui contenuti didattici.",
          example: "Es: 'Massimo 150 parole, 3 opzioni per quiz, evidenzia parole chiave.'"
        },
        transparency: {
          shortDef: "Trasparenza (Casella H): La regola che richiedi all'assistente per dichiarare le modifiche.",
          whyItMatters: "Includi sempre questa regola nel tuo assistente per mantenere il controllo didattico. Ricorda che l'IA può non rispettarla: controlla ogni volta che la dichiarazione sia presente.",
          example: "Es: 'Alla fine di ogni risposta aggiungi una sezione «Dichiarazione modifiche» in cui elenchi che cosa hai aggiunto, semplificato o dedotto rispetto a quanto richiesto, e ogni informazione che il docente deve verificare.'"
        }
      },
      secondaria: {
        role: {
          shortDef: "Nome & Ruolo: Titolo e specializzazione disciplinare dell'assistente.",
          whyItMatters: "Definisce il livello di competenza disciplinare richiesto all'IA.",
          example: "Es: 'Assistente per verifiche formative di Lettere e Storia (Medie)'"
        },
        context: {
          shortDef: "Contesto permanente: Classe, livello di partenza e bisogni della scuola media.",
          whyItMatters: "Permette all'IA di calibrare automaticamente le richieste sulle competenze reali dei ragazzi di 11-14 anni.",
          example: "Es: 'Scuola secondaria di I grado, classi 1ª-3ª, attenzione al lessico disciplinare e all'autonomia nello studio.'"
        },
        objective: {
          shortDef: "Obiettivo ricorrente: Finalità valutativa o di supporto allo studio.",
          whyItMatters: "Chiarisce la destinazione d'uso degli elaborati generati dal bot.",
          example: "Es: 'Costruire prove strutturate e semistrutturate con griglie di correzione a punti.'"
        },
        actionInput: {
          shortDef: "Input & Azione: Come il bot deve processare la richiesta dell'insegnante.",
          whyItMatters: "Automatizza la creazione di prove divise in sezioni standardizzate.",
          example: "Es: 'Incollo argomento e obiettivi; generi quesiti aperti, chiusi e rubrica di valutazione.'"
        },
        criteria: {
          shortDef: "Criteri & Limiti: Vincoli di formato, tempi di esecuzione e regole di valutazione.",
          whyItMatters: "Garantisce coerenza nella struttura e impedisce quesiti troppo lunghi o fuori misura.",
          example: "Es: 'Punteggio totale su 10, tempo max 40 min, nessun termine accademico non spiegato.'"
        },
        transparency: {
          shortDef: "Trasparenza (Casella H): La regola che richiedi all'assistente per dichiarare le modifiche.",
          whyItMatters: "Includi sempre questa regola nel tuo assistente per mantenere il controllo didattico. Ricorda che l'IA può non rispettarla: controlla ogni volta che la dichiarazione sia presente.",
          example: "Es: 'Alla fine di ogni risposta aggiungi una sezione «Dichiarazione modifiche» in cui elenchi che cosa hai aggiunto, semplificato o dedotto rispetto a quanto richiesto, e ogni informazione che il docente deve verificare.'"
        }
      }
    }
  },
  // ==========================================
  // MODULO 5: Verifica, Uso Responsabile ed Esportazione
  // ==========================================
  module5: {
    intro: {
      title: "Verifica Pedagogica e Uso Responsabile",
      subtitle: "L'ultima parola è sempre del docente: esegui la checklist prima di copiare il tuo System Prompt"
    },
    checklistItems: [
      {
        id: "check_match",
        label: "Corrispondenza con la richiesta didattica",
        desc: "Il bot produce esattamente il formato e il livello che hai progettato per la tua classe?",
        tooltip: {
          whatToCheck: "Verifica che il testo prodotto dal bot risponda agli obiettivi della tua programmazione didattica e non divaghi su argomenti secondari.",
          whyTeacherOnly: "Nessun software può conoscere lo stato di avanzamento reale del programma e i bisogni specifici della tua classe."
        }
      },
      {
        id: "check_accuracy",
        label: "Accuratezza e correttezza dei contenuti",
        desc: "Hai verificato che non siano presenti errori fattuali, date errate o allucinazioni sui contenuti?",
        tooltip: {
          whatToCheck: "Leggi criticamente date, formule, nomi e spiegazioni generate dall'IA per escludere 'allucinazioni' o inesattezze.",
          whyTeacherOnly: "I modelli linguistici generano testo probabilistico: l'autorevolezza e la validazione scientifica restano un dovere del docente."
        }
      },
      {
        id: "check_age",
        label: "Adeguatezza linguistica ed emotiva alla fascia d'età",
        desc: "Il lessico, la sintassi e il tono sono realmente comprensibili e adatti alla sensibilità degli alunni?",
        tooltip: {
          whatToCheck: "Assicurati che non ci siano frasi eccessivamente contorte, parole inaccessibili o metafore fuorvianti per l'età.",
          whyTeacherOnly: "La sensibilità empatica e la conoscenza del clima relazionale della classe appartengono unicamente all'insegnante."
        }
      },
      {
        id: "check_nobias",
        label: "Assenza di stereotipi e distorsioni",
        desc: "I testi e gli esempi sono equi, inclusivi e privi di pregiudizi di genere, etnici o sociali?",
        tooltip: {
          whatToCheck: "Esamina le situazioni e i personaggi proposti dall'IA per verificare che non veicolino stereotipi involontari.",
          whyTeacherOnly: "L'insegnante è il garante dei valori educativi, dell'inclusione e delle pari opportunità nella scuola pubblica."
        }
      },
      {
        id: "check_privacy",
        label: "Rispetto rigoroso della privacy (Zero dati personali)",
        desc: "Hai verificato di non inserire MAI nomi di alunni, diagnosi mediche, valutazioni personali o dati di famiglie?",
        tooltip: {
          whatToCheck: "Non incollare mai nei chatbot nomi e cognomi, documenti riservati, certificazioni DSA/BES o informazioni familiari.",
          whyTeacherOnly: "La tutela legale e deontologica dei minori è una responsabilità primaria del docente e dell'istituzione scolastica."
        }
      }
    ],
    exportGuideNotice: "⚠️ Avviso: Le interfacce e i nomi dei menu di questi strumenti cambiano frequentemente. Verifica sempre le voci effettive nella schermata al momento dell'uso.",
    exportGuide: [
      {
        platform: "ChatGPT (OpenAI)",
        icon: "🟢",
        steps: "<strong>Percorso corretto:</strong> Crea un <strong>Custom GPT</strong> (sezione 'Esplora GPT' > 'Crea') oppure crea un <strong>Progetto</strong>. Nella scheda <em>Configura</em>, assegna un nome e incolla il System Prompt nel campo <strong>'Istruzioni' (Instructions)</strong>.<br><br><span style='color: #b91c1c; font-weight: 600;'>⚠️ Cosa NON fare:</span> Non usare le <em>Istruzioni personalizzate (Custom Instructions)</em> generali del profilo: si applicherebbero indiscriminatamente a tutte le tue chat future, anche a quelle personali!"
      },
      {
        platform: "Google Gemini",
        icon: "🔵",
        steps: "<strong>Percorso corretto:</strong> Apri Gemini > Nel menu laterale clicca su <strong>'Gestione Gem' (Gems)</strong> > Clicca su <strong>'Nuova Gem'</strong> > Assegna un nome al tuo assistente e incolla il System Prompt nel campo <strong>'Istruzioni'</strong>."
      },
      {
        platform: "Claude (Anthropic)",
        icon: "🟣",
        steps: "<strong>Percorso corretto:</strong> Apri la sezione <strong>Projects</strong> > Crea un nuovo progetto > Clicca su <strong>'Set Project Instructions' (Istruzioni di Progetto)</strong> e incolla qui il testo del System Prompt.<br><br><span style='color: #b91c1c; font-weight: 600;'>⚠️ Attenzione alla casella corretta:</span> Non incollare il System Prompt nella <em>'Project Knowledge'</em>: quello spazio serve unicamente per allegare documenti di riferimento (PDF, testi base), non per le regole di ruolo del bot."
      }
    ]
  },

  // ==========================================
  // MODULO IN: Che cosa so già (Prima di iniziare)
  // Non differenziato per fascia scolastica
  // ==========================================
  moduleIN: {
    intro: {
      title: "Che cosa so già",
      subtitle: "Prima di iniziare il percorso, allinea le tue conoscenze di base sull'intelligenza artificiale con questo breve momento formativo."
    },
    questions: [
      {
        id: "q_in_1",
        topic: "Natura dell'IA generativa",
        question: "Quando un'applicazione di intelligenza artificiale generativa produce un testo in risposta a una tua richiesta, che cosa sta facendo in realtà?",
        options: [
          "Cerca nel suo archivio un documento già scritto e ne estrae i passaggi più pertinenti.",
          "Calcola in modo probabilistico quali parole accostare per proseguire la frase in modo coerente.",
          "Elabora autonomamente un ragionamento logico sul significato dei concetti che descrive.",
          "Accede a internet in tempo reale per consultare enciclopedie e verificare la veridicità di ogni affermazione."
        ],
        correctIndex: 1,
        feedbackError: "L'IA generativa non 'pensa' e non possiede una comprensione logica dei contenuti. Si basa su modelli probabilistici che calcolano la sequenza di parole statisticamente più probabile in base ai miliardi di testi con cui è stata addestrata.",
        feedbackSuccess: "Esatto: i modelli linguistici calcolano sequenze probabilistiche di parole, senza vera comprensione del significato o coscienza dei concetti."
      },
      {
        id: "q_in_2",
        topic: "Allucinazioni e verifica delle fonti",
        question: "L'assistente IA restituisce un testo molto fluido, grammaticalmente ineccepibile e sicuro nel tono, che cita uno studio scientifico con anno e autore. Come devi considerare questa informazione?",
        options: [
          "È affidabile, perché i modelli linguistici non possono citare studi o autori inesistenti.",
          "Va sempre verificata alla fonte, perché l'IA può generare riferimenti e dati del tutto inventati ma apparentemente realistici.",
          "È corretta purché la sintassi sia priva di errori e il registro risulti formale.",
          "È sicuramente falsa, perché l'IA non cita mai ricerche reali."
        ],
        correctIndex: 1,
        feedbackError: "I modelli linguistici possono produrre 'allucinazioni': inventano dati, date o fonti inesistenti presentandoli con un tono estremamente sicuro e convincente. Il docente deve verificare sempre ogni dato prima di utilizzarlo a fini didattici.",
        feedbackSuccess: "Esatto: la fluidità e la sicurezza espositiva dell'IA non garantiscono la veridicità dei fatti. Il controllo delle fonti spetta sempre al docente."
      },
      {
        id: "q_in_3",
        topic: "Privacy e dati personali a scuola",
        question: "Per risparmiare tempo nella stesura di un'attività o di un materiale differenziato, quale comportamento è corretto sul piano della riservatezza?",
        options: [
          "Inserire nome e cognome dell'alunno solo se la conversazione verrà chiusa subito dopo la risposta.",
          "Incollare stralci della diagnosi medica o del profilo dinamico escludendo soltanto il codice fiscale.",
          "Descrivere unicamente le difficoltà di apprendimento e i bisogni didattici in forma del tutto anonima, senza alcun dato personale o identificativo.",
          "Usare solo le iniziali dell'alunno mantenendo però la classe, la sezione e il nome della scuola."
        ],
        correctIndex: 2,
        feedbackError: "Nei sistemi di IA commerciale non vanno mai inseriti dati personali, nomi, diagnosi o dettagli che rendano identificabili minori o famiglie. Le informazioni didattiche devono essere sempre completamente anonime e generali.",
        feedbackSuccess: "Esatto: la tutela dei minori impone di non inserire mai nomi, dati personali o documenti riservati. Si descrivono solo bisogni e caratteristiche didattiche anonimizzate."
      },
      {
        id: "q_in_4",
        topic: "Memoria tra conversazioni diverse",
        question: "Cosa accade alle informazioni che fornisci a un assistente IA all'interno delle conversazioni?",
        options: [
          "Vengono sempre cancellate all'istante alla chiusura della singola chat in qualsiasi servizio.",
          "Gli strumenti moderni dispongono di funzioni di memoria che possono conservare informazioni e preferenze tra chat diverse, anche nei piani gratuiti.",
          "La memoria tra sessioni diverse è una funzione riservata esclusivamente agli abbonamenti aziendali a pagamento.",
          "I modelli conservano i dati solo se si preme esplicitamente un pulsante di esportazione della cronologia."
        ],
        correctIndex: 1,
        feedbackError: "I principali strumenti di IA (come ChatGPT, Claude e Gemini) hanno funzionalità di memoria che registrano dettagli e istruzioni tra conversazioni separate, anche nelle versioni gratuite. Per questo motivo la prudenza sui dati personali deve essere costante.",
        feedbackSuccess: "Esatto: la memoria attiva tra chat diverse rende ancora più importante non inserire mai informazioni riservate, neppure in una chat temporanea."
      },
      {
        id: "q_in_5",
        topic: "Primato decisionale e responsabilità del docente",
        question: "Un docente chiede all'IA di stabilire i criteri di sufficienza di una prova e di assegnare i livelli di apprendimento per ciascun alunno. Come si colloca questa operazione?",
        options: [
          "È una procedura raccomandata che garantisce totale oggettività e uniformità di giudizio.",
          "È un errore metodologico: l'IA può fornire bozze o spunti, ma la valutazione e ogni decisione pedagogica appartengono in via esclusiva al docente umano.",
          "È consigliabile solo per le prove a risposta chiusa e non per i compiti complessi.",
          "È consentita purché l'alunno venga informato che l'elaborazione è stata eseguita da un algoritmo."
        ],
        correctIndex: 1,
        feedbackError: "La valutazione didattica e la responsabilità educativa non sono mai delegabili all'algoritmo. L'IA può supportare la preparazione di bozze o rubriche, ma la decisione finale e la valutazione pedagogica spettano unicamente all'insegnante.",
        feedbackSuccess: "Esatto: l'IA propone opzioni e supporti di bozza, ma l'autorevolezza, la scelta metodologica e la valutazione restano responsabilità esclusiva del docente."
      },
      {
        id: "q_in_6",
        topic: "Variabilità e natura probabilistica delle risposte",
        question: "Se invii per due volte consecutive la stessa identica richiesta (prompt) allo stesso strumento di IA, che cosa accade?",
        options: [
          "Otterrai la medesima risposta carattere per carattere, perché l'algoritmo segue regole matematiche fisse e immutabili.",
          "Otterrai risposte che possono variare nella struttura, nella lunghezza o nelle parole scelte, a causa della natura probabilistica del modello.",
          "Riceverai un messaggio di errore che segnala la duplicazione della richiesta.",
          "La seconda risposta sarà identica nel contenuto ma formulata automaticamente in un'altra lingua."
        ],
        correctIndex: 1,
        feedbackError: "I modelli generativi sono probabilistici: a parità di prompt possono proporre risposte diverse per lessico, ampiezza o articolazione. Per questo è utile fissare criteri precisi nel prompt e non dare mai per scontato un output identico.",
        feedbackSuccess: "Esatto: a parità di prompt, la natura stocastica dei modelli genera varianti diverse. Definire criteri stringenti (lettera C del COACH) serve proprio a contenere questa variabilità."
      }
    ]
  },

  // ==========================================
  // MODULO OUT: Che cosa ho imparato (Alla fine del percorso)
  // Differenziato per fascia scolastica
  // ==========================================
  moduleOUT: {
    intro: {
      title: "Che cosa ho imparato",
      subtitle: "Un momento di orientamento per consolidare i punti chiave del percorso e scoprire se conviene riprendere qualche modulo prima di concludere."
    },
    levels: {
      infanzia: [
        {
          id: "q_out_inf_1",
          targetModule: 1,
          moduleName: "Modulo 1: Chiedere una cosa o stabilire una regola",
          whyRevisit: "Per consolidare la differenza tra chiedere una singola storia episodica e configurare un assistente con registro stabile per bambini di 3-5 anni.",
          question: "Un docente di scuola dell'infanzia vuole usare l'IA sia per inventare fiabe quotidiane con animali sia per scrivere filastrocche ritmate per le routine. Quale approccio è più efficiente?",
          options: [
            "Riscrivere ogni mattina l'intero contesto pedagogico, l'età dei bambini e i criteri linguistici in una nuova chat vuota.",
            "Creare un assistente personalizzato con un System Prompt che fissa una volta per tutte l'identità, il target di 3-5 anni e le regole di semplicità sintattica.",
            "Usare un unico prompt generico di poche parole come 'Scrivi una bella filastrocca per bambini' senza specificare limiti.",
            "Salvare le risposte in un documento di testo e riutilizzare sempre le stesse storie per tutto l'anno scolastico."
          ],
          correctIndex: 1,
          feedbackError: "Per compiti ricorrenti, riscrivere ogni volta tutte le indicazioni fa perdere tempo. Il System Prompt (Modulo 1) fissa il comportamento stabile dell'assistente, così nelle chat quotidiane basta inviare solo il tema del giorno.",
          feedbackSuccess: "Esatto: impostare un'istruzione permanente evita di dover ripetere ogni volta il target di 3-5 anni, il registro linguistico e la struttura attesa."
        },
        {
          id: "q_out_inf_2",
          targetModule: 2,
          moduleName: "Modulo 2: Modello COACH",
          whyRevisit: "Per esercitarsi nel riconoscimento dei 5 elementi fondamentali (Contesto, Obiettivo, Azione, Criteri, Controllo) all'interno di prompt in prosa fluida.",
          question: "Leggi questa richiesta scritta da un'insegnante dell'infanzia: «Sei un assistente per la scuola dell'infanzia per una sezione eterogenea di 3-5 anni. Crea una breve storia di 100 parole sul tema del letargo degli animali. Usa frasi corte con soggetto-verbo-oggetto, lessico rassicurante e nessun riferimento a compiti o voti. Alla fine aggiungi una sezione Dichiarazione modifiche in cui elenchi cosa hai aggiunto, semplificato o dedotto.» Quale elemento fondamentale del modello COACH è assente o incompleto?",
          options: [
            "Contesto (chi è l'assistente e a chi si rivolge)",
            "Criteri e Limiti (lunghezza e registro linguistico)",
            "Azione e Formato di Output (i passaggi precisi di elaborazione e la struttura articolata della risposta)",
            "Dichiarazione di Trasparenza e Controllo"
          ],
          correctIndex: 2,
          feedbackError: "Nel prompt manca un'Azione strutturata: dice solo 'crea una breve storia', ma non specifica come organizzarla (es. suddivisione in scene, introduzione di dialoghi, domande stimolo per il circle time o attività motoria collegata).",
          feedbackSuccess: "Esatto: mancano i passaggi operativi dettagliati (Azione) che guidano l'IA a produrre una risposta strutturata e subito utilizzabile."
        },
        {
          id: "q_out_inf_3",
          targetModule: 4,
          moduleName: "Modulo 4: Costruisci Chatbot",
          whyRevisit: "Per chiarire il ruolo della regola 'DA INCLUDERE SEMPRE' e l'importanza del controllo attivo da parte del docente.",
          question: "Nello Step 5 del Costruttore del Chatbot viene inserita la regola sulla Dichiarazione delle Modifiche. Qual è il motivo per cui il docente deve comunque controllare ogni risposta?",
          options: [
            "Perché l'applicazione propone la regola ma i modelli linguistici non offrono garanzie assolute e possono occasionalmente omettere la dichiarazione.",
            "Perché la clausola di trasparenza modifica automaticamente il codice sorgente del modello linguistico.",
            "Perché il docente deve verificare che l'IA abbia calcolato il punteggio numerico di trasparenza.",
            "Perché la dichiarazione delle modifiche serve a sostituire la supervisione umana sul materiale didattico."
          ],
          correctIndex: 0,
          feedbackError: "L'inclusione della clausola è una scelta del docente, ma i modelli probabilistici non garantiscono il rispetto deterministico al 100%. Il docente deve vigilare attivamente verificando che la sezione sia presente e sincera.",
          feedbackSuccess: "Esatto: nessuna istruzione vincola in modo assoluto un modello linguistico. La presenza della clausola va verificata ogni volta dal docente."
        },
        {
          id: "q_out_inf_4",
          targetModule: 5,
          moduleName: "Modulo 5: Verifica Pedagogica & Export",
          whyRevisit: "Per ripassare le verifiche etiche e qualitative che competono solo all'insegnante prima dell'uso in sezione.",
          question: "L'assistente genera una drammatizzazione per bambini di 3 anni che include un personaggio 'cattivo e spaventoso' che minaccia di rinchiudere chi piange. Quale verifica della checklist del Modulo 5 deve intervenire?",
          options: [
            "Adeguatezza linguistica ed emotiva alla fascia d'età e tutela della serenità dei bambini",
            "Verifica del numero esatto di token consumati nella generazione",
            "Controllo della formattazione Markdown dei titoli",
            "Verifica della licenza d'uso commerciale del software"
          ],
          correctIndex: 0,
          feedbackError: "La sensibilità emotiva e la conoscenza del vissuto dei bambini prescolari appartengono solo all'insegnante, che deve intercettare e rimuovere elementi ansiogeni o non idonei alla fascia d'età.",
          feedbackSuccess: "Esatto: l'adeguatezza emotiva e relazionale è una responsabilità pedagogica esclusiva del docente umano."
        },
        {
          id: "q_out_inf_5",
          targetModule: 3,
          moduleName: "Modulo 3: Playground Prompt",
          whyRevisit: "Per esercitarsi nella corretta formulazione di richieste anonime nel rispetto della privacy.",
          question: "Un'insegnante desidera un'attività personalizzata per un bambino di 4 anni con difficoltà di motricità fine e inserimento nel gruppo. Come deve formulare la richiesta all'IA?",
          options: [
            "Incollare il verbale dell'incontro con la neuropsichiatra e il nome della scuola.",
            "Scrivere il nome del bambino e la sezione per consentire all'IA di contestualizzare meglio.",
            "Descrivere in forma anonima le abilità da stimolare (coordinazione oculo-manuale) e il contesto di piccolo gruppo, senza riferimenti anagrafici.",
            "Usare solo l'indirizzo della scuola dell'infanzia e le iniziali del minore."
          ],
          correctIndex: 2,
          feedbackError: "I sistemi di IA non devono mai ricevere nomi o informazioni identificative. Si descrivono unicamente gli obiettivi didattici e le caratteristiche funzionali in modo del tutto generale e anonimo.",
          feedbackSuccess: "Esatto: la richiesta va formulata in forma rigorosamente anonima focalizzandosi unicamente sui bisogni educativi."
        }
      ],
      primaria: [
        {
          id: "q_out_pri_1",
          targetModule: 1,
          moduleName: "Modulo 1: Chiedere una cosa o stabilire una regola",
          whyRevisit: "Per comprendere a fondo quando conviene usare un prompt singolo e quando invece configurare un assistente permanente.",
          question: "Un docente di scuola primaria vuole produrre con regolarità testi di lettura graduati con glossario di 3 parole chiave e 5 domande di comprensione per le classi 3ª e 4ª. Qual è la scelta più funzionale?",
          options: [
            "Scrivere da capo ogni settimana tutti i requisiti di registro, formattazione e griglia in una chat usa-e-getta.",
            "Configurare un assistente didattico permanente (System Prompt) con il modello COACH e incollare nelle singole chat solo il testo del brano da adattare.",
            "Usare un prompt generico come 'Adatta questo brano per la scuola primaria' senza fissare parametri precisi.",
            "Affidare all'IA la scelta arbitraria della lunghezza e del tipo di domande senza specificare vincoli."
          ],
          correctIndex: 1,
          feedbackError: "Per mansioni ricorrenti, il System Prompt (Modulo 1) fissa stabilmente le regole del bot. Il docente risparmia tempo perché non deve ripetere ogni volta la struttura delle 5 domande, il glossario e i limiti sintattici.",
          feedbackSuccess: "Esatto: definire un'istruzione permanente permette di ottenere ogni volta la medesima struttura di output incollando semplicemente il materiale grezzo."
        },
        {
          id: "q_out_pri_2",
          targetModule: 2,
          moduleName: "Modulo 2: Modello COACH",
          whyRevisit: "Per affinare l'individuazione dei 5 elementi del modello COACH all'interno di prompt complessi per la primaria.",
          question: "Esamina questa richiesta: «Sei un assistente per docenti di scuola primaria (classi 4ª-5ª). Elabora 3 problemi matematici a tema scientifico con calcoli realistici. Ogni problema deve contenere massimo 80 parole, solo operazioni a due cifre e una domanda chiara. Alla fine aggiungi la Dichiarazione modifiche con i calcoli verificati.» Quale elemento COACH è incompleto o assente?",
          options: [
            "Contesto (ruolo e ordine scolastico)",
            "Azione e Formato di Output (la struttura dettagliata della risposta, con passaggi di risoluzione o chiave di correzione per il docente)",
            "Criteri (limiti di parole e operazioni permesse)",
            "Dichiarazione di Trasparenza e Controllo"
          ],
          correctIndex: 1,
          feedbackError: "Il prompt non specifica l'Azione nel formato di output: non indica se l'IA deve fornire solo il testo del problema o anche i dati espliciti, la guida ai passaggi di calcolo e la chiave di correzione per l'insegnante.",
          feedbackSuccess: "Esatto: manca la definizione precisa dei componenti di output (Azione), come lo scorporo dei dati e la tabella di correzione per il docente."
        },
        {
          id: "q_out_pri_3",
          targetModule: 4,
          moduleName: "Modulo 4: Costruisci Chatbot",
          whyRevisit: "Per consolidare il significato della clausola di trasparenza nello Step 5 e la vigilanza sulle semplificazioni del testo.",
          question: "Nello Step 5 del Costruttore del Chatbot inserisci la richiesta della «Dichiarazione modifiche». Cosa deve fare il docente quando l'IA genera una scheda di lettura con questa sezione?",
          options: [
            "Copiare il testo senza leggerlo, perché la presenza dell'intestazione garantisce l'assenza di tagli concettuali.",
            "Verificare attentamente quali concetti o vocaboli l'IA dichiara di aver tagliato o semplificato, per assicurarsi che il testo mantenga il valore formativo previsto.",
            "Cancellare la sezione delle modifiche prima di stampare la scheda senza esaminarla.",
            "Chiedere all'IA di confermare se la dichiarazione è veritiera prima di procedere."
          ],
          correctIndex: 1,
          feedbackError: "La Dichiarazione Modifiche serve proprio al docente per verificare in pochi secondi se le semplificazioni o i tagli applicati dall'IA sono compatibili con gli obiettivi didattici della lezione.",
          feedbackSuccess: "Esatto: la sezione di trasparenza evidenzia le scelte dell'IA, consentendo al docente di approvarle o correggerle tempestivamente."
        },
        {
          id: "q_out_pri_4",
          targetModule: 5,
          moduleName: "Modulo 5: Verifica Pedagogica & Export",
          whyRevisit: "Per verificare i controlli di accuratezza concettuale e inclusione prima di distribuire schede agli alunni.",
          question: "L'IA genera una scheda di storia sulla civiltà egizia in cui afferma che 'i faraoni costruirono le piramidi per difendersi dagli attacchi dei romani'. Quale controllo della checklist del Modulo 5 è fondamentale applicare?",
          options: [
            "Controllo di accuratezza e correttezza dei contenuti (prevenzione di allucinazioni ed errori cronologici/storici)",
            "Verifica del font utilizzato per i titoli",
            "Controllo della velocità di generazione della risposta",
            "Verifica della presenza di tabelle a doppia entrata"
          ],
          correctIndex: 0,
          feedbackError: "L'IA può generare anacronismi ed errori storici clamorosi in testi apparentemente perfetti. La verifica della correttezza fattuale è un dovere non delegabile del docente.",
          feedbackSuccess: "Esatto: l'accuratezza dei contenuti e la correzione degli errori storici/scientifici dipendono esclusivamente dalla revisione del docente."
        },
        {
          id: "q_out_pri_5",
          targetModule: 3,
          moduleName: "Modulo 3: Playground Prompt",
          whyRevisit: "Per esercitarsi nel garantire la privacy e l'anonimato nella redazione di compiti su misura.",
          question: "Un docente desidera preparare un testo facilitato per un alunno con dislessia certificata della classe 4ª B dell'IC Manzoni. Qual è il modo corretto di impostare la richiesta?",
          options: [
            "Incollare la diagnosi clinica dell'ASL eliminando solo la data di nascita dell'alunno.",
            "Indicare che il testo è per 'Marco della 4ª B' per aiutare l'assistente a calibrare l'età.",
            "Chiedere un testo ad alta leggibilità per la classe quarta (caratteri non graziati, frasi brevi, spaziatura ampia), senza menzionare l'alunno o la scuola.",
            "Inserire il codice meccanografico dell'istituto e il nome del docente per autenticare la chat."
          ],
          correctIndex: 2,
          feedbackError: "Non vanno mai immessi nomi, sezioni o dati sensibili. Si richiedono all'IA i parametri tecnici e grafici di accessibilità (sintassi, font, lunghezza) in modo puramente astratto.",
          feedbackSuccess: "Esatto: la richiesta deve specificare unicamente i parametri didattici di accessibilità, senza alcun riferimento all'identità del minore o dell'istituto."
        }
      ],
      secondaria: [
        {
          id: "q_out_sec_1",
          targetModule: 1,
          moduleName: "Modulo 1: Chiedere una cosa o stabilire una regola",
          whyRevisit: "Per consolidare il passaggio da prompt contingenti a un assistente di disciplina strutturato.",
          question: "Un docente di Lettere di scuola media vuole generare periodicamente verifiche semistrutturate con domande aperte a risposta breve e relativa griglia di valutazione a punti. Qual è la strategia migliore?",
          options: [
            "Riformulare ogni volta le istruzioni sulla griglia, sui punteggi massimi e sul registro per ragazzi di 11-14 anni.",
            "Creare un assistente personalizzato impostando nel System Prompt il ruolo, la struttura fissa delle prove e i criteri di attribuzione dei punteggi.",
            "Chiedere all'IA di 'fare una verifica difficile di storia' senza specificare sezioni o punteggi.",
            "Usare un prompt unico per tutti i compiti dell'anno senza mai variare l'argomento disciplinare."
          ],
          correctIndex: 1,
          feedbackError: "Il System Prompt (Modulo 1) serve a fissare una volta per tutte i formati ricorrenti (es. 3 sezioni, griglia su 10 punti, tempo 45 minuti). Nelle singole lezioni basterà inserire l'argomento storico o letterario.",
          feedbackSuccess: "Esatto: il System Prompt definisce il modello metodologico permanente della verifica, consentendo al docente di inserire solo l'argomento della prova."
        },
        {
          id: "q_out_sec_2",
          targetModule: 2,
          moduleName: "Modulo 2: Modello COACH",
          whyRevisit: "Per perfezionare il controllo dei 5 elementi COACH nei prompt complessi della secondaria.",
          question: "Esamina questo prompt: «Sei un docente di Scienze della scuola secondaria di I grado per una classe 3ª. Elabora una prova di verifica sulla genetica e le leggi di Mendel. Struttura la prova in 4 quesiti a risposta multipla e 2 domande aperte con risposte attese. Limita il tempo di svolgimento a 40 minuti e il punteggio totale a 10 punti. Includi sempre alla fine la sezione Dichiarazione modifiche con i concetti semplificati.» Quale elemento COACH è formulato in modo carente o generico?",
          options: [
            "Contesto (ordine di scuola e disciplina)",
            "Obiettivo didattico (materia e tema della prova)",
            "Azione (suddivisione tra quesiti chiusi e aperti)",
            "Tutti i 5 elementi del modello COACH sono presenti e ben definiti in prosa continua."
          ],
          correctIndex: 3,
          feedbackError: "In questo prompt sono presenti tutti e 5 gli elementi COACH: Contesto (docente scienze media, classe 3ª), Obiettivo (genetica e Mendel), Azione (4 chiuse, 2 aperte con risposte attese), Criteri (tempo 40 min, punteggio 10) e Controllo (Dichiarazione modifiche).",
          feedbackSuccess: "Esatto: il prompt è un esempio completo ed equilibrato in cui tutti i 5 pilastri del modello COACH sono integrati in modo chiaro e rigoroso."
        },
        {
          id: "q_out_sec_3",
          targetModule: 4,
          moduleName: "Modulo 4: Costruisci Chatbot",
          whyRevisit: "Per chiarire la funzione della sezione di trasparenza nel verificare assunzioni e semplificazioni disciplinari.",
          question: "Nello Step 5 del Modulo 4 il docente richiede all'IA di inserire la sezione «Dichiarazione modifiche». A cosa serve principalmente questa dichiarazione in una verifica disciplinare?",
          options: [
            "A certificare che la risposta dell'IA sia conforme alle norme ministeriali senza bisogno di lettura.",
            "A rendere immediatamente visibili le assunzioni, le semplificazioni concettuali o i tagli effettuati dall'IA rispetto all'argomento richiesto.",
            "A mostrare agli studenti quali domande sono state generate dal computer e quali dal docente.",
            "A calcolare la percentuale di originalità del testo prodotto."
          ],
          correctIndex: 1,
          feedbackError: "La dichiarazione delle modifiche costringe l'IA a esplicitare cosa ha aggiunto, dedotto o semplificato, permettendo al docente di individuare subito eventuali banalizzazioni di concetti disciplinari.",
          feedbackSuccess: "Esatto: la trasparenza consente al docente di esaminare immediatamente quali scelte di semplificazione o integrazione l'IA ha applicato alla materia."
        },
        {
          id: "q_out_sec_4",
          targetModule: 5,
          moduleName: "Modulo 5: Verifica Pedagogica & Export",
          whyRevisit: "Per consolidare la verifica contro stereotipi, bias e allucinazioni terminologiche.",
          question: "Generando un compito di realtà per Educazione Civica, l'IA propone esempi in cui tutte le figure dirigenziali sono maschili e le figure di cura sono femminili. Quale punto della checklist del Modulo 5 è necessario applicare?",
          options: [
            "Assenza di stereotipi e distorsioni (garanzia di parità di genere, equità e rappresentazione inclusiva)",
            "Controllo della velocità di caricamento del browser",
            "Verifica del numero di caratteri speciali presenti nel prompt",
            "Esportazione del testo in formato XML"
          ],
          correctIndex: 0,
          feedbackError: "I modelli linguistici riproducono spesso bias e stereotipi presenti nei dati di addestramento. Spetta al docente esaminare criticamente i testi e correggere qualsiasi distorsione di genere, sociale o culturale.",
          feedbackSuccess: "Esatto: il docente è il garante dei valori costituzionali e dell'inclusione, e deve intervenire per rimuovere stereotipi e pregiudizi impliciti."
        },
        {
          id: "q_out_sec_5",
          targetModule: 3,
          moduleName: "Modulo 3: Playground Prompt",
          whyRevisit: "Per garantire la riservatezza e la deontologia nella gestione di casi speciali o PDP.",
          question: "Un docente di scuola secondaria deve elaborare una traccia graduata per uno studente con Piano Didattico Personalizzato. Qual è la condotta deontologica e legale corretta?",
          options: [
            "Incollare il PDF del PDP nel chatbot per consentire un adattamento millimetrico.",
            "Indicare nome, cognome e classe dello studente specificando che si tratta di una consultazione a scopo scolastico.",
            "Specificare unicamente i mediatori didattici desiderati (mappe concettuali, sintesi per punti, tempi aggiuntivi) in forma del tutto impersonale e anonima.",
            "Inserire solo il codice fiscale dello studente per garantire l'univocità della scheda."
          ],
          correctIndex: 2,
          feedbackError: "I documenti formali (come PDP o PEI) e i dati personali non devono mai transitare su piattaforme di IA. Si indicano soltanto gli strumenti compensativi o i formati desiderati in modo totalmente anonimo.",
          feedbackSuccess: "Esatto: si indicano unicamente le strategie didattiche e i mediatori necessari, preservando il totale anonimato dello studente."
        }
      ]
    }
  }
};


  // 2. STATO APPLICATIVO & PERSISTENZA LOCALSTORAGE
/**
 * Maestro Ciuchino - State Management & LocalStorage Persistence
 */

const STORAGE_KEY = 'maestro_ciuchino_state_v1';

const defaultState = {
  currentModule: 'in', // 'in' | 1 | 2 | 3 | 4 | 5 | 'out'
  currentLevel: 'primaria', // 'infanzia' | 'primaria' | 'secondaria'
  completedModules: {
    in: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    out: false
  },
  // Modulo IN
  mInQuizAnswers: {}, // { [qId]: { selectedIdx, isCorrect, retryCount } }
  // Modulo 1
  m1QuizAnswers: {}, // { q1: { selectedIdx, isCorrect, feedbackText } }
  // Modulo 2
  m2PillarInputs: {
    c: '',
    o: '',
    a: '',
    crit: '',
    h: ''
  },
  m2QuizAnswers: {}, // { [quizId]: { selectedIdx, isCorrect, feedbackText } }
  // Modulo 3
  m3PromptText: '',
  m3CoachChecks: {
    c: false,
    o: false,
    a: false,
    crit: false,
    h: false
  },
  // Modulo 4
  m4BotData: {
    role: '',
    context: '',
    objective: '',
    actionInput: '',
    criteria: '',
    transparencyClause: ''
  },
  // Modulo 5
  m5Checklist: {
    check_match: false,
    check_accuracy: false,
    check_age: false,
    check_nobias: false,
    check_privacy: false
  },
  // Modulo OUT
  mOutQuizAnswers: {} // { [qId]: { selectedIdx, isCorrect, retryCount } }
};

class AppState {
  constructor() {
    this.state = this.loadState();
    this.listeners = [];
  }

  loadState() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          ...defaultState,
          ...parsed,
          completedModules: { ...defaultState.completedModules, ...(parsed.completedModules || {}) },
          mInQuizAnswers: { ...defaultState.mInQuizAnswers, ...(parsed.mInQuizAnswers || {}) },
          m1QuizAnswers: { ...defaultState.m1QuizAnswers, ...(parsed.m1QuizAnswers || {}) },
          m2PillarInputs: { ...defaultState.m2PillarInputs, ...(parsed.m2PillarInputs || {}) },
          m2QuizAnswers: { ...defaultState.m2QuizAnswers, ...(parsed.m2QuizAnswers || {}) },
          m3CoachChecks: { ...defaultState.m3CoachChecks, ...(parsed.m3CoachChecks || {}) },
          m4BotData: { ...defaultState.m4BotData, ...(parsed.m4BotData || {}) },
          m5Checklist: { ...defaultState.m5Checklist, ...(parsed.m5Checklist || {}) },
          mOutQuizAnswers: { ...defaultState.mOutQuizAnswers, ...(parsed.mOutQuizAnswers || {}) }
        };
      }
    } catch (e) {
      console.warn('Impossibile caricare lo stato salvato:', e);
    }
    return JSON.parse(JSON.stringify(defaultState));
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Impossibile salvare lo stato su localStorage:', e);
    }
  }

  getState() {
    return this.state;
  }

  setState(updates) {
    this.state = { ...this.state, ...updates };
    this.saveState();
    this.notify(updates);
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify(changes) {
    this.listeners.forEach(listener => {
      try {
        listener(this.state, changes);
      } catch (err) {
        console.error('Errore nel listener di stato:', err);
      }
    });
  }

  // Helper specifici
  setLevel(level) {
    if (['infanzia', 'primaria', 'secondaria'].includes(level)) {
      this.setState({ currentLevel: level });
    }
  }

  setModule(moduleKey) {
    if (['in', 'out', '1', '2', '3', '4', '5', 1, 2, 3, 4, 5].includes(moduleKey)) {
      const normalized = (moduleKey === 'in' || moduleKey === 'out') ? moduleKey : parseInt(moduleKey, 10);
      this.setState({ currentModule: normalized });
    }
  }

  markModuleComplete(moduleKey, isComplete = true) {
    const updated = {
      ...this.state.completedModules,
      [moduleKey]: isComplete
    };
    this.setState({ completedModules: updated });
  }

  resetAllProgress() {
    this.state = JSON.parse(JSON.stringify(defaultState));
    this.saveState();
    this.notify(this.state);
  }
}

const stateManager = new AppState();


  // UTILITY GLOBALI
  function escapeHtml(str) {
    return (str || '')
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

  // 3. MODULO IN (Prima di iniziare)
/**
 * Maestro Ciuchino - Modulo IN: Che cosa so già (Prima di iniziare)
 * Modulo formativo non valutativo per allineare le conoscenze di base sull'IA.
 */


function renderModuleIN(container) {
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


  // 4. MODULO 1
/**
 * Maestro Ciuchino - Modulo 1: Chiedere una cosa o stabilire una regola
 * Spiegazione semplice senza gergo della differenza tra Richiesta e Regola permanente.
 * Confronto interattivo prima/dopo e mini-quiz metacognitivo.
 */


function renderModule1(container) {
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


  // 5. MODULO 2
/**
 * Maestro Ciuchino - Modulo 2: Scrivere un Prompt Efficace con il Modello COACH
 * Guida passo-passo ai 5 elementi (Contesto, Obiettivo, Azione, Criteri, Hai il controllo tu)
 * con esempi differenziati per fascia scolastica e builder interattivo in tempo reale.
 */


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

function renderModule2(container) {
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


  // 6. MODULO 3
/**
 * Maestro Ciuchino - Modulo 3: Playground con Autovalutazione Guidata COACH
 * Editor interattivo, scheda di autovalutazione con finestre di aiuto puntuale (?)
 * e simulatore didattico con disclaimer pedagogico obbligatorio.
 */


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

function renderModule3(container) {
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


  // 7. MODULO 4
/**
 * Maestro Ciuchino - Modulo 4: Costruttore del Chatbot (System Prompt)
 * Wizard guidato in 5 step per la creazione del System Prompt permanente.
 * Include validazione di completezza COACH, finestre di aiuto puntuale (?)
 * e clausola non negoziabile di dichiarazione modifiche ("Casella H").
 */


function renderModule4(container) {
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


  // 8. MODULO 5
/**
 * Maestro Ciuchino - Modulo 5: Verifica Pedagogica, Uso Responsabile ed Esportazione
 * Checklist finale con finestre di aiuto contestuale (?), centro di esportazione,
 * guida all'uso nelle piattaforme e attestato finale firmato da Maestro Ciuchino.
 */


function renderModule5(container) {
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


  // 9. MODULO OUT (Alla fine del percorso)
/**
 * Maestro Ciuchino - Modulo OUT: Che cosa ho imparato (Alla fine del percorso)
 * Modulo formativo e di orientamento differenziato per ordine di scuola.
 */


function renderModuleOUT(container) {
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


  // 10. APP CONTROLLER E ROUTER
/**
 * Maestro Ciuchino - Applicazione Principale
 * Routing tra moduli, gestione popover di contesto, selettore fascia e reattività
 */


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


  // Inizializzazione sicura
  function initApp() {
    window.maestroCiuchinoApp = new App();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
