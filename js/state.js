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

export const stateManager = new AppState();
