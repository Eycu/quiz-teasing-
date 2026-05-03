// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURATION — REMPLACE LES LIENS DRIVE ICI
// ─────────────────────────────────────────────────────────────────────────────
const PROFILES = {
  F: {
    name: 'Le Fantôme',
    tagline: "Tu es là, mais on ne te voit pas venir.",
    diag: "Ton blocage central est la peur du rejet. Tu attends le moment parfait qui n'arrive jamais. Tu observes les opportunités disparaître parce qu'agir te semble risqué. Ton programme va t'apprendre à déclencher l'action avant que la peur ne parle.",
    link: 'https://drive.google.com/drive/folders/1GO4KYsYqJ2AiAjoWggKzwNUiu3TlA9N3'
  },
  S: {
    name: 'Le Serviteur',
    tagline: "Tu donnes tout. Elle prend tout. Et reste indifférente.",
    diag: "Tu confonds valeur et utilité. Tu penses qu'en étant disponible, attentionné et généreux tu vas créer de l'attraction. Mais l'attraction ne se mérite pas — elle se génère. Ton programme va te montrer comment créer de la tension là où tu crées du confort.",
    link: 'https://drive.google.com/drive/folders/1FCfh2C_n4ZSVuj7nCCmvvsOJLM2yfsPB'
  },
  T: {
    name: 'Le Transparent',
    tagline: "Tu passes. Tu ne marques pas.",
    diag: "Tu n'es pas rejeté — tu es oublié, ce qui est plus difficile à corriger. Tu manques de présence distincte. Tu parles, tu souris, tu existes. Mais tu ne laisses pas de trace. Ton programme va t'apprendre à occuper l'espace avec intention.",
    link: 'https://drive.google.com/drive/folders/1RyUx4XXraDRI41DxmNhvnb0phVqc6qcI'
  },
  R: {
    name: 'Le Rigide',
    tagline: "Trop sérieux pour jouer. Trop cadré pour séduire.",
    diag: "Tu as du cadre, tu as de la stabilité. Mais tu n'as pas de légèreté. La séduction demande du jeu, de l'imprévisibilité, une dose de chaos maîtrisé. Tu ne sais pas taquiner sans te sentir immature. Ton programme va t'apprendre à desserrer sans perdre ta stature.",
    link: 'https://drive.google.com/drive/folders/1aiBFKOiflKx8nc0XisOxzGtmlJf820Ae'
  },
  B: {
    name: 'Le Brûleur',
    tagline: "Tu attires vite. Tu fais fuir plus vite encore.",
    diag: "Tu as de l'énergie, de l'audace, de l'intensité. Mais tu grilles les étapes. Tu confonds vitesse et puissance. Les femmes ont besoin de temps pour désirer — pas de quelqu'un qui arrive en courant. Ton programme va t'apprendre la lenteur stratégique.",
    link: 'https://drive.google.com/drive/folders/1JSm1FVP26mYgNqoO63YpgrIPMRHHkCl5'
  },
  C: {
    name: 'Le Calculateur',
    tagline: "Tu analyses tout. Tu ressens rien. Elle part.",
    diag: "Tu es dans ta tête en permanence. Tu cherches la bonne formule, le bon moment, la bonne réponse. Pendant ce temps, l'instant passe. La séduction est instinctive — elle meurt sous la sur-analyse. Ton programme va te reconnecter à l'action spontanée.",
    link: 'https://drive.google.com/drive/folders/11vmKmWn8WBMyr_RAplRRXz_TOVu0III3'
  }
};

