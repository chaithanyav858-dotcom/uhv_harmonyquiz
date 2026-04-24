const questions = [
  {
    text: 'How does helping a classmate with homework support harmony in society?',
    options: [
      { label: 'I ignore them and do my own work.', value: 'negative', points: -2, explanation: 'Avoiding help can weaken trust and cooperation among classmates.' },
      { label: 'I offer a small hint if asked.', value: 'neutral', points: 3, explanation: 'A little support keeps the relationship stable, but it could be stronger.' },
      { label: 'I explain kindly and celebrate their effort.', value: 'positive', points: 10, explanation: 'Encouraging care and kindness builds stronger community bonds.' }
    ]
  },
  {
    text: 'What is the most harmonious way to respond when someone is upset?',
    options: [
      { label: 'Tell them to stop feeling bad.', value: 'negative', points: -2, explanation: 'Dismissing emotions can make relationships distant and hurtful.' },
      { label: 'Listen quietly and offer support softly.', value: 'neutral', points: 3, explanation: 'Listening helps, but adding constructive support can improve harmony more.' },
      { label: 'Listen, empathize, and suggest a calm solution.', value: 'positive', points: 10, explanation: 'Empathy with helpful advice encourages trust and peaceful connections.' }
    ]
  },
  {
    text: 'Which choice protects nature and promotes harmony with the environment?',
    options: [
      { label: 'Throw wrappers on the ground.', value: 'negative', points: -2, explanation: 'Litter harms nature and shows little respect for our shared environment.' },
      { label: 'Dispose of trash in a bin when possible.', value: 'neutral', points: 3, explanation: 'A decent choice, though recycling would be even better.' },
      { label: 'Recycle and pick up litter to keep the area clean.', value: 'positive', points: 10, explanation: 'Helping nature protects the planet and inspires others to do the same.' }
    ]
  },
  {
    text: 'How can you show harmony when working on a group project?',
    options: [
      { label: 'Do everything myself and ignore team ideas.', value: 'negative', points: -2, explanation: 'Taking control without collaboration creates conflict and stress.' },
      { label: 'Divide tasks evenly but avoid discussing opinions.', value: 'neutral', points: 3, explanation: 'Fair work sharing helps, but teamwork grows stronger with open communication.' },
      { label: 'Listen, share ideas, and help teammates succeed.', value: 'positive', points: 10, explanation: 'True harmony comes from cooperation, respect, and encouragement.' }
    ]
  },
  {
    text: 'What is the healthiest response when someone disagrees with you?',
    options: [
      { label: 'Argue loudly until they agree.', value: 'negative', points: -2, explanation: 'Arguments harm peace and make relationships tense.' },
      { label: 'Accept their opinion without discussing it.', value: 'neutral', points: 3, explanation: 'Respecting views is good, but discussion can still be kind and constructive.' },
      { label: 'Ask questions and try to understand their perspective.', value: 'positive', points: 10, explanation: 'Understanding other views builds respect and strong social harmony.' }
    ]
  },
  {
    text: 'Which habit helps create harmony with nature during a picnic?',
    options: [
      { label: 'Leave food and wrappers behind.', value: 'negative', points: -2, explanation: 'Leaving trash hurts wildlife and spoils natural beauty.' },
      { label: 'Take your trash home with you.', value: 'neutral', points: 3, explanation: 'Caring for the place keeps it clean, yet you can also choose eco-friendly products.' },
      { label: 'Use reusable items and clean up carefully.', value: 'positive', points: 10, explanation: 'Reducing waste and cleaning up honors nature and sets a good example.' }
    ]
  },
  {
    text: 'How does sharing your classroom supplies support harmony?',
    options: [
      { label: 'Keep your supplies only for yourself.', value: 'negative', points: -2, explanation: 'Holding back can make classmates feel excluded and lonely.' },
      { label: 'Share when people ask for them.', value: 'neutral', points: 3, explanation: 'Sharing on request is helpful, but offering support more often is stronger.' },
      { label: 'Offer supplies generously and encourage others.', value: 'positive', points: 10, explanation: 'Generosity creates trust, collaboration, and a positive learning culture.' }
    ]
  },
  {
    text: 'What is the best way to care for a shared garden at school?',
    options: [
      { label: 'Ignore the plants and let others do it.', value: 'negative', points: -2, explanation: 'Neglecting shared spaces reduces beauty and teamwork.' },
      { label: 'Water the plants sometimes when reminded.', value: 'neutral', points: 3, explanation: 'Helping occasionally is okay, but regular care is more harmonious.' },
      { label: 'Take responsibility every week and encourage others too.', value: 'positive', points: 10, explanation: 'Active care makes the garden thrive and brings people together.' }
    ]
  },
  {
    text: 'How can you reduce conflict in your friend group?',
    options: [
      { label: 'Share rumors and gossip to feel involved.', value: 'negative', points: -2, explanation: 'Gossip damages trust and creates unnecessary tension.' },
      { label: 'Stay quiet when there is drama.', value: 'neutral', points: 3, explanation: 'Avoiding drama is okay, but you can also support positive communication.' },
      { label: 'Encourage honest, calm discussions and kindness.', value: 'positive', points: 10, explanation: 'Calm honesty helps friendships grow and maintains harmony.' }
    ]
  },
  {
    text: 'Which choice helps preserve water and harmony with nature?',
    options: [
      { label: 'Leave the tap running while brushing your teeth.', value: 'negative', points: -2, explanation: 'Wasting water shows a lack of care for shared natural resources.' },
      { label: 'Turn off the tap most of the time.', value: 'neutral', points: 3, explanation: 'Saving water is good, but small extra steps can improve the impact.' },
      { label: 'Use a cup or switch off the tap completely.', value: 'positive', points: 10, explanation: 'Careful water use protects nature and sets a positive example.' }
    ]
  },
  {
    text: 'What is an example of harmony with community values?',
    options: [
      { label: 'Ignore local rules and do what I want.', value: 'negative', points: -2, explanation: 'Disregarding rules damages social trust and safety.' },
      { label: 'Follow rules when reminded by others.', value: 'neutral', points: 3, explanation: 'Following rules is helpful, but active participation is more powerful.' },
      { label: 'Respect local values and help others follow them kindly.', value: 'positive', points: 10, explanation: 'Positive participation strengthens community and mutual respect.' }
    ]
  },
  {
    text: 'How should you treat someone who needs comfort after a mistake?',
    options: [
      { label: 'Make fun of them to lighten the mood.', value: 'negative', points: -2, explanation: 'Mocking hurts feelings and breaks trust.' },
      { label: 'Stay close but say little.', value: 'neutral', points: 3, explanation: 'Being present is good, but words of care help more.' },
      { label: 'Encourage them and remind them mistakes are normal.', value: 'positive', points: 10, explanation: 'Support and empathy rebuild confidence and harmony.' }
    ]
  },
  {
    text: 'What is the best habit for respecting classroom harmony?',
    options: [
      { label: 'Talk loudly while the teacher speaks.', value: 'negative', points: -2, explanation: 'Interruptions make it hard for everyone to learn together.' },
      { label: 'Stay quiet but avoid contributing answers.', value: 'neutral', points: 3, explanation: 'Listening is helpful, but engaging respectfully is even better.' },
      { label: 'Listen, raise your hand, and contribute kindly.', value: 'positive', points: 10, explanation: 'Active respect encourages better learning and stronger relationships.' }
    ]
  },
  {
    text: 'How can you show harmony during group playtime?',
    options: [
      { label: 'Take the best role and ignore others.', value: 'negative', points: -2, explanation: 'Selfish play can hurt others and spoil the fun.' },
      { label: 'Share roles when asked.', value: 'neutral', points: 3, explanation: 'Fairness is okay, but inviting others makes play more joyful.' },
      { label: 'Invite friends, share turns, and celebrate everyone.', value: 'positive', points: 10, explanation: 'Inclusive play builds friendship and peaceful group energy.' }
    ]
  },
  {
    text: 'Which habit shows respect for nature on a hike?',
    options: [
      { label: 'Pick flowers and disturb wildlife.', value: 'negative', points: -2, explanation: 'Disturbing nature harms plants and animals.' },
      { label: 'Stay on the trail and watch quietly.', value: 'neutral', points: 3, explanation: 'Respecting the trail helps, but also avoiding noise is more thoughtful.' },
      { label: 'Observe quietly and leave everything exactly as it was.', value: 'positive', points: 10, explanation: 'Preserving nature helps ecosystems remain healthy and peaceful.' }
    ]
  },
  {
    text: 'How can you help create harmony at home?',
    options: [
      { label: 'Refuse to help with chores.', value: 'negative', points: -2, explanation: 'Refusing help can cause stress and unfairness for family members.' },
      { label: 'Help with chores when asked.', value: 'neutral', points: 3, explanation: 'Helping when asked is nice, but offering help willingly strengthens harmony.' },
      { label: 'Offer help, listen to needs, and do your part cheerfully.', value: 'positive', points: 10, explanation: 'Willing contribution creates a calm, caring home atmosphere.' }
    ]
  }
];

