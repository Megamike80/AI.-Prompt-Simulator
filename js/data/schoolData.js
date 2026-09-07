/**
 * Maestro Ciuchino - Archivio Dati Didattici
 * Contenuti differenziati per Scuola dell'Infanzia, Primaria e Secondaria di I Grado
 */

export const schoolLevels = {
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

export const schoolData = {
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