// ─────────────────────────────────────────────────────────────────────────────
// QUESTIONS
// ─────────────────────────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    bloc: "Bloc 1 — Initiation & Présence",
    text: "Une fille que tu trouves attirante entre dans la pièce. Qu'est-ce qui se passe en toi ?",
    options: [
      { text: "Je la remarque mais je reste dans mon coin, j'attends de voir", profile: 'F' },
      { text: "Je pense immédiatement à comment l'aider ou lui être utile", profile: 'S' },
      { text: "Je l'observe discrètement sans vraiment savoir quoi faire", profile: 'T' },
      { text: "J'analyse la situation : est-ce le bon moment pour l'approcher ?", profile: 'C' }
    ]
  },
  {
    bloc: "Bloc 1 — Initiation & Présence",
    text: "Tu as l'occasion de l'aborder. Comment tu te lances ?",
    options: [
      { text: "Je ne me lance pas, j'attends qu'une occasion parfaite se présente", profile: 'F' },
      { text: "Je trouve un prétexte utile : l'aider, lui donner une info", profile: 'S' },
      { text: "Je dis bonjour de façon neutre, sans trop d'intention", profile: 'T' },
      { text: "Je me prépare mentalement, je répète ce que je vais dire", profile: 'C' }
    ]
  },
  {
    bloc: "Bloc 1 — Initiation & Présence",
    text: "En conversation, comment les gens te perçoivent généralement ?",
    options: [
      { text: "Discret, réservé, difficile à cerner", profile: 'F' },
      { text: "Gentil, attentionné, toujours disponible", profile: 'S' },
      { text: "Sympa mais pas mémorable", profile: 'T' },
      { text: "Sérieux, posé, réfléchi", profile: 'R' }
    ]
  },
  {
    bloc: "Bloc 1 — Initiation & Présence",
    text: "Tu viens de rencontrer une fille intéressante. Après la conversation, elle repart. Tu penses quoi ?",
    options: [
      { text: "\"J'aurais dû dire quelque chose, c'était ma chance\"", profile: 'F' },
      { text: "\"J'espère qu'elle m'a vu comme quelqu'un de bien\"", profile: 'S' },
      { text: "\"Bien, mais je ne sais pas si j'ai marqué les esprits\"", profile: 'T' },
      { text: "\"J'ai peut-être été trop direct trop vite\"", profile: 'B' }
    ]
  },
  {
    bloc: "Bloc 2 — Comportement avec les femmes",
    text: "Une fille te plaît vraiment. Comment tu te comportes avec elle ?",
    options: [
      { text: "Je deviens plus silencieux et réservé qu'avec les autres", profile: 'F' },
      { text: "Je fais tout pour lui plaire : compliments, attentions, services", profile: 'S' },
      { text: "Je me comporte normalement, peut-être trop normalement", profile: 'T' },
      { text: "Je lui dis clairement ce que je ressens très rapidement", profile: 'B' }
    ]
  },
  {
    bloc: "Bloc 2 — Comportement avec les femmes",
    text: "Elle te fait un compliment inattendu. Ta réaction ?",
    options: [
      { text: "Je rougis, je minimise, je change de sujet", profile: 'F' },
      { text: "Je la remercie chaleureusement et lui en fais un en retour", profile: 'S' },
      { text: "Je dis merci poliment, sans vraiment rebondir", profile: 'T' },
      { text: "Je réponds avec une pique légère ou je retourne le compliment", profile: 'C' }
    ]
  },
  {
    bloc: "Bloc 2 — Comportement avec les femmes",
    text: "Elle met du temps à répondre à tes messages. Tu fais quoi ?",
    options: [
      { text: "Je n'envoie rien d'autre, j'attends indéfiniment", profile: 'F' },
      { text: "Je relance avec un message doux pour m'assurer que ça va", profile: 'S' },
      { text: "J'attends un peu puis j'envoie un message neutre", profile: 'T' },
      { text: "J'envoie plusieurs messages pour maintenir la connexion", profile: 'B' }
    ]
  },
  {
    bloc: "Bloc 2 — Comportement avec les femmes",
    text: "Elle te donne une réponse froide ou sèche. Comment tu interprètes ça ?",
    options: [
      { text: "Je pense qu'elle me déplaît et je me retire", profile: 'F' },
      { text: "Je cherche ce que j'ai pu faire de mal pour me rattraper", profile: 'S' },
      { text: "Je ne sais pas quoi en penser, je reste passif", profile: 'T' },
      { text: "Je décortique chaque mot de son message pour trouver un sens caché", profile: 'C' }
    ]
  },
  {
    bloc: "Bloc 3 — Tension & Humour",
    text: "Tu taquines une fille et elle fait semblant d'être vexée. Ta réaction ?",
    options: [
      { text: "Je m'excuse immédiatement, j'ai peur de l'avoir blessée", profile: 'S' },
      { text: "Je me tais, je ne sais pas si c'était une bonne idée", profile: 'F' },
      { text: "Je souris et je maintiens ma position calmement", profile: 'R' },
      { text: "Je surenchéris encore plus pour voir jusqu'où ça va", profile: 'B' }
    ]
  },
  {
    bloc: "Bloc 3 — Tension & Humour",
    text: "Dans une conversation avec une fille, tu fais rarement des blagues ou des piques parce que…",
    options: [
      { text: "J'ai peur que ça parte mal et qu'elle me rejette", profile: 'F' },
      { text: "Je veux qu'elle me voie comme quelqu'un de sérieux et mature", profile: 'R' },
      { text: "Je ne sais jamais comment introduire l'humour naturellement", profile: 'T' },
      { text: "Je préfère calculer l'effet avant de dire quoi que ce soit", profile: 'C' }
    ]
  },
  {
    bloc: "Bloc 3 — Tension & Humour",
    text: "Comment tu crées de la complicité avec une fille qui t'intéresse ?",
    options: [
      { text: "Je partage des choses sincères sur moi pour créer du lien", profile: 'S' },
      { text: "J'essaie de trouver des points communs et d'en parler", profile: 'T' },
      { text: "Je la taquine doucement et j'observe comment elle réagit", profile: 'B' },
      { text: "J'attends que la complicité vienne naturellement d'elle-même", profile: 'F' }
    ]
  },
  {
    bloc: "Bloc 4 — Signaux & Réciprocité",
    text: "Une fille te regarde en souriant depuis l'autre côté de la pièce. Tu fais quoi ?",
    options: [
      { text: "Je baisse les yeux ou je regarde ailleurs", profile: 'F' },
      { text: "Je lui souris poliment mais je n'ose pas avancer", profile: 'S' },
      { text: "Je lui souris et j'attends de voir si elle fait le prochain pas", profile: 'T' },
      { text: "J'analyse : souriait-elle vraiment à moi ou à quelqu'un derrière ?", profile: 'C' }
    ]
  },
  {
    bloc: "Bloc 4 — Signaux & Réciprocité",
    text: "Une fille que tu vois régulièrement te fait des signes clairs d'intérêt. Tu…",
    options: [
      { text: "J'attends encore, je veux être sûr à 100% avant d'agir", profile: 'F' },
      { text: "Je deviens encore plus attentionné et disponible pour elle", profile: 'S' },
      { text: "Je continue comme avant, sans vraiment changer de registre", profile: 'T' },
      { text: "Je lui dis directement ce que je veux sans passer par le jeu", profile: 'B' }
    ]
  },
  {
    bloc: "Bloc 5 — Mindset & Confiance",
    text: "Quand une fille ne répond pas à ton intérêt, comment tu le vis ?",
    options: [
      { text: "Je me remets en question pendant longtemps", profile: 'F' },
      { text: "Je me demande ce que j'aurais pu faire de mieux pour elle", profile: 'S' },
      { text: "Ça me dérange mais je passe à autre chose assez vite", profile: 'R' },
      { text: "J'analyse point par point ce qui a pu clocher", profile: 'C' }
    ]
  },
  {
    bloc: "Bloc 5 — Mindset & Confiance",
    text: "Complète cette phrase honnêtement : \"Dans la séduction, mon plus grand frein c'est…\"",
    options: [
      { text: "La peur du rejet et du jugement", profile: 'F' },
      { text: "Le fait de trop vouloir plaire et être apprécié", profile: 'S' },
      { text: "Le fait de ne pas savoir comment me rendre intéressant", profile: 'T' },
      { text: "Le fait de tout intellectualiser au lieu d'agir", profile: 'C' }
    ]
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// STATE
// ─────────────────────────────────────────────────────────────────────────────
let currentQ = 0;
let answers  = new Array(QUESTIONS.length).fill(null);
let scores   = { F:0, S:0, T:0, R:0, B:0, C:0 };

// ─────────────────────────────────────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startQuiz() {
  currentQ = 0;
  answers  = new Array(QUESTIONS.length).fill(null);
  scores   = { F:0, S:0, T:0, R:0, B:0, C:0 };
  renderQuestion();
  showScreen('screen-quiz');
}

