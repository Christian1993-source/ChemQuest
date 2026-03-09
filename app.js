const STORAGE_KEYS = {
  bank: "chemPrepMyp.bank.v1",
  attempts: "chemPrepMyp.attempts.v1",
  meta: "chemPrepMyp.meta.v1",
  overview: "chemPrepMyp.overview.v1",
  reviews: "chemPrepMyp.reviews.v1",
  activeReviewId: "chemPrepMyp.activeReviewId.v1"
};

const CONFIG = {
  maxBankSize: 100,
  examSeconds: 45 * 60,
  examQuestionCount: 30
};

const LETTERS = ["A", "B", "C", "D"];
const LIVE_CHANNEL = "chemPrepMyp.live";

const DEFAULT_BANK_TEXT = `Topic: Atomic structure
Which subatomic particle has a positive charge?
A) Electron
B) Neutron
C) Proton*
D) Photon
Hint: Think about the particle in the nucleus that defines the atomic number.

Topic: Atomic structure
The atomic number tells you the number of ___ in the nucleus.
Answer: protons
Hint: This value identifies the element.

Topic: Atomic structure
Isotopes of the same element have the same number of:
A) Neutrons
B) Protons*
C) Electron shells
D) Bonds
Hint: The element name changes only if this particle count changes.

Topic: Atomic structure
An atom has 11 protons and 12 neutrons. What is its mass number?
Answer: 23
Tolerance: 0.1
Hint: Add protons and neutrons.

Topic: Atomic structure
In a neutral atom, the number of protons equals the number of ___.
Answer: electrons
Hint: Neutral means total positive and negative charge balance.

Topic: Periodic table
Elements in the same group have similar numbers of ___ electrons.
Answer: valence
Hint: Look at the electrons in the outer shell.

Topic: Periodic table
Across a period from left to right, atomic radius generally:
A) Increases
B) Decreases*
C) Stays exactly the same
D) Doubles
Hint: Increasing nuclear charge pulls electrons closer.

Topic: Periodic table
The noble gases are usually:
A) Highly reactive
B) Strong acids
C) Unreactive*
D) Radioactive
Hint: Their outer electron shell is already full.

Topic: Periodic table
Moving down Group 1, the reactivity of the metals generally:
A) Decreases
B) Increases*
C) Stays constant
D) Becomes zero
Hint: The outer electron is farther from the nucleus.

Topic: Periodic table
Which group contains the halogens?
A) Group 1
B) Group 2
C) Group 17*
D) Group 18
Hint: These non-metals form salts with metals.

Topic: Chemical bonding
An ionic bond usually forms between a:
A) Metal and a non-metal*
B) Non-metal and a non-metal
C) Metal and a metal
D) Noble gas and a metal
Hint: Think about electron transfer.

Topic: Chemical bonding
A covalent bond is formed by the sharing of ___.
Answer: electrons
Hint: Two atoms overlap their outer shells.

Topic: Chemical bonding
NaCl is an example of:
A) Metallic bonding
B) Covalent bonding
C) Ionic bonding*
D) Hydrogen bonding
Hint: Sodium is a metal and chlorine is a non-metal.

Topic: Chemical bonding
How many electrons are shared in a single covalent bond?
Answer: 2
Tolerance: 0.1
Hint: One shared pair is involved.

Topic: Chemical bonding
Which substance is most likely to have a high melting point because of a giant ionic lattice?
A) Carbon dioxide
B) Magnesium oxide*
C) Oxygen
D) Water
Hint: Ionic compounds often have strong electrostatic attractions.

Topic: Chemical bonding
Water is a polar molecule because:
A) It has no shared electrons
B) Its electrons are shared equally
C) Its electrons are shared unequally*
D) It contains ions
Hint: Oxygen pulls shared electrons more strongly than hydrogen.

Topic: Stoichiometry
What is the molar mass of H2O?
Answer: 18
Tolerance: 0.5
Hint: Add the atomic masses of 2 hydrogens and 1 oxygen.

Topic: Stoichiometry
The empirical formula of C2H4 is ___.
Answer: CH2
Hint: Simplify the ratio 2:4.

Topic: Stoichiometry
What coefficient goes in front of H2 when balancing H2 + O2 -> H2O?
Answer: 2
Tolerance: 0.1
Hint: Balance hydrogen atoms after balancing oxygen.

Topic: Stoichiometry
The law of conservation of mass states that mass is:
A) Created during reactions
B) Destroyed during reactions
C) Conserved during reactions*
D) Always doubled during reactions
Hint: Total mass of reactants equals total mass of products in a closed system.

Topic: Stoichiometry
The chemical formula for magnesium oxide is ___.
Answer: MgO
Hint: Magnesium forms 2+ ions and oxygen forms 2- ions.

Topic: Stoichiometry
One mole of any substance contains:
A) 100 particles
B) 6.02 x 10^23 particles*
C) 12 particles
D) The same mass in grams
Hint: This is Avogadro's number.

Topic: Stoichiometry
What is the percentage by mass of oxygen in CO2?
Answer: 72.7
Tolerance: 0.6
Hint: Oxygen contributes 32 of the 44 total grams per mole.

Topic: Stoichiometry
In water, the ratio of hydrogen atoms to oxygen atoms is:
A) 1:1
B) 1:2
C) 2:1*
D) 3:1
Hint: Read the subscripts in H2O.

Topic: Stoichiometry
The limiting reactant is the reactant that:
A) Has the largest mass
B) Runs out first*
C) Is always a gas
D) Has the highest concentration
Hint: This reactant stops the reaction from making more product.

Topic: Gas laws
As temperature increases, the average kinetic energy of gas particles:
A) Decreases
B) Stays the same
C) Increases*
D) Becomes zero
Hint: Hotter particles move faster on average.

Topic: Gas laws
In Boyle's law, pressure and volume are related ___ at constant temperature.
Answer: inversely | inverse
Hint: If one doubles, the other halves.

Topic: Gas laws
A gas has a volume of 4.0 L. If the pressure doubles at constant temperature, what is the new volume in liters?
Answer: 2
Tolerance: 0.1
Hint: Use the inverse pressure-volume relationship.

Topic: Gas laws
Gas particles are best described as:
A) Fixed in place
B) Packed in a rigid lattice
C) Far apart and moving randomly*
D) Always positively charged
Hint: Think about the particle model for gases.

Topic: Gas laws
Evaporation is:
A) Endothermic*
B) Exothermic
C) Always a chemical change
D) A nuclear process
Hint: Energy is needed to escape the liquid phase.

Topic: Acids and bases
A solution with pH less than 7 is:
A) Acidic*
B) Basic
C) Neutral
D) Saturated
Hint: Lower pH means higher hydrogen ion concentration.

Topic: Acids and bases
Neutralization between an acid and a base produces:
A) Salt and water*
B) Only gas
C) Only water
D) Metal and oxygen
Hint: Acid plus base gives two common products.

Topic: Acids and bases
A solution with pH 11 is ___.
Answer: basic | alkaline
Hint: pH values above 7 are not acidic.

Topic: Acids and bases
Universal indicator usually turns what color in a strong acid?
A) Blue
B) Purple
C) Red*
D) Green
Hint: Think of the warm color linked to very low pH.

Topic: Solutions
In a solution, the substance present in the larger amount is the:
A) Solute
B) Solvent*
C) Precipitate
D) Catalyst
Hint: It is the medium that does the dissolving.

Topic: Solutions
A solution has a concentration of 0.50 mol/L and a volume of 2.0 L. How many moles of solute are present?
Answer: 1.0
Tolerance: 0.05
Hint: Multiply concentration by volume.

Topic: Solutions
For many solid solutes, solubility in water tends to:
A) Decrease when temperature rises
B) Increase when temperature rises*
C) Stay exactly the same
D) Become zero
Hint: Warmer water often dissolves more solid.

Topic: Solutions
When you dilute a solution by adding more solvent, the concentration:
A) Increases
B) Decreases*
C) Stays exactly the same
D) Becomes negative
Hint: The same amount of solute is spread through a larger volume.`;