const quizState = {
  player: {
    name: '',
    id: '',
    section: ''
  },
  currentQuestion: 0,
  score: 0,
  totalTime: 0,
  timer: null,
  questionTime: 30,
  lastAnswerTime: 0,
  participants: [],
  answerLocked: false,
  userAnswers: []
};

const ADMIN_PASSWORD = 'harmony-admin-2026';

const elements = {
  landingPage: document.getElementById('landingPage'),
  quizPage: document.getElementById('quizPage'),
  resultPage: document.getElementById('resultPage'),
  leaderboardPage: document.getElementById('leaderboardPage'),
  adminPage: document.getElementById('adminPage'),
  userForm: document.getElementById('userForm'),
  playerName: document.getElementById('playerName'),
  playerId: document.getElementById('playerId'),
  playerSection: document.getElementById('playerSection'),
  questionTitle: document.getElementById('questionTitle'),
  questionText: document.getElementById('questionText'),
  choicesList: document.getElementById('choicesList'),
  timerValue: document.getElementById('timerValue'),
  scoreValue: document.getElementById('scoreValue'),
  progressBar: document.getElementById('progressBar'),
  feedbackPanel: document.getElementById('feedbackPanel'),
  feedbackText: document.getElementById('feedbackText'),
  nextButton: document.getElementById('nextButton'),
  finalScore: document.getElementById('finalScore'),
  resultMessage: document.getElementById('resultMessage'),
  badgeText: document.getElementById('badgeText'),
  totalTime: document.getElementById('totalTime'),
  restartButton: document.getElementById('restartButton'),
  leaderboardButton: document.getElementById('leaderboardButton'),
  reviewPanel: document.getElementById('reviewPanel'),
  reviewSummary: document.getElementById('reviewSummary'),
  reviewList: document.getElementById('reviewList'),
  leaderboardList: document.getElementById('leaderboardList'),
  closeLeaderboard: document.getElementById('closeLeaderboard'),
  adminButton: document.getElementById('adminButton'),
  closeAdmin: document.getElementById('closeAdmin'),
  announceWinner: document.getElementById('announceWinner'),
  winnerMessage: document.getElementById('winnerMessage'),
  topScorer: document.getElementById('topScorer'),
  totalParticipants: document.getElementById('totalParticipants'),
  participantsList: document.getElementById('participantsList')
};