function renderQuestion() {
  const q     = QUESTIONS[currentQ];
  const total = QUESTIONS.length;
  const letters = ['A','B','C','D'];

  document.getElementById('bloc-label').textContent     = q.bloc;
  document.getElementById('question-text').textContent  = q.text;
  document.getElementById('progress-count').textContent = `${currentQ + 1} / ${total}`;
  document.getElementById('progress-fill').style.width  = `${((currentQ + 1) / total) * 100}%`;

  const container = document.getElementById('options-container');
  container.innerHTML = '';

  q.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'option' + (answers[currentQ] === i ? ' selected' : '');
    div.innerHTML = `<span class="option-letter">${letters[i]}</span><span class="option-text">${opt.text}</span>`;
    div.onclick   = () => selectOption(i);
    container.appendChild(div);
  });

  document.getElementById('btn-prev').disabled = (currentQ === 0);

  const btnNext = document.getElementById('btn-next');
  btnNext.textContent = currentQ === total - 1 ? 'Voir mon profil →' : 'Continuer →';
  btnNext.classList.toggle('enabled', answers[currentQ] !== null);
}

function selectOption(idx) {
  answers[currentQ] = idx;
  document.querySelectorAll('.option').forEach((el, i) => el.classList.toggle('selected', i === idx));
  document.getElementById('btn-next').classList.add('enabled');
}