const refs = {
  homeView: document.getElementById("homeView"),
  quizView: document.getElementById("quizView"),
  resultsView: document.getElementById("resultsView"),
  teacherView: document.getElementById("teacherView"),
  startExamBtn: document.getElementById("startExamBtn"),
  startPracticeBtn: document.getElementById("startPracticeBtn"),
  homeHeaderBtn: document.getElementById("homeHeaderBtn"),
  teacherModeBtn: document.getElementById("teacherModeBtn"),
  backToStudentBtn: document.getElementById("backToStudentBtn"),
  restoreSeedBtn: document.getElementById("restoreSeedBtn"),
  exportBankBtn: document.getElementById("exportBankBtn"),
  unitNameHome: document.getElementById("unitNameHome"),
  topicsListHome: document.getElementById("topicsListHome"),
  instructionsListHome: document.getElementById("instructionsListHome"),
  modeLabel: document.getElementById("modeLabel"),
  timerDisplay: document.getElementById("timerDisplay"),
  answeredDisplay: document.getElementById("answeredDisplay"),
  progressFill: document.getElementById("progressFill"),
  questionCounter: document.getElementById("questionCounter"),
  questionPrompt: document.getElementById("questionPrompt"),
  topicChip: document.getElementById("topicChip"),
  answerArea: document.getElementById("answerArea"),
  hintBox: document.getElementById("hintBox"),
  feedbackBox: document.getElementById("feedbackBox"),
  questionMeta: document.getElementById("questionMeta"),
  submitAnswerBtn: document.getElementById("submitAnswerBtn"),
  hintBtn: document.getElementById("hintBtn"),
  nextQuestionBtn: document.getElementById("nextQuestionBtn"),
  finishReviewBtn: document.getElementById("finishReviewBtn"),
  questionTracker: document.getElementById("questionTracker"),
  resultsTitle: document.getElementById("resultsTitle"),
  scorePercent: document.getElementById("scorePercent"),
  scoreLine: document.getElementById("scoreLine"),
  resultsMessage: document.getElementById("resultsMessage"),
  resultsStats: document.getElementById("resultsStats"),
  strengthList: document.getElementById("strengthList"),
  reviewList: document.getElementById("reviewList"),
  retryModeBtn: document.getElementById("retryModeBtn"),
  homeBtn: document.getElementById("homeBtn"),
  teacherInput: document.getElementById("teacherInput"),
  uploadQuestionsBtn: document.getElementById("uploadQuestionsBtn"),
  clearTeacherInputBtn: document.getElementById("clearTeacherInputBtn"),
  clearAllQuestionsBtn: document.getElementById("clearAllQuestionsBtn"),
  reviewSelect: document.getElementById("reviewSelect"),
  newReviewNameInput: document.getElementById("newReviewNameInput"),
  createReviewBtn: document.getElementById("createReviewBtn"),
  deleteReviewBtn: document.getElementById("deleteReviewBtn"),
  unitNameInput: document.getElementById("unitNameInput"),
  unitTopicsInput: document.getElementById("unitTopicsInput"),
  unitInstructionsInput: document.getElementById("unitInstructionsInput"),
  saveReviewBtn: document.getElementById("saveReviewBtn"),
  teacherErrors: document.getElementById("teacherErrors"),
  bankSummary: document.getElementById("bankSummary"),
  bankPreview: document.getElementById("bankPreview"),
  teacherStats: document.getElementById("teacherStats"),
  syncBadge: document.getElementById("syncBadge"),
  liveNotice: document.getElementById("liveNotice")
};

const state = {
  reviews: [],
  activeReviewId: "",
  bank: [],
  attempts: [],
  overview: null,
  session: null,
  lastSummary: null,
  channel: null,
  noticeTimerId: null
};

const DEFAULT_OVERVIEW = {
  unitName: "Welcome to ChemQuest",
  subtitle: "Your mission is simple: master the concepts and conquer the exam.",
  topics: [
    "Atomic structure",
    "Chemical bonding",
    "Stoichiometry",
    "Gas laws"
  ],
  instructions: [
    "Exam Mode gives you 45 minutes.",
    "Practice Mode lets you repeat freely.",
    "Use Hint only if you get stuck.",
    "Check the results for weak topics."
  ]
};

const LEGACY_DEFAULT_OVERVIEW_NAMES = new Set([
  "MYP 4-5 Chemistry Review",
  "Chemistry Unit Review"
]);

const LEGACY_DEFAULT_OVERVIEW_INSTRUCTIONS = [
  "Read each question carefully before answering.",
  "Use the Hint button only when needed.",
  "Exam Mode gives you 45 minutes for a random set of questions.",
  "Check your final results to see strengths and areas to review."
];

function makeEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}

function shuffleArray(items) {
  const clone = [...items];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "question";
}