function getApiRoot() {
  if ((window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && window.location.port && window.location.port !== '3000') {
    return 'http://localhost:3000';
  }
  return '';
}

function normalizeParticipants(participants) {
  return participants.map((participant) => ({
    ...participant,
    entryId: participant.entryId || `${participant.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  }));
}

async function loadParticipants() {
  try {
    const apiRoot = getApiRoot();
    const response = await fetch(`${apiRoot}/api/participants`);
    if (!response.ok) throw new Error('Unable to load participants');
    quizState.participants = normalizeParticipants(await response.json());
  } catch (error) {
    const stored = localStorage.getItem('harmonyQuizParticipants');
    quizState.participants = stored ? normalizeParticipants(JSON.parse(stored)) : [];
  }
}

function saveParticipants() {
  localStorage.setItem('harmonyQuizParticipants', JSON.stringify(quizState.participants));
}

function showView(view) {
  [elements.landingPage, elements.quizPage, elements.resultPage, elements.leaderboardPage, elements.adminPage].forEach((section) => {
    section.classList.remove('active-card');
  });
  view.classList.add('active-card');
}

function getPerformanceLabel(score) {
  if (score >= 120) return { message: 'Harmony Leader', badge: '🌟 You inspire peace and teamwork!' };
  if (score >= 70) return { message: 'Learning Mind', badge: '✨ You understand harmony and keep growing.' };
  return { message: 'Needs Reflection', badge: '💡 Think about how choices affect others and nature.' };
}

function updateProgress() {
  const progress = ((quizState.currentQuestion + 1) / questions.length) * 100;
  elements.progressBar.style.width = `${progress}%`;
  elements.questionTitle.textContent = `Question ${quizState.currentQuestion + 1} / ${questions.length}`;
}

function renderQuestion() {
  const current = questions[quizState.currentQuestion];
  elements.questionText.textContent = current.text;
  elements.choicesList.innerHTML = '';

  const shuffledOptions = current.options
    .map((option, index) => ({ ...option, originalIndex: index }))
    .sort(() => Math.random() - 0.5);

  quizState.currentOptions = shuffledOptions;

  shuffledOptions.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'choice-button';
    button.innerHTML = `<div class="choice-label">${['A', 'B', 'C'][index]}</div>
                        <div class="choice-text">${option.label}</div>`;
    button.addEventListener('click', () => chooseAnswer(option, button, index));
    elements.choicesList.appendChild(button);
  });
}

function startTimer() {
  quizState.questionTime = 30;
  elements.timerValue.textContent = quizState.questionTime;
  quizState.lastAnswerTime = Date.now();

  if (quizState.timer) {
    clearInterval(quizState.timer);
  }

  quizState.timer = setInterval(() => {
    quizState.questionTime -= 1;
    elements.timerValue.textContent = quizState.questionTime;

    if (quizState.questionTime <= 0) {
      clearInterval(quizState.timer);
      handleTimeout();
    }
  }, 1000);
}

function getCorrectIndex(question) {
  return typeof question.correctIndex === 'number' ? question.correctIndex : question.options.findIndex((opt) => opt.value === 'positive');
}

function handleTimeout() {
  quizState.answerLocked = true;
  quizState.totalTime += 30;
  const currentQuestion = questions[quizState.currentQuestion];
  const correctIndex = getCorrectIndex(currentQuestion);
  elements.choicesList.querySelectorAll('button').forEach((choiceButton) => {
    choiceButton.disabled = true;
    choiceButton.style.cursor = 'not-allowed';
  });
  quizState.userAnswers[quizState.currentQuestion] = {
    selectedIndex: null,
    selectedText: 'No answer selected',
    correctIndex,
    correctText: currentQuestion.options[correctIndex].label,
    correct: false
  };
  displayFeedback({ explanation: 'Time is up! Delayed choices make it harder to create harmony, so this answer is not counted.' });
}

function chooseAnswer(option, button, index) {
  if (quizState.answerLocked) return;
  quizState.answerLocked = true;
  clearInterval(quizState.timer);

  const elapsed = 30 - quizState.questionTime;
  const speedBonus = Math.max(0, 30 - elapsed);
  let earned = option.points;
  if (option.value === 'positive') {
    earned += Math.round(speedBonus * 0.4);
  }
  quizState.score += Math.max(0, earned);
  quizState.totalTime += elapsed;

  const currentQuestion = questions[quizState.currentQuestion];
  const correctIndex = getCorrectIndex(currentQuestion);
  quizState.userAnswers[quizState.currentQuestion] = {
    selectedIndex: option.originalIndex,
    selectedText: option.label,
    correctIndex,
    correctText: currentQuestion.options[correctIndex].label,
    correct: option.value === 'positive'
  };

  button.classList.add('selected');
  disableChoices();
  elements.scoreValue.textContent = quizState.score;
  displayFeedback(option);
}

function displayFeedback(option) {
  elements.feedbackText.textContent = option.explanation || 'Waiting for your answer...';
  elements.feedbackPanel.classList.remove('hidden');
  elements.nextButton.focus();
}

function disableChoices() {
  elements.choicesList.querySelectorAll('button').forEach((button) => {
    button.disabled = true;
    button.style.cursor = 'not-allowed';
  });
}

async function finishQuiz() {
  clearInterval(quizState.timer);
  const performance = getPerformanceLabel(quizState.score);
  elements.finalScore.textContent = quizState.score;
  elements.totalTime.textContent = `${quizState.totalTime}s`;
  elements.resultMessage.textContent = performance.message;
  elements.badgeText.textContent = performance.badge;
  renderReview();
  await saveParticipant();
  showView(elements.resultPage);
}

async function saveParticipant() {
  const participant = {
    name: quizState.player.name,
    id: quizState.player.id,
    section: quizState.player.section,
    score: quizState.score,
    time: quizState.totalTime,
    entryId: `${quizState.player.id}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  };

  quizState.participants.push(participant);
  quizState.participants = normalizeParticipants(quizState.participants);
  quizState.participants.sort((a, b) => b.score - a.score || a.time - b.time);

  try {
    const apiRoot = getApiRoot();
    const response = await fetch(`${apiRoot}/api/participants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(participant)
    });
    if (!response.ok) {
      throw new Error('API save failed');
    }
  } catch (error) {
    saveParticipants();
  }
}

async function deleteParticipant(entryId) {
  const removeLocally = () => {
    quizState.participants = quizState.participants.filter((participant) => participant.entryId !== entryId);
    saveParticipants();
    renderAdmin();
    renderLeaderboard();
  };

  try {
    const apiRoot = getApiRoot();
    const response = await fetch(`${apiRoot}/api/participants/${entryId}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error('Delete failed');
    }
    const updated = await response.json();
    quizState.participants = normalizeParticipants(updated);
    if (!apiRoot) {
      saveParticipants();
    }
    renderAdmin();
    renderLeaderboard();
  } catch (error) {
    removeLocally();
  }
}

function renderReview() {
  elements.reviewList.innerHTML = '';
  const wrongCount = quizState.userAnswers.filter((answer) => !answer.correct).length;
  const correctCount = quizState.userAnswers.length - wrongCount;
  elements.reviewSummary.textContent = wrongCount > 0
    ? `You answered ${correctCount} correctly and made ${wrongCount} mistake${wrongCount === 1 ? '' : 's'}. Review each question below.`
    : 'Perfect score! All answers were correct.';

  quizState.userAnswers.forEach((answer, index) => {
    const question = questions[index];
    const row = document.createElement('div');
    row.className = `review-row ${answer.correct ? 'correct' : 'wrong'}`;
    row.innerHTML = `
      <div class="review-question"><strong>Q${index + 1}:</strong> ${question.text}</div>
      <div class="review-answer"><span>Your answer:</span> ${answer.selectedText}</div>
      <div class="review-answer"><span>Correct answer:</span> ${answer.correctText}</div>
      <div class="review-status">${answer.correct ? '✅ Correct' : '❌ Mistake'}</div>
    `;
    elements.reviewList.appendChild(row);
  });
}

function renderLeaderboard() {
  elements.leaderboardList.innerHTML = '';
  if (quizState.participants.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'leaderboard-empty';
    empty.textContent = 'No leaderboard entries yet. Complete a quiz to submit your score.';
    elements.leaderboardList.appendChild(empty);
    return;
  }

  quizState.participants.slice(0, 8).forEach((participant, index) => {
    const row = document.createElement('div');
    row.className = 'leaderboard-row';
    row.innerHTML = `<span>${index + 1}</span>
                     <span>${participant.name}</span>
                     <span>${participant.score}</span>
                     <span>${participant.time}s</span>`;
    elements.leaderboardList.appendChild(row);
  });
}

function renderAdmin() {
  elements.participantsList.innerHTML = '';
  elements.totalParticipants.textContent = quizState.participants.length;
  elements.winnerMessage.textContent = 'Press the button to reveal the top player.';
  elements.winnerMessage.classList.remove('winner-success', 'winner-empty');

  if (quizState.participants.length > 0) {
    const top = quizState.participants[0];
    elements.topScorer.textContent = `${top.name} — ${top.score} pts`;
  } else {
    elements.topScorer.textContent = 'No data yet';
  }

  quizState.participants.forEach((participant) => {
    const row = document.createElement('div');
    row.className = 'table-row';
    row.innerHTML = `<span>${participant.name}</span>
                     <span>${participant.id}</span>
                     <span>${participant.section}</span>
                     <span>${participant.score}</span>
                     <span>${participant.time}s</span>
                     <button type="button" class="secondary-btn delete-btn" aria-label="Delete participant ${participant.name}">Delete</button>`;
    row.querySelector('.delete-btn').addEventListener('click', () => deleteParticipant(participant.entryId));
    elements.participantsList.appendChild(row);
  });
}

function announceWinner() {
  if (quizState.participants.length === 0) {
    elements.winnerMessage.textContent = 'No participants yet — start a quiz session first.';
    elements.winnerMessage.classList.add('winner-empty');
    return;
  }

  const winner = quizState.participants[0];
  const winnerText = `🎉 Surprise winner announcement: ${winner.name} from ${winner.section}! Score ${winner.score} points in ${winner.time}s.`;
  elements.winnerMessage.textContent = winnerText;
  elements.winnerMessage.classList.add('winner-success');
}

function resetQuiz() {
  quizState.currentQuestion = 0;
  quizState.score = 0;
  quizState.totalTime = 0;
  quizState.answerLocked = false;
  elements.feedbackPanel.classList.add('hidden');
  elements.scoreValue.textContent = '0';
  updateProgress();
  renderQuestion();
  startTimer();
  showView(elements.quizPage);
}

function nextQuestion() {
  elements.feedbackPanel.classList.add('hidden');
  quizState.currentQuestion += 1;
  quizState.answerLocked = false;

  if (quizState.currentQuestion >= questions.length) {
    finishQuiz();
    return;
  }

  updateProgress();
  renderQuestion();
  startTimer();
}

async function openAdmin() {
  elements.adminPage.classList.remove('hidden');
  try {
    await loadParticipants();
  } catch (error) {
    console.warn('Could not load participants for admin panel:', error);
  }
  renderAdmin();
  showView(elements.adminPage);
}

elements.userForm.addEventListener('submit', (event) => {
  event.preventDefault();
  quizState.player.name = elements.playerName.value.trim();
  quizState.player.id = elements.playerId.value.trim();
  quizState.player.section = elements.playerSection.value.trim();

  if (!quizState.player.name || !quizState.player.id || !quizState.player.section) {
    alert('Please fill in all fields to start the quiz.');
    return;
  }

  resetQuiz();
});

elements.nextButton.addEventListener('click', nextQuestion);
elements.restartButton.addEventListener('click', () => {
  elements.playerName.value = '';
  elements.playerId.value = '';
  elements.playerSection.value = '';
  showView(elements.landingPage);
});
elements.leaderboardButton.addEventListener('click', async () => {
  await loadParticipants();
  renderLeaderboard();
  showView(elements.leaderboardPage);
});
elements.closeLeaderboard.addEventListener('click', () => {
  showView(elements.resultPage);
});
function promptAdminAccess() {
  const entered = prompt('Enter admin password to access the admin panel:');
  if (!entered) {
    return;
  }

  if (entered.trim().toLowerCase() === ADMIN_PASSWORD.toLowerCase()) {
    openAdmin().catch((error) => {
      console.error('Admin panel failed to open:', error);
      alert('Unable to open the admin panel. Please try again.');
    });
  } else {
    alert('Incorrect password. Admin access denied.');
  }
}

elements.adminButton.addEventListener('click', promptAdminAccess);
elements.announceWinner.addEventListener('click', announceWinner);
elements.closeAdmin.addEventListener('click', () => {
  elements.adminPage.classList.add('hidden');
  showView(elements.landingPage);
});

loadParticipants().finally(() => {
  showView(elements.landingPage);
  updateProgress();
  renderQuestion();
});