function nextQuestion() {
  if (answers[currentQ] === null) return;
  if (currentQ < QUESTIONS.length - 1) {
    currentQ++;
    renderQuestion();
  } else {
    computeResult();
  }
}

function prevQuestion() {
  if (currentQ > 0) { currentQ--; renderQuestion(); }
}

// ─────────────────────────────────────────────────────────────────────────────
// SCORING
// ─────────────────────────────────────────────────────────────────────────────
function computeResult() {
  showScreen('screen-loading');

  scores = { F:0, S:0, T:0, R:0, B:0, C:0 };
  answers.forEach((ansIdx, qIdx) => {
    if (ansIdx !== null) scores[QUESTIONS[qIdx].options[ansIdx].profile]++;
  });

  const topScore    = Math.max(...Object.values(scores));
  const topProfiles = Object.keys(scores).filter(k => scores[k] === topScore);

  let winner;
  if (topProfiles.length === 1) {
    winner = topProfiles[0];
  } else {
    // Départage : Bloc 5 (Q14 et Q15)
    const tieBreaker = [answers[13], answers[14]]
      .map((a, i) => a !== null ? QUESTIONS[13 + i].options[a].profile : null)
      .find(p => p && topProfiles.includes(p));
    winner = tieBreaker || topProfiles[0];
  }

  setTimeout(() => displayResult(winner), 2800);
}

function displayResult(profileId) {
  const p = PROFILES[profileId];

  // Met en italique/bordeaux le mot après "Le"
  const nameParts = p.name.split(' ');
  const nameHTML  = nameParts[0] + ' <em>' + nameParts.slice(1).join(' ') + '</em>';

  document.getElementById('result-name').innerHTML    = nameHTML;
  document.getElementById('result-tagline').textContent = p.tagline;
  document.getElementById('result-diag').textContent  = p.diag;
  document.getElementById('result-link').href         = p.link;

  showScreen('screen-result');
}