function createId(prefix) {
  if (window.crypto && window.crypto.randomUUID) {
    return `${prefix}-${window.crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

function formatTime(totalSeconds) {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 0) return "00:00";
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function parseLineList(value) {
  return String(value || "")
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeOverview(rawOverview) {
  if (!rawOverview || typeof rawOverview !== "object") {
    return { ...DEFAULT_OVERVIEW };
  }

  const rawUnitName = String(rawOverview.unitName || "").trim();
  const rawSubtitle = String(rawOverview.subtitle || "").trim();
  const unitName = rawUnitName || DEFAULT_OVERVIEW.unitName;
  const subtitle = rawSubtitle || DEFAULT_OVERVIEW.subtitle;
  const topics = Array.isArray(rawOverview.topics) ? rawOverview.topics : parseLineList(rawOverview.topics);
  const instructions = Array.isArray(rawOverview.instructions) ? rawOverview.instructions : parseLineList(rawOverview.instructions);

  return {
    unitName,
    subtitle,
    topics: topics.length ? topics.map((item) => String(item).trim()).filter(Boolean) : [...DEFAULT_OVERVIEW.topics],
    instructions: instructions.length ? instructions.map((item) => String(item).trim()).filter(Boolean) : [...DEFAULT_OVERVIEW.instructions]
  };
}

function applyLegacyOverviewMigrations(overview) {
  let nextOverview = normalizeOverview(overview);

  if (LEGACY_DEFAULT_OVERVIEW_NAMES.has(nextOverview.unitName)) {
    nextOverview = {
      ...nextOverview,
      unitName: DEFAULT_OVERVIEW.unitName,
      subtitle: DEFAULT_OVERVIEW.subtitle
    };
  }

  if (JSON.stringify(nextOverview.instructions) === JSON.stringify(LEGACY_DEFAULT_OVERVIEW_INSTRUCTIONS)) {
    nextOverview = {
      ...nextOverview,
      instructions: [...DEFAULT_OVERVIEW.instructions]
    };
  }

  return nextOverview;
}

function buildDefaultQuestions() {
  const parsedSeed = parseTeacherInput(DEFAULT_BANK_TEXT);
  return parsedSeed.questions.slice(0, CONFIG.maxBankSize);
}

function cloneQuestions(questions) {
  return questions
    .map((question, index) => normalizeQuestion(question, index))
    .filter(Boolean)
    .slice(0, CONFIG.maxBankSize);
}

function normalizeReview(rawReview, index = 0) {
  const overview = applyLegacyOverviewMigrations(rawReview && rawReview.overview ? rawReview.overview : rawReview);
  const rawQuestions = Array.isArray(rawReview?.questions)
    ? rawReview.questions
    : Array.isArray(rawReview?.bank)
      ? rawReview.bank
      : [];

  return {
    id: String(rawReview?.id || "").trim() || `review-${slugify(overview.unitName)}-${index + 1}`,
    unitName: overview.unitName,
    subtitle: overview.subtitle,
    topics: [...overview.topics],
    instructions: [...overview.instructions],
    questions: cloneQuestions(rawQuestions)
  };
}

function buildReviewFromCurrentState() {
  return normalizeReview({
    id: state.activeReviewId,
    unitName: state.overview?.unitName,
    subtitle: state.overview?.subtitle,
    topics: state.overview?.topics,
    instructions: state.overview?.instructions,
    questions: state.bank
  });
}

function currentReview() {
  return state.reviews.find((review) => review.id === state.activeReviewId) || null;
}

function syncStateFromActiveReview() {
  const review = currentReview() || state.reviews[0] || null;
  if (!review) {
    state.activeReviewId = "";
    state.overview = applyLegacyOverviewMigrations(DEFAULT_OVERVIEW);
    state.bank = [];
    return;
  }

  state.activeReviewId = review.id;
  state.overview = applyLegacyOverviewMigrations(review);
  state.bank = cloneQuestions(review.questions);
}

function upsertActiveReview() {
  const nextReview = buildReviewFromCurrentState();
  const existingIndex = state.reviews.findIndex((review) => review.id === nextReview.id);
  if (existingIndex >= 0) {
    state.reviews[existingIndex] = nextReview;
  } else {
    state.reviews.push(nextReview);
  }
}

function normalizeFreeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9.+/\-]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function extractFirstNumber(value) {
  const match = String(value || "").match(/-?\d+(?:\.\d+)?(?:e[+-]?\d+)?/i);
  return match ? Number(match[0]) : null;
}

function inferTopic(prompt) {
  const text = prompt.toLowerCase();
  if (/(proton|neutron|electron|nucleus|isotope|atomic number|mass number)/.test(text)) return "Atomic structure";
  if (/(group|period|halogen|noble gas|valence|atomic radius|reactivity)/.test(text)) return "Periodic table";
  if (/(ionic|covalent|bond|polar|lattice|share electrons)/.test(text)) return "Chemical bonding";
  if (/(molar mass|mole|empirical formula|coefficient|balanced|conservation of mass|limiting reactant|percentage by mass)/.test(text)) return "Stoichiometry";
  if (/(gas|pressure|volume|temperature|boyle|evaporation|kinetic energy)/.test(text)) return "Gas laws";
  if (/(acid|base|alkaline|ph|neutralization|indicator)/.test(text)) return "Acids and bases";
  if (/(solute|solvent|solution|concentration|dilute|solubility)/.test(text)) return "Solutions";
  return "Chemistry";
}

function defaultHintFor(question) {
  const topic = question.topic || inferTopic(question.prompt);
  if (question.type === "numeric") {
    return "Set up the relationship first, then calculate carefully.";
  }
  if (topic === "Atomic structure") return "Focus on particles, charge, and what is inside the nucleus.";
  if (topic === "Periodic table") return "Use group trends and outer-shell electrons.";
  if (topic === "Chemical bonding") return "Decide whether electrons are transferred or shared.";
  if (topic === "Stoichiometry") return "Track formulas, ratios, and total mass carefully.";
  if (topic === "Gas laws") return "Think about how pressure, volume, and temperature change together.";
  if (topic === "Acids and bases") return "Use the pH scale and the products of neutralization.";
  if (topic === "Solutions") return "Pay attention to solute, solvent, and concentration.";
  return "Look for the main chemistry idea in the question stem.";
}

function normalizeQuestion(rawQuestion, index = 0) {
  if (!rawQuestion || typeof rawQuestion !== "object") return null;

  const prompt = String(rawQuestion.prompt || rawQuestion.questionText || "").trim();
  if (!prompt) return null;

  const topic = String(rawQuestion.topic || inferTopic(prompt)).trim() || "Chemistry";
  const id = String(rawQuestion.id || `${slugify(topic)}-${slugify(prompt)}-${index + 1}`);

  if (rawQuestion.type === "mc" || Array.isArray(rawQuestion.choices)) {
    let choices = [];
    if (
      Array.isArray(rawQuestion.choices) &&
      rawQuestion.choices.every((choice) => typeof choice === "string") &&
      Number.isInteger(rawQuestion.correctIndex)
    ) {
      choices = rawQuestion.choices.map((choice, choiceIndex) => ({
        text: String(choice).trim(),
        isCorrect: choiceIndex === rawQuestion.correctIndex
      }));
    } else if (
      Array.isArray(rawQuestion.choices) &&
      rawQuestion.choices.every((choice) => choice && typeof choice === "object" && typeof choice.text === "string")
    ) {
      choices = rawQuestion.choices.map((choice) => ({
        text: String(choice.text).trim(),
        isCorrect: Boolean(choice.isCorrect)
      }));
    }

    if (choices.length !== 4 || choices.filter((choice) => choice.isCorrect).length !== 1 || choices.some((choice) => !choice.text)) {
      return null;
    }

    const normalized = {
      id,
      type: "mc",
      prompt,
      topic,
      hint: String(rawQuestion.hint || defaultHintFor({ prompt, topic, type: "mc" })).trim(),
      choices
    };

    return normalized;
  }

  if (rawQuestion.type === "numeric" || rawQuestion.tolerance !== undefined || rawQuestion.numericAnswer !== undefined) {
    const answer = Number(rawQuestion.answer ?? rawQuestion.numericAnswer);
    const tolerance = Math.abs(Number(rawQuestion.tolerance ?? 0));
    if (!Number.isFinite(answer) || !Number.isFinite(tolerance)) return null;

    return {
      id,
      type: "numeric",
      prompt,
      topic,
      hint: String(rawQuestion.hint || defaultHintFor({ prompt, topic, type: "numeric" })).trim(),
      answer,
      tolerance
    };
  }

  const answers = Array.isArray(rawQuestion.answers)
    ? rawQuestion.answers
    : String(rawQuestion.answer || "")
        .split("|")
        .map((value) => value.trim())
        .filter(Boolean);

  if (!answers.length) return null;

  return {
    id,
    type: "fill",
    prompt,
    topic,
    hint: String(rawQuestion.hint || defaultHintFor({ prompt, topic, type: "fill" })).trim(),
    answers
  };
}

function isTeacherContinuationLine(line) {
  return (
    /^Topic\s*:/i.test(line) ||
    /^Hint\s*:/i.test(line) ||
    /^Answer\s*:/i.test(line) ||
    /^Tolerance\s*:/i.test(line) ||
    /^([A-D])\)\s*(.+)$/i.test(line)
  );
}

function splitTeacherBlocks(cleaned) {
  const lines = cleaned.split("\n");
  const blocks = [];
  let current = [];
  let previousWasBlank = false;

  lines.forEach((rawLine) => {
    const line = rawLine.trim();

    if (!line) {
      previousWasBlank = true;
      return;
    }

    if (!current.length) {
      current.push(line);
      previousWasBlank = false;
      return;
    }

    const continuation = isTeacherContinuationLine(line);
    const currentHasContinuation = current.some((item) => isTeacherContinuationLine(item));
    const startsNewQuestion = !continuation && (currentHasContinuation || previousWasBlank);

    if (startsNewQuestion) {
      blocks.push(current.join("\n"));
      current = [line];
    } else {
      current.push(line);
    }

    previousWasBlank = false;
  });

  if (current.length) {
    blocks.push(current.join("\n"));
  }

  return blocks;
}

function parseTeacherInput(rawText) {
  const cleaned = String(rawText || "").replace(/\r\n/g, "\n").trim();
  if (!cleaned) {
    return { questions: [], errors: ["Questions input cannot be empty."] };
  }

  const blocks = splitTeacherBlocks(cleaned).map((block) => block.trim()).filter(Boolean);
  const errors = [];
  const questions = [];

  blocks.forEach((block, blockIndex) => {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    let promptParts = [];
    let hint = "";
    let topic = "";
    let answerLine = "";
    let toleranceLine = "";
    const optionEntries = [];

    lines.forEach((line) => {
      if (/^Topic\s*:/i.test(line)) {
        topic = line.replace(/^Topic\s*:\s*/i, "").trim();
        return;
      }
      if (/^Hint\s*:/i.test(line)) {
        hint = line.replace(/^Hint\s*:\s*/i, "").trim();
        return;
      }
      if (/^Answer\s*:/i.test(line)) {
        answerLine = line.replace(/^Answer\s*:\s*/i, "").trim();
        return;
      }
      if (/^Tolerance\s*:/i.test(line)) {
        toleranceLine = line.replace(/^Tolerance\s*:\s*/i, "").trim();
        return;
      }

      const optionMatch = line.match(/^([A-D])\)\s*(.+)$/i);
      if (optionMatch) {
        optionEntries.push({
          letter: optionMatch[1].toUpperCase(),
          text: optionMatch[2].trim()
        });
        return;
      }

      promptParts.push(line.replace(/^Q\s*\d*\s*:\s*/i, "").trim());
    });

    const prompt = promptParts.join(" ").trim();
    const label = `Question block ${blockIndex + 1}`;

    if (!prompt) {
      errors.push(`${label}: missing the question text.`);
      return;
    }

    if (optionEntries.length > 0) {
      if (answerLine) {
        errors.push(`${label}: use either multiple choice options or Answer:, not both.`);
        return;
      }

      const optionMap = {};
      let correctLetter = "";

      optionEntries.forEach((entry) => {
        if (optionMap[entry.letter]) {
          errors.push(`${label}: duplicate option ${entry.letter}).`);
          return;
        }
        const isCorrect = entry.text.includes("*");
        const cleanText = entry.text.replace(/\*/g, "").trim();
        if (!cleanText) {
          errors.push(`${label}: option ${entry.letter}) cannot be empty.`);
          return;
        }
        if (isCorrect) {
          if (correctLetter) {
            errors.push(`${label}: mark only one correct option with *.`);
            return;
          }
          correctLetter = entry.letter;
        }
        optionMap[entry.letter] = cleanText;
      });

      if (errors.length > 0 && errors[errors.length - 1].startsWith(label)) {
        return;
      }

      if (LETTERS.some((letter) => !(letter in optionMap)) || Object.keys(optionMap).length !== 4) {
        errors.push(`${label}: include exactly four options A) to D).`);
        return;
      }

      if (!correctLetter) {
        errors.push(`${label}: mark the correct option with *.`);
        return;
      }

      const question = normalizeQuestion({
        type: "mc",
        prompt,
        topic,
        hint,
        choices: LETTERS.map((letter) => ({
          text: optionMap[letter],
          isCorrect: letter === correctLetter
        }))
      }, blockIndex);

      if (!question) {
        errors.push(`${label}: could not normalize the multiple choice question.`);
        return;
      }

      questions.push(question);
      return;
    }

    if (!answerLine) {
      errors.push(`${label}: provide Answer: for fill in the blank or numerical questions.`);
      return;
    }

    if (toleranceLine) {
      const numericAnswer = Number(answerLine);
      const tolerance = Number(toleranceLine);
      if (!Number.isFinite(numericAnswer)) {
        errors.push(`${label}: numerical answers must be valid numbers.`);
        return;
      }
      if (!Number.isFinite(tolerance) || tolerance < 0) {
        errors.push(`${label}: tolerance must be a valid positive number or zero.`);
        return;
      }

      const question = normalizeQuestion({
        type: "numeric",
        prompt,
        topic,
        hint,
        answer: numericAnswer,
        tolerance
      }, blockIndex);

      if (!question) {
        errors.push(`${label}: could not normalize the numerical question.`);
        return;
      }

      questions.push(question);
      return;
    }

    const question = normalizeQuestion({
      type: "fill",
      prompt,
      topic,
      hint,
      answers: answerLine.split("|").map((value) => value.trim()).filter(Boolean)
    }, blockIndex);

    if (!question) {
      errors.push(`${label}: could not normalize the fill in the blank question.`);
      return;
    }

    questions.push(question);
  });

  if (!errors.length && questions.length > CONFIG.maxBankSize) {
    errors.push(`The bank supports a maximum of ${CONFIG.maxBankSize} questions.`);
  }

  return { questions, errors };
}

function loadStoredArray(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function loadReviews() {
  const storedReviews = loadStoredArray(STORAGE_KEYS.reviews);
  let shouldPersist = storedReviews.length === 0;
  let nextReviews = storedReviews
    .map((review, index) => normalizeReview(review, index))
    .filter((review) => review && review.id);

  if (!nextReviews.length) {
    const legacyBank = loadStoredArray(STORAGE_KEYS.bank)
      .map((question, index) => normalizeQuestion(question, index))
      .filter(Boolean)
      .slice(0, CONFIG.maxBankSize);

    let legacyOverview;
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.overview);
      legacyOverview = applyLegacyOverviewMigrations(raw ? JSON.parse(raw) : DEFAULT_OVERVIEW);
    } catch (error) {
      legacyOverview = applyLegacyOverviewMigrations(DEFAULT_OVERVIEW);
    }

    nextReviews = [
      normalizeReview({
        id: createId("review"),
        ...legacyOverview,
        questions: legacyBank.length ? legacyBank : buildDefaultQuestions()
      }, 0)
    ];
  }

  state.reviews = nextReviews.map((review, index) => normalizeReview(review, index));

  const storedActiveId = String(localStorage.getItem(STORAGE_KEYS.activeReviewId) || "").trim();
  const activeReview = state.reviews.find((review) => review.id === storedActiveId) || state.reviews[0];
  if (!storedActiveId || !state.reviews.some((review) => review.id === storedActiveId)) {
    shouldPersist = true;
  }
  state.activeReviewId = activeReview ? activeReview.id : "";
  syncStateFromActiveReview();

  if (shouldPersist) {
    saveReviews("reviews-sync", false);
  }
}

function loadAttempts() {
  const nextAttempts = loadStoredArray(STORAGE_KEYS.attempts)
    .filter((attempt) => attempt && typeof attempt === "object");

  const shouldAttachSingleReview = state.reviews.length === 1 && state.reviews[0];
  let changed = false;

  state.attempts = nextAttempts.map((attempt) => {
    if (attempt.reviewId || !shouldAttachSingleReview) return attempt;
    changed = true;
    return {
      ...attempt,
      reviewId: state.reviews[0].id,
      reviewName: state.reviews[0].unitName
    };
  });

  if (changed) {
    saveAttempts();
  }
}

function saveReviews(reason = "manual", broadcast = true) {
  upsertActiveReview();

  localStorage.setItem(STORAGE_KEYS.reviews, JSON.stringify(state.reviews));
  localStorage.setItem(STORAGE_KEYS.activeReviewId, state.activeReviewId);
  localStorage.setItem(STORAGE_KEYS.bank, JSON.stringify(state.bank));
  localStorage.setItem(STORAGE_KEYS.overview, JSON.stringify(state.overview));
  localStorage.setItem(
    STORAGE_KEYS.meta,
    JSON.stringify({
      updatedAt: new Date().toISOString(),
      count: state.bank.length,
      reason,
      reviewId: state.activeReviewId
    })
  );

  if (broadcast) {
    broadcastLiveUpdate("reviews");
  }
}

function saveBank(reason = "manual") {
  saveReviews(reason, true);
}

function saveOverview() {
  saveReviews("overview", true);
}

function saveAttempts() {
  localStorage.setItem(STORAGE_KEYS.attempts, JSON.stringify(state.attempts));
  broadcastLiveUpdate("attempts");
}

function broadcastLiveUpdate(type) {
  if (state.channel) {
    state.channel.postMessage({ type, timestamp: Date.now() });
  }
}

function setLiveNotice(message, timeout = 4200) {
  refs.liveNotice.textContent = message;
  window.clearTimeout(state.noticeTimerId);
  if (timeout > 0) {
    state.noticeTimerId = window.setTimeout(() => {
      refs.liveNotice.textContent = "";
    }, timeout);
  }
}

function setSyncBadgeStale(isStale) {
  refs.syncBadge.classList.toggle("stale", isStale);
  refs.syncBadge.textContent = isStale ? "Review updated" : "Live sync ready";
}

function setupLiveSync() {
  if ("BroadcastChannel" in window) {
    state.channel = new BroadcastChannel(LIVE_CHANNEL);
    state.channel.addEventListener("message", (event) => {
      handleLiveMessage(event.data);
    });
  }

  window.addEventListener("storage", (event) => {
    if (!event.key) return;
    if ([STORAGE_KEYS.reviews, STORAGE_KEYS.activeReviewId, STORAGE_KEYS.attempts].includes(event.key)) {
      handleStorageSync(event.key);
    }
  });
}

function handleLiveMessage(message) {
  if (!message || typeof message !== "object") return;
  if (message.type === "reviews") {
    syncReviewsFromStorage(true);
  }
  if (message.type === "bank") {
    syncBankFromStorage(true);
  }
  if (message.type === "attempts") {
    syncAttemptsFromStorage();
  }
  if (message.type === "overview") {
    syncOverviewFromStorage();
  }
}

function handleStorageSync(key) {
  if (key === STORAGE_KEYS.reviews || key === STORAGE_KEYS.activeReviewId) {
    syncReviewsFromStorage(true);
  }
  if (key === STORAGE_KEYS.bank) {
    syncBankFromStorage(true);
  }
  if (key === STORAGE_KEYS.attempts) {
    syncAttemptsFromStorage();
  }
  if (key === STORAGE_KEYS.overview) {
    syncOverviewFromStorage();
  }
}

function syncReviewsFromStorage(external = false) {
  const beforeCount = state.bank.length;
  const beforeReviewId = state.activeReviewId;
  loadReviews();
  renderHomeView();
  renderTeacherView();

  if (external) {
    if (state.session && !state.session.finished) {
      setSyncBadgeStale(true);
      setLiveNotice("Teacher updated the review. Changes will appear in the next attempt.");
    } else {
      setSyncBadgeStale(false);
      setLiveNotice("Review updated live.");
    }
  } else if (beforeCount !== state.bank.length || beforeReviewId !== state.activeReviewId) {
    setSyncBadgeStale(false);
  }
}

function syncBankFromStorage(external = false) {
  syncReviewsFromStorage(external);
}

function syncAttemptsFromStorage() {
  loadAttempts();
  renderTeacherStats();
}

function syncOverviewFromStorage() {
  syncReviewsFromStorage(true);
}

function showView(viewName) {
  const allViews = [refs.homeView, refs.quizView, refs.resultsView, refs.teacherView];
  allViews.forEach((view) => {
    if (!view) return;
    view.classList.toggle("is-active", view.id === `${viewName}View`);
  });
}

function getAnsweredCount(session = state.session) {
  if (!session) return 0;
  return session.questions.filter((question) => question.status !== "unanswered").length;
}

function getCorrectCount(session = state.session) {
  if (!session) return 0;
  return session.questions.filter((question) => question.status === "correct").length;
}

function getIncorrectCount(session = state.session) {
  if (!session) return 0;
  return session.questions.filter((question) => question.status === "incorrect").length;
}

function getUnansweredCount(session = state.session) {
  if (!session) return 0;
  return session.questions.filter((question) => question.status === "unanswered").length;
}

function formatQuestionType(type) {
  if (type === "mc") return "Multiple choice";
  if (type === "fill") return "Fill in the blank";
  return "Numerical";
}

function prepareSessionQuestion(question) {
  const base = {
    id: question.id,
    type: question.type,
    prompt: question.prompt,
    topic: question.topic,
    hint: question.hint,
    status: "unanswered",
    hintOpened: false,
    feedback: "",
    userAnswer: "",
    selectedChoiceIndex: null,
    draftValue: ""
  };

  if (question.type === "mc") {
    return {
      ...base,
      choices: shuffleArray(question.choices.map((choice) => ({ ...choice })))
    };
  }

  if (question.type === "numeric") {
    return {
      ...base,
      answer: question.answer,
      tolerance: question.tolerance
    };
  }

  return {
    ...base,
    answers: [...question.answers]
  };
}

function buildSession(mode) {
  const shuffled = shuffleArray(state.bank);
  const selectedBank = mode === "exam"
    ? shuffled.slice(0, Math.min(CONFIG.examQuestionCount, shuffled.length))
    : shuffled;

  return {
    id: createId("session"),
    reviewId: state.activeReviewId,
    reviewName: state.overview?.unitName || "ChemQuest Review",
    mode,
    questions: selectedBank.map(prepareSessionQuestion),
    currentIndex: 0,
    timeLeft: mode === "exam" ? CONFIG.examSeconds : null,
    timerId: null,
    hintsUsed: 0,
    startedAt: Date.now(),
    finished: false
  };
}

function startSession(mode) {
  if (!state.bank.length) {
    showView("teacher");
    setLiveNotice("The bank is empty. Add questions in Teacher Mode.");
    return;
  }

  stopTimer();
  state.session = buildSession(mode);
  state.lastSummary = null;
  setSyncBadgeStale(false);
  showView("quiz");
  renderQuizView();
  startTimer();
}

function startTimer() {
  if (!state.session || state.session.mode !== "exam" || state.session.finished) return;
  stopTimer();
  state.session.timerId = window.setInterval(() => {
    if (!state.session) return;
    state.session.timeLeft -= 1;
    if (state.session.timeLeft <= 0) {
      state.session.timeLeft = 0;
      renderQuizHeader();
      finishSession("time");
      return;
    }
    renderQuizHeader();
  }, 1000);
}

function stopTimer() {
  if (state.session && state.session.timerId) {
    window.clearInterval(state.session.timerId);
    state.session.timerId = null;
  }
}

function renderHomeView() {
  const overview = normalizeOverview(state.overview);
  refs.startExamBtn.disabled = state.bank.length === 0;
  refs.startPracticeBtn.disabled = state.bank.length === 0;
  refs.unitNameHome.textContent = overview.unitName;

  if (refs.topicsListHome) {
    refs.topicsListHome.innerHTML = "";
    overview.topics.forEach((topic) => {
      refs.topicsListHome.appendChild(makeEl("span", "topic-badge-home", topic));
    });
  }

  if (refs.instructionsListHome) {
    refs.instructionsListHome.innerHTML = "";
    overview.instructions.forEach((instruction, index) => {
      const card = makeEl("article", "instruction-card");
      const number = makeEl("span", "instruction-number", String(index + 1).padStart(2, "0"));
      const text = makeEl("p", "instruction-text", instruction);
      card.append(number, text);
      refs.instructionsListHome.appendChild(card);
    });
  }
}

function renderQuizHeader() {
  if (!state.session) return;
  const total = state.session.questions.length;
  const answered = getAnsweredCount();
  const currentQuestion = state.session.questions[state.session.currentIndex];
  refs.modeLabel.textContent = state.session.mode === "exam" ? "Exam" : "Practice";
  refs.timerDisplay.textContent = state.session.mode === "exam" ? formatTime(state.session.timeLeft) : "Untimed";
  refs.answeredDisplay.textContent = `${answered} / ${total}`;
  refs.progressFill.style.width = `${total === 0 ? 0 : Math.round((answered / total) * 100)}%`;
  refs.questionCounter.textContent = `Question ${state.session.currentIndex + 1} of ${total}`;
  refs.questionPrompt.textContent = currentQuestion.prompt;
  refs.topicChip.textContent = currentQuestion.topic;
  refs.questionMeta.textContent = `Correct: ${getCorrectCount()} | Incorrect: ${getIncorrectCount()} | Blank: ${getUnansweredCount()} | Hints used: ${state.session.hintsUsed}`;
  refs.nextQuestionBtn.textContent = answered === total ? "View Results" : "Next Question";
}

function renderAnswerArea(question) {
  refs.answerArea.innerHTML = "";

  if (question.type === "mc") {
    question.choices.forEach((choice, index) => {
      const button = makeEl("button", "option-btn");
      button.type = "button";
      if (question.selectedChoiceIndex === index) {
        button.classList.add("selected");
      }
      if (question.status !== "unanswered") {
        button.disabled = true;
        if (choice.isCorrect) {
          button.classList.add("reveal-correct");
        }
        if (question.selectedChoiceIndex === index) {
          button.classList.add(question.status === "correct" ? "correct" : "incorrect");
        }
      }

      const letter = makeEl("span", "option-letter", LETTERS[index]);
      const text = makeEl("span", "option-text", choice.text);
      button.append(letter, text);
      button.addEventListener("click", () => {
        if (!state.session || question.status !== "unanswered") return;
        question.selectedChoiceIndex = index;
        renderCurrentQuestion();
      });
      refs.answerArea.appendChild(button);
    });
    return;
  }

  const input = makeEl("input", "answer-input");
  input.type = "text";
  input.value = question.status === "unanswered" ? question.draftValue : question.userAnswer;
  input.placeholder = question.type === "numeric" ? "Type a number" : "Type your answer";
  if (question.type === "numeric") {
    input.inputMode = "decimal";
  }
  if (question.status !== "unanswered") {
    input.disabled = true;
  }
  input.addEventListener("input", (event) => {
    question.draftValue = event.target.value;
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitCurrentAnswer();
    }
  });
  refs.answerArea.appendChild(input);
}

function renderFeedback(question) {
  refs.hintBox.classList.toggle("hidden", !question.hintOpened);
  refs.hintBox.textContent = question.hintOpened ? `Hint: ${question.hint}` : "";

  refs.feedbackBox.className = "feedback-box";
  if (question.feedback) {
    refs.feedbackBox.textContent = question.feedback;
    if (question.status === "correct") refs.feedbackBox.classList.add("correct");
    if (question.status === "incorrect") refs.feedbackBox.classList.add("incorrect");
  } else {
    refs.feedbackBox.textContent = "Choose or type your answer, then click Submit Answer.";
  }
}

function renderQuestionTracker() {
  if (!state.session) return;
  refs.questionTracker.innerHTML = "";
  state.session.questions.forEach((question, index) => {
    const button = makeEl("button", `tracker-btn ${question.status}`);
    button.type = "button";
    button.textContent = String(index + 1);
    if (index === state.session.currentIndex) {
      button.classList.add("current");
    }
    button.addEventListener("click", () => {
      state.session.currentIndex = index;
      renderCurrentQuestion();
    });
    refs.questionTracker.appendChild(button);
  });
}

function renderCurrentQuestion() {
  if (!state.session) return;
  const question = state.session.questions[state.session.currentIndex];
  renderQuizHeader();
  renderAnswerArea(question);
  renderFeedback(question);
  renderQuestionTracker();
  refs.submitAnswerBtn.disabled = question.status !== "unanswered";
}

function renderQuizView() {
  renderCurrentQuestion();
}

function currentQuestion() {
  if (!state.session) return null;
  return state.session.questions[state.session.currentIndex] || null;
}

function mcAnswerLabel(question) {
  const correctIndex = question.choices.findIndex((choice) => choice.isCorrect);
  if (correctIndex < 0) return "";
  return `${LETTERS[correctIndex]}) ${question.choices[correctIndex].text}`;
}

function fillAnswerLabel(question) {
  return question.answers.join(" / ");
}

function numericAnswerLabel(question) {
  return `${question.answer} +/- ${question.tolerance}`;
}

function evaluateMcQuestion(question) {
  if (question.selectedChoiceIndex === null) {
    return { error: "Choose an option before submitting." };
  }
  const selected = question.choices[question.selectedChoiceIndex];
  if (selected.isCorrect) {
    return {
      correct: true,
      userAnswer: selected.text,
      message: "Correct! Well done."
    };
  }
  return {
    correct: false,
    userAnswer: selected.text,
    message: `Incorrect. Correct answer: ${mcAnswerLabel(question)}`
  };
}

function evaluateFillQuestion(question) {
  const rawValue = question.draftValue.trim();
  if (!rawValue) {
    return { error: "Type an answer before submitting." };
  }

  const normalized = normalizeFreeText(rawValue);
  const isCorrect = question.answers.some((answer) => normalizeFreeText(answer) === normalized);

  if (isCorrect) {
    return {
      correct: true,
      userAnswer: rawValue,
      message: "Correct! Well done."
    };
  }

  return {
    correct: false,
    userAnswer: rawValue,
    message: `Incorrect. Correct answer: ${fillAnswerLabel(question)}`
  };
}

function evaluateNumericQuestion(question) {
  const rawValue = question.draftValue.trim();
  if (!rawValue) {
    return { error: "Type a number before submitting." };
  }

  const numericValue = extractFirstNumber(rawValue);
  if (!Number.isFinite(numericValue)) {
    return { error: "Enter a valid numerical answer." };
  }

  const isCorrect = Math.abs(numericValue - question.answer) <= question.tolerance;

  if (isCorrect) {
    return {
      correct: true,
      userAnswer: rawValue,
      message: "Correct! Well done."
    };
  }

  return {
    correct: false,
    userAnswer: rawValue,
    message: `Incorrect. Acceptable answer: ${numericAnswerLabel(question)}`
  };
}

function submitCurrentAnswer() {
  const question = currentQuestion();
  if (!question || question.status !== "unanswered") return;

  let result;
  if (question.type === "mc") {
    result = evaluateMcQuestion(question);
  } else if (question.type === "numeric") {
    result = evaluateNumericQuestion(question);
  } else {
    result = evaluateFillQuestion(question);
  }

  if (result.error) {
    refs.feedbackBox.className = "feedback-box";
    refs.feedbackBox.textContent = result.error;
    return;
  }

  question.status = result.correct ? "correct" : "incorrect";
  question.userAnswer = result.userAnswer;
  question.feedback = result.message;
  renderCurrentQuestion();
}

function revealHint() {
  const question = currentQuestion();
  if (!question) return;
  if (!question.hintOpened) {
    question.hintOpened = true;
    if (state.session) state.session.hintsUsed += 1;
  }
  renderCurrentQuestion();
}

function goToNextQuestion() {
  if (!state.session) return;
  if (getAnsweredCount() === state.session.questions.length) {
    finishSession("complete");
    return;
  }
  state.session.currentIndex = (state.session.currentIndex + 1) % state.session.questions.length;
  renderCurrentQuestion();
}

function topicSummaryFromQuestions(questions) {
  const topics = new Map();
  questions.forEach((question) => {
    const key = question.topic;
    if (!topics.has(key)) {
      topics.set(key, { topic: key, total: 0, correct: 0, missed: 0 });
    }
    const entry = topics.get(key);
    entry.total += 1;
    if (question.status === "correct") {
      entry.correct += 1;
    } else {
      entry.missed += 1;
    }
  });

  return Array.from(topics.values())
    .map((entry) => ({
      ...entry,
      accuracy: entry.total === 0 ? 0 : entry.correct / entry.total
    }))
    .sort((left, right) => right.accuracy - left.accuracy);
}

function buildSummary(reason) {
  const session = state.session;
  const total = session.questions.length;
  const correct = getCorrectCount(session);
  const incorrect = getIncorrectCount(session);
  const unanswered = getUnansweredCount(session);
  const percent = total === 0 ? 0 : Math.round((correct / total) * 100);
  const topicSummary = topicSummaryFromQuestions(session.questions);
  const strengths = topicSummary.filter((topic) => topic.accuracy >= 0.7);
  const review = topicSummary.filter((topic) => topic.missed > 0).sort((left, right) => left.accuracy - right.accuracy);
  const elapsedSeconds = session.mode === "exam" ? CONFIG.examSeconds - session.timeLeft : Math.round((Date.now() - session.startedAt) / 1000);

  return {
    reviewId: session.reviewId,
    reviewName: session.reviewName,
    mode: session.mode,
    reason,
    total,
    correct,
    incorrect,
    unanswered,
    percent,
    hintsUsed: session.hintsUsed,
    elapsedSeconds,
    topicSummary,
    strengths,
    review,
    questions: session.questions.map((question) => ({
      id: question.id,
      prompt: question.prompt,
      topic: question.topic,
      status: question.status
    }))
  };
}

function saveAttemptRecord(summary) {
  state.attempts.unshift({
    id: createId("attempt"),
    reviewId: summary.reviewId,
    reviewName: summary.reviewName,
    finishedAt: new Date().toISOString(),
    mode: summary.mode,
    total: summary.total,
    correct: summary.correct,
    incorrect: summary.incorrect,
    unanswered: summary.unanswered,
    percent: summary.percent,
    hintsUsed: summary.hintsUsed,
    elapsedSeconds: summary.elapsedSeconds,
    topicSummary: summary.topicSummary,
    missedQuestions: summary.questions.filter((question) => question.status !== "correct")
  });

  state.attempts = state.attempts.slice(0, 100);
  saveAttempts();
}

function resultMessage(summary) {
  if (summary.reason === "time") {
    return "Time is up. Review the missed topics and repeat the exam with a fresh random set.";
  }
  if (summary.percent >= 85) {
    return "Strong performance. Keep reviewing the weaker topics, but the overall understanding looks solid.";
  }
  if (summary.percent >= 65) {
    return "Good progress. Focus on the red topics before the exam.";
  }
  return "This review found several weak areas. Use the topic summary and try another round after studying.";
}

function renderResults(summary) {
  refs.resultsTitle.textContent = summary.reason === "time" ? "Time is up" : "Session complete";
  refs.scorePercent.textContent = `${summary.percent}%`;
  refs.scoreLine.textContent = `Score: ${summary.correct} / ${summary.total}`;
  refs.resultsMessage.textContent = resultMessage(summary);
  refs.retryModeBtn.textContent = summary.mode === "exam" ? "Retry Exam Mode" : "Retry Practice Mode";

  refs.resultsStats.innerHTML = "";
  [
    ["Correct answers", String(summary.correct)],
    ["Incorrect answers", String(summary.incorrect)],
    ["Blank answers", String(summary.unanswered)],
    ["Hints used", String(summary.hintsUsed)],
    ["Time used", summary.mode === "exam" ? formatTime(summary.elapsedSeconds) : `${summary.elapsedSeconds}s`]
  ].forEach(([label, value]) => {
    const row = makeEl("div", "results-stat");
    row.append(makeEl("span", "", label), makeEl("strong", "", value));
    refs.resultsStats.appendChild(row);
  });

  renderResultsList(refs.strengthList, summary.strengths.length ? summary.strengths.slice(0, 4) : [], false);
  renderResultsList(refs.reviewList, summary.review.length ? summary.review.slice(0, 4) : [], true);
}

function renderResultsList(listEl, items, reviewMode) {
  listEl.innerHTML = "";

  if (!items.length) {
    const item = makeEl("li", reviewMode ? "review-item" : "", reviewMode ? "No major weak topic detected in this session." : "Keep building confidence across the full syllabus.");
    listEl.appendChild(item);
    return;
  }

  items.forEach((itemData) => {
    const item = makeEl("li", reviewMode ? "review-item" : "");
    item.textContent = `${itemData.topic} - ${itemData.correct}/${itemData.total} correct`;
    listEl.appendChild(item);
  });
}

function finishSession(reason = "manual") {
  if (!state.session || state.session.finished) return;
  state.session.finished = true;
  stopTimer();
  setSyncBadgeStale(false);

  const summary = buildSummary(reason);
  state.lastSummary = summary;
  saveAttemptRecord(summary);
  renderResults(summary);
  renderTeacherStats();
  showView("results");
}

function leaveActiveSession(targetView) {
  if (!state.session || state.session.finished) {
    showView(targetView);
    return true;
  }

  const confirmed = window.confirm("Leave the current review? Your current attempt will be discarded.");
  if (!confirmed) return false;

  stopTimer();
  state.session = null;
  setSyncBadgeStale(false);
  showView(targetView);
  return true;
}

function navigateHome() {
  if (refs.quizView.classList.contains("is-active")) {
    return leaveActiveSession("home");
  }

  stopTimer();
  state.session = null;
  setSyncBadgeStale(false);
  showView("home");
  return true;
}

function renderBankSummary() {
  refs.bankSummary.innerHTML = "";
  const review = currentReview();

  const counts = {
    total: state.bank.length,
    mc: state.bank.filter((question) => question.type === "mc").length,
    fill: state.bank.filter((question) => question.type === "fill").length,
    numeric: state.bank.filter((question) => question.type === "numeric").length
  };

  const summaryGrid = makeEl("div", "summary-grid");
  [
    ["Total questions", counts.total],
    ["Multiple choice", counts.mc],
    ["Fill in the blank", counts.fill],
    ["Numerical", counts.numeric]
  ].forEach(([label, value]) => {
    const tile = makeEl("div", "summary-tile");
    tile.append(makeEl("span", "", label), makeEl("strong", "", String(value)));
    summaryGrid.appendChild(tile);
  });
  refs.bankSummary.appendChild(summaryGrid);

  const note = makeEl(
    "div",
    "teacher-note",
    `${review ? review.unitName : "This review"} uses ${Math.min(CONFIG.examQuestionCount, state.bank.length)} random questions in Exam Mode. Limit: ${CONFIG.maxBankSize}.`
  );
  refs.bankSummary.appendChild(note);
}

function renderBankPreview() {
  refs.bankPreview.innerHTML = "";

  if (!state.bank.length) {
    refs.bankPreview.appendChild(makeEl("div", "bank-item", "No questions saved for this review yet."));
    return;
  }

  state.bank.slice(0, 16).forEach((question, index) => {
    const card = makeEl("article", "bank-item");
    const title = makeEl("h4", "", `${index + 1}. ${question.prompt}`);
    const meta = makeEl("p", "", `${formatQuestionType(question.type)} | ${question.topic}`);
    const tags = makeEl("div", "inline-tags");
    tags.appendChild(makeEl("span", "inline-tag", question.topic));
    tags.appendChild(makeEl("span", "inline-tag", formatQuestionType(question.type)));
    card.append(title, meta, tags);
    refs.bankPreview.appendChild(card);
  });

  if (state.bank.length > 16) {
    refs.bankPreview.appendChild(makeEl("div", "teacher-note", `Showing 16 of ${state.bank.length} questions.`));
  }
}

function activeAttempts() {
  return state.attempts.filter((attempt) => {
    if (attempt.reviewId) {
      return attempt.reviewId === state.activeReviewId;
    }
    return state.reviews.length === 1;
  });
}

function aggregateMissedQuestions(attempts) {
  const map = new Map();
  attempts.forEach((attempt) => {
    (attempt.missedQuestions || []).forEach((question) => {
      if (!map.has(question.id)) {
        map.set(question.id, {
          id: question.id,
          prompt: question.prompt,
          topic: question.topic,
          misses: 0
        });
      }
      map.get(question.id).misses += 1;
    });
  });
  return Array.from(map.values()).sort((left, right) => right.misses - left.misses);
}

function aggregateTopicDifficulty(attempts) {
  const topicMap = new Map();
  attempts.forEach((attempt) => {
    (attempt.topicSummary || []).forEach((topic) => {
      if (!topicMap.has(topic.topic)) {
        topicMap.set(topic.topic, { topic: topic.topic, total: 0, correct: 0 });
      }
      const entry = topicMap.get(topic.topic);
      entry.total += topic.total;
      entry.correct += topic.correct;
    });
  });

  return Array.from(topicMap.values())
    .map((topic) => ({
      ...topic,
      accuracy: topic.total === 0 ? 0 : topic.correct / topic.total
    }))
    .sort((left, right) => left.accuracy - right.accuracy);
}

function renderTeacherStats() {
  refs.teacherStats.innerHTML = "";
  const reviewAttempts = activeAttempts();

  if (!reviewAttempts.length) {
    refs.teacherStats.appendChild(makeEl("div", "teacher-note", "No attempts yet for this review. Student results will appear here."));
    return;
  }

  const totalAttempts = reviewAttempts.length;
  const averageScore = Math.round(reviewAttempts.reduce((sum, attempt) => sum + attempt.percent, 0) / totalAttempts);
  const averageHints = (reviewAttempts.reduce((sum, attempt) => sum + (attempt.hintsUsed || 0), 0) / totalAttempts).toFixed(1);

  const statsGrid = makeEl("div", "stats-grid");
  [
    ["Attempts", totalAttempts],
    ["Average score", `${averageScore}%`],
    ["Average hints", averageHints]
  ].forEach(([label, value]) => {
    const tile = makeEl("div", "stats-tile");
    tile.append(makeEl("span", "", label), makeEl("strong", "", String(value)));
    statsGrid.appendChild(tile);
  });
  refs.teacherStats.appendChild(statsGrid);

  const mostMissed = aggregateMissedQuestions(reviewAttempts).slice(0, 5);
  const topicDifficulty = aggregateTopicDifficulty(reviewAttempts).slice(0, 5);

  refs.teacherStats.appendChild(buildStatsList("Most missed questions", mostMissed, (item) => `${item.prompt} (${item.misses} misses)`));
  refs.teacherStats.appendChild(buildStatsList("Topics with difficulty", topicDifficulty, (item) => `${item.topic} (${Math.round(item.accuracy * 100)}% correct)`));
}

function buildStatsList(title, items, formatter) {
  const wrapper = makeEl("section", "stats-list");
  wrapper.appendChild(makeEl("h4", "", title));

  if (!items.length) {
    wrapper.appendChild(makeEl("div", "stats-list-item", "No data yet."));
    return wrapper;
  }

  items.forEach((item) => {
    const card = makeEl("article", "stats-list-item");
    card.appendChild(makeEl("p", "", formatter(item)));
    wrapper.appendChild(card);
  });

  return wrapper;
}

function renderReviewSelect() {
  refs.reviewSelect.innerHTML = "";
  state.reviews.forEach((review) => {
    const option = document.createElement("option");
    option.value = review.id;
    option.textContent = `${review.unitName} (${review.questions.length})`;
    if (review.id === state.activeReviewId) {
      option.selected = true;
    }
    refs.reviewSelect.appendChild(option);
  });
}

function renderTeacherView() {
  renderReviewSelect();
  refs.deleteReviewBtn.disabled = state.reviews.length <= 1;
  renderTeacherOverviewInputs();
  renderBankSummary();
  renderBankPreview();
  renderTeacherStats();
}

function renderTeacherOverviewInputs() {
  const overview = normalizeOverview(state.overview);
  refs.unitNameInput.value = overview.unitName;
  refs.unitTopicsInput.value = overview.topics.join("\n");
  refs.unitInstructionsInput.value = overview.instructions.join("\n");
}

function showTeacherErrors(messages) {
  if (!messages.length) {
    refs.teacherErrors.classList.remove("show");
    refs.teacherErrors.innerHTML = "";
    return;
  }

  refs.teacherErrors.classList.add("show");
  refs.teacherErrors.innerHTML = "";
  messages.forEach((message) => {
    refs.teacherErrors.appendChild(makeEl("div", "", message));
  });
}

function createReview() {
  const explicitName = refs.newReviewNameInput.value.trim();
  const fallbackName = `Review ${state.reviews.length + 1}`;
  const reviewName = explicitName || fallbackName;

  const review = normalizeReview({
    id: createId("review"),
    unitName: reviewName,
    subtitle: DEFAULT_OVERVIEW.subtitle,
    topics: DEFAULT_OVERVIEW.topics,
    instructions: DEFAULT_OVERVIEW.instructions,
    questions: []
  }, state.reviews.length);

  state.reviews.push(review);
  state.activeReviewId = review.id;
  syncStateFromActiveReview();
  saveReviews("create-review", true);
  refs.newReviewNameInput.value = "";
  refs.teacherInput.value = "";
  showTeacherErrors([]);
  renderHomeView();
  renderTeacherView();
  setSyncBadgeStale(false);
  setLiveNotice(`Review created: ${review.unitName}`);
}

function changeActiveReview(reviewId) {
  if (!reviewId || reviewId === state.activeReviewId) return;
  const nextReview = state.reviews.find((review) => review.id === reviewId);
  if (!nextReview) return;

  state.activeReviewId = reviewId;
  syncStateFromActiveReview();
  refs.teacherInput.value = "";
  showTeacherErrors([]);
  saveReviews("switch-review", true);
  renderHomeView();
  renderTeacherView();
  setSyncBadgeStale(false);
  setLiveNotice(`Current review: ${nextReview.unitName}`);
}

function deleteCurrentReview() {
  const review = currentReview();
  if (!review) return;
  if (state.reviews.length === 1) {
    showTeacherErrors(["Create another review before deleting this one."]);
    return;
  }

  const confirmed = window.confirm(`Delete "${review.unitName}" and all of its questions?`);
  if (!confirmed) return;

  state.reviews = state.reviews.filter((item) => item.id !== review.id);
  state.attempts = state.attempts.filter((attempt) => attempt.reviewId !== review.id);
  state.activeReviewId = state.reviews[0]?.id || "";
  syncStateFromActiveReview();
  refs.teacherInput.value = "";
  showTeacherErrors([]);
  saveReviews("delete-review", true);
  saveAttempts();
  renderHomeView();
  renderTeacherView();
  setSyncBadgeStale(false);
  setLiveNotice(`Review deleted: ${review.unitName}`);
}

function handleTeacherUpload() {
  const { questions, errors } = parseTeacherInput(refs.teacherInput.value);
  if (errors.length) {
    showTeacherErrors(errors);
    return;
  }

  state.bank = questions.map((question, index) => ({
    ...question,
    id: question.id || `${slugify(question.topic)}-${slugify(question.prompt)}-${index + 1}`
  }));

  saveBank("save-questions");
  renderHomeView();
  renderTeacherView();
  showTeacherErrors([]);
  refs.teacherInput.value = "";
  setSyncBadgeStale(false);
  setLiveNotice(`${questions.length} question${questions.length === 1 ? "" : "s"} saved to this review.`);
}

function clearAllQuestions() {
  if (!state.bank.length) {
    showTeacherErrors(["This review does not have any saved questions yet."]);
    return;
  }

  const confirmed = window.confirm("Delete all questions from this review?");
  if (!confirmed) return;

  state.bank = [];
  saveBank("clear-questions");
  refs.teacherInput.value = "";
  showTeacherErrors([]);
  renderHomeView();
  renderTeacherView();
  setSyncBadgeStale(false);
  setLiveNotice("All questions deleted from this review.");
}

function saveReviewFromInputs() {
  const unitName = refs.unitNameInput.value.trim();
  const topics = parseLineList(refs.unitTopicsInput.value);
  const instructions = parseLineList(refs.unitInstructionsInput.value);

  state.overview = normalizeOverview({
    unitName,
    subtitle: state.overview?.subtitle || DEFAULT_OVERVIEW.subtitle,
    topics,
    instructions
  });

  saveOverview();
  renderHomeView();
  showTeacherErrors([]);
  renderTeacherOverviewInputs();
  renderTeacherView();
  setLiveNotice("Review details saved.");
}

function exportBank() {
  const review = buildReviewFromCurrentState();
  const safeName = slugify(review.unitName);
  const blob = new Blob([JSON.stringify(review, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeName || "chemquest-review"}-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function restoreSampleBank() {
  const confirmed = window.confirm("Replace the questions in this review with the built-in sample bank?");
  if (!confirmed) return;
  state.bank = buildDefaultQuestions();
  saveBank("sample-questions");
  renderHomeView();
  renderTeacherView();
  showTeacherErrors([]);
  setSyncBadgeStale(false);
  setLiveNotice("Sample questions loaded into this review.");
}

function bindEvents() {
  refs.startExamBtn.addEventListener("click", () => startSession("exam"));
  refs.startPracticeBtn.addEventListener("click", () => startSession("practice"));
  refs.homeHeaderBtn.addEventListener("click", navigateHome);

  refs.teacherModeBtn.addEventListener("click", () => {
    if (refs.quizView.classList.contains("is-active")) {
      if (!leaveActiveSession("teacher")) return;
    } else {
      showView("teacher");
    }
    renderTeacherView();
  });

  refs.backToStudentBtn.addEventListener("click", () => {
    navigateHome();
  });

  refs.submitAnswerBtn.addEventListener("click", submitCurrentAnswer);
  refs.hintBtn.addEventListener("click", revealHint);
  refs.nextQuestionBtn.addEventListener("click", goToNextQuestion);
  refs.finishReviewBtn.addEventListener("click", () => {
    if (!state.session) return;
    const blanks = getUnansweredCount();
    if (blanks > 0) {
      const confirmed = window.confirm(`Finish now with ${blanks} unanswered question${blanks === 1 ? "" : "s"}?`);
      if (!confirmed) return;
    }
    finishSession("manual");
  });

  refs.retryModeBtn.addEventListener("click", () => {
    if (!state.lastSummary) return;
    startSession(state.lastSummary.mode);
  });

  refs.homeBtn.addEventListener("click", () => {
    navigateHome();
  });

  refs.reviewSelect.addEventListener("change", (event) => {
    changeActiveReview(event.target.value);
  });
  refs.createReviewBtn.addEventListener("click", createReview);
  refs.deleteReviewBtn.addEventListener("click", deleteCurrentReview);
  refs.uploadQuestionsBtn.addEventListener("click", handleTeacherUpload);
  refs.saveReviewBtn.addEventListener("click", saveReviewFromInputs);
  refs.clearTeacherInputBtn.addEventListener("click", () => {
    refs.teacherInput.value = "";
    showTeacherErrors([]);
  });
  refs.clearAllQuestionsBtn.addEventListener("click", clearAllQuestions);
  refs.exportBankBtn.addEventListener("click", exportBank);
  refs.restoreSeedBtn.addEventListener("click", restoreSampleBank);
}

function init() {
  loadReviews();
  loadAttempts();
  setupLiveSync();
  bindEvents();
  renderHomeView();
  renderTeacherView();
  showView("home");
}

init();
