/* ==========================================================================
   🔥 FIREBASE CONFIGURATION
   ========================================================================== */
// Replace these values with your actual Firebase config!
const firebaseConfig = {
    apiKey: "AIzaSyDGx65tCt54UVKus6ON7jVP8eCHbhr3P0E",
    authDomain: "uhv-harmony-quiz.firebaseapp.com",
    projectId: "uhv-harmony-quiz",
    storageBucket: "uhv-harmony-quiz.firebasestorage.app",
    messagingSenderId: "411795678988",
    appId: "1:411795678988:web:5ec3c47559078e73ec0b29"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/* ==========================================================================
   State & Data Variables
   ========================================================================== */
let currentUser = {
    name: '',
    usn: '',
    section: '',
    score: 0,
    timeTaken: 0,
    answers: []
};

let currentQuestionIndex = 0;
let timerInterval;
let timeLeft = 30;
let questionStartTime = 0;
let adminUnsubscribe = null;

// Quiz Database: 15 Questions based on Universal Human Values (Society & Nature)
const questions = [
    {
        question: "When there is a conflict in your project team, what is the best approach?",
        options: [
            { text: "Listen to everyone and find a mutually beneficial solution.", type: "positive", feedback: "Excellent! Mutual respect and dialogue promote harmony in relationships." },
            { text: "Ignore the conflict and focus only on your own work.", type: "neutral", feedback: "Okay. While it avoids immediate arguments, ignoring issues can hurt team harmony long-term." },
            { text: "Argue until your idea is accepted because it's the best.", type: "negative", feedback: "Domination creates resentment, leading to conflict rather than harmony." }
        ]
    },
    {
        question: "How should we view natural resources?",
        options: [
            { text: "As a web of interconnected life that we must nurture and protect.", type: "positive", feedback: "Spot on! Recognizing our coexistence with nature ensures sustainable harmony." },
            { text: "As raw materials meant for human consumption.", type: "neutral", feedback: "This view is common, but solely viewing nature as a resource leads to exploitation." },
            { text: "As unlimited assets to be exploited for maximum profit.", type: "negative", feedback: "Exploitation leads to environmental degradation and breaks the harmony of nature." }
        ]
    },
    {
        question: "What is the basis of a harmonious society?",
        options: [
            { text: "Fear of strict laws and punishments.", type: "negative", feedback: "Fear only controls behavior temporarily; it doesn't build true understanding or peace." },
            { text: "Economic wealth and infrastructure.", type: "neutral", feedback: "Wealth is useful, but without mutual trust, a rich society can still be deeply unhappy." },
            { text: "Trust, mutual fulfillment, and right understanding.", type: "positive", feedback: "Correct! Trust and right understanding are the foundation of a fearless, harmonious society." }
        ]
    },
    {
        question: "Your neighbor plays loud music late at night. You should:",
        options: [
            { text: "Call the police immediately to teach them a lesson.", type: "negative", feedback: "Immediate escalation destroys neighborly relations and creates hostility." },
            { text: "Politely discuss how the noise affects your sleep and request a compromise.", type: "positive", feedback: "Great! Open communication builds mutual respect and resolves conflicts peacefully." },
            { text: "Buy earplugs and never speak to them again.", type: "neutral", feedback: "Avoidance might solve your sleep issue but it degrades community connection." }
        ]
    },
    {
        question: "True happiness comes from:",
        options: [
            { text: "Accumulating more physical facilities and gadgets than others.", type: "negative", feedback: "Material goods provide temporary comfort, not continuous happiness." },
            { text: "Being in harmony within oneself, with others, and with nature.", type: "positive", feedback: "Perfect! Continuous happiness is the state of harmony at all levels of existence." },
            { text: "Achieving a successful career and high social status.", type: "neutral", feedback: "Success is nice, but without inner peace and good relationships, it feels empty." }
        ]
    },
    {
        question: "What does 'Right Understanding' mean?",
        options: [
            { text: "Knowing how to make a lot of money quickly.", type: "negative", feedback: "This is a misconception. Wealth alone doesn't mean you understand life's purpose." },
            { text: "Acquiring a lot of technical skills and degrees.", type: "neutral", feedback: "Skills are important for living, but they don't automatically provide clarity of purpose." },
            { text: "Clarity about oneself, one's purpose, and relationship with existence.", type: "positive", feedback: "Exactly. Right understanding is the core of human values and self-harmony." }
        ]
    },
    {
        question: "When you see someone struggling with heavy bags, what is the harmonious action?",
        options: [
            { text: "Offer to help them carry the bags.", type: "positive", feedback: "Wonderful! Compassion and helping others strengthens societal bonds." },
            { text: "Walk past quickly; it's not your problem.", type: "negative", feedback: "Indifference weakens social trust and community spirit." },
            { text: "Watch them to see if they eventually manage it.", type: "neutral", feedback: "While not harmful, passive observation misses an opportunity to foster goodwill." }
        ]
    },
    {
        question: "The feeling of 'Affection' in a relationship implies:",
        options: [
            { text: "Expecting the other person to always agree with you.", type: "negative", feedback: "Expectation of compliance is control, not affection." },
            { text: "Feeling related to the other, accepting them as they are.", type: "positive", feedback: "Yes! Affection is the feeling of being related, leading to mutual fulfillment." },
            { text: "Being polite to them only when you need something.", type: "neutral", feedback: "Conditional politeness is transactional, lacking true affection." }
        ]
    },
    {
        question: "How should society handle waste?",
        options: [
            { text: "Dump it in rivers or oceans where it can't be seen.", type: "negative", feedback: "This causes severe ecological imbalance and destroys nature's harmony." },
            { text: "Rely completely on the government to clean it up.", type: "neutral", feedback: "The government plays a role, but individual responsibility is required for true sustainability." },
            { text: "Reduce, reuse, recycle, and move towards zero waste.", type: "positive", feedback: "Brilliant! This respects the cyclability of nature and preserves the environment." }
        ]
    },
    {
        question: "What is 'Prosperity' in the true sense?",
        options: [
            { text: "Having more money than your neighbors.", type: "negative", feedback: "Comparison leads to endless competition and dissatisfaction." },
            { text: "Having just enough to survive day by day.", type: "neutral", feedback: "Survival is basic, but prosperity implies a feeling of abundance, not just scraping by." },
            { text: "The feeling of having more physical facilities than is required.", type: "positive", feedback: "Correct. It's a mindset of abundance combined with right utilization." }
        ]
    },
    {
        question: "If a classmate from a different background joins your group:",
        options: [
            { text: "Welcome them and learn about their culture.", type: "positive", feedback: "Great! Embracing diversity enriches relationships and societal harmony." },
            { text: "Ignore them unless they speak to you first.", type: "neutral", feedback: "Apathy prevents the formation of inclusive, harmonious environments." },
            { text: "Exclude them because they are different.", type: "negative", feedback: "Discrimination creates division and destroys societal harmony." }
        ]
    },
    {
        question: "Regarding other living beings (animals, birds):",
        options: [
            { text: "We should recognize our mutual dependence and protect their habitats.", type: "positive", feedback: "Excellent! Recognizing the interconnectedness of all life is key to natural harmony." },
            { text: "They exist solely for human entertainment and consumption.", type: "negative", feedback: "This anthropocentric view justifies cruelty and ecological destruction." },
            { text: "We should leave them alone as long as they don't bother us.", type: "neutral", feedback: "Coexistence is good, but active protection is better for a thriving ecosystem." }
        ]
    },
    {
        question: "What creates a sense of 'Fearlessness' in society?",
        options: [
            { text: "Building higher walls and more weapons.", type: "negative", feedback: "Physical defenses address symptoms, not the root cause of fear, often increasing tension." },
            { text: "Having a strong police force.", type: "neutral", feedback: "Law enforcement is necessary, but true fearlessness comes from inner trust, not external force." },
            { text: "Mutual trust, justice, and equitable distribution of resources.", type: "positive", feedback: "Exactly. When everyone's needs are met and trust exists, fear naturally disappears." }
        ]
    },
    {
        question: "When you make a mistake that affects others, you should:",
        options: [
            { text: "Acknowledge it, apologize sincerely, and fix the damage.", type: "positive", feedback: "Perfect. Accountability restores trust and heals relationships." },
            { text: "Hide it and hope nobody finds out.", type: "negative", feedback: "Deceit breaks trust, which is the foundation of harmonious relationships." },
            { text: "Say 'sorry' quickly but blame circumstances.", type: "neutral", feedback: "Deflecting blame prevents genuine resolution and learning." }
        ]
    },
    {
        question: "Ultimately, 'Universal Human Order' means:",
        options: [
            { text: "One global government controlling everything.", type: "negative", feedback: "Centralized control without right understanding leads to tyranny, not harmony." },
            { text: "Everyone living peacefully but in isolation.", type: "neutral", feedback: "Isolation avoids conflict but misses out on the joy of mutual fulfillment." },
            { text: "Harmony from family to world family, based on right understanding.", type: "positive", feedback: "Yes! A continuous chain of harmonious relationships extending to the whole world." }
        ]
    }
];

/* ==========================================================================
   DOM Elements
   ========================================================================== */
const screens = {
    welcome: document.getElementById('welcome-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen'),
    admin: document.getElementById('admin-screen'),
    publicLeaderboard: document.getElementById('public-leaderboard-screen')
};

// Form & Buttons
const regForm = document.getElementById('registration-form');
const btnShowAdmin = document.getElementById('btn-show-admin');
const btnCloseAdmin = document.getElementById('btn-close-admin');
const btnShowPublicLeaderboard = document.getElementById('btn-show-public-leaderboard');
const btnClosePublic = document.getElementById('btn-close-public');
const btnNextQuestion = document.getElementById('btn-next-question');
const btnViewLeaderboard = document.getElementById('btn-view-leaderboard');
const btnRestart = document.getElementById('btn-restart');
const btnClearData = document.getElementById('btn-clear-data');
const btnAnnounceWinner = document.getElementById('btn-announce-winner');

// Quiz UI
const questionTracker = document.getElementById('question-tracker');
const progressFill = document.getElementById('progress-fill');
const timeLeftEl = document.getElementById('time-left');
const timerCircle = document.querySelector('.timer-circle');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// Feedback & Review UI
const feedbackOverlay = document.getElementById('feedback-overlay');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackExplanation = document.getElementById('feedback-explanation');
const scoreUpdateEl = document.getElementById('score-update');
const reviewList = document.getElementById('review-list');

// Result UI
const finalScoreEl = document.getElementById('final-score');
const performanceBadge = document.getElementById('performance-badge');
const resultMessage = document.getElementById('result-message');
const resultIcon = document.getElementById('result-icon');

// Leaderboards UI
const totalParticipantsEl = document.getElementById('total-participants');
const highestScoreEl = document.getElementById('highest-score');
const leaderboardBody = document.getElementById('leaderboard-body');
const publicLeaderboardBody = document.getElementById('public-leaderboard-body');

// Winner UI
const publicWinnerPanel = document.getElementById('public-winner-panel');
const winnerNameDisplay = document.getElementById('winner-name-display');
const winnerScoreDisplay = document.getElementById('winner-score-display');

// Admin Breakdown UI
const breakdownOverlay = document.getElementById('breakdown-overlay');
const breakdownName = document.getElementById('breakdown-name');
const breakdownList = document.getElementById('breakdown-list');
const btnCloseBreakdown = document.getElementById('btn-close-breakdown');


/* ==========================================================================
   Initialization
   ========================================================================== */
window.onload = () => {
    listenForWinner();
};

function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    screens[screenName].classList.remove('hidden');
    screens[screenName].classList.add('active');
}

/* ==========================================================================
   Quiz Logic
   ========================================================================== */
regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Capture user details
    currentUser.name = document.getElementById('student-name').value.trim();
    currentUser.usn = document.getElementById('student-usn').value.trim();
    currentUser.section = document.getElementById('student-section').value.trim();
    currentUser.score = 0;
    currentUser.timeTaken = 0;
    currentUser.answers = [];
    
    currentQuestionIndex = 0;
    
    showScreen('quiz');
    loadQuestion();
});

function loadQuestion() {
    const q = questions[currentQuestionIndex];
    
    // Update Header
    questionTracker.innerText = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    progressFill.style.width = `${((currentQuestionIndex) / questions.length) * 100}%`;
    
    // Set text
    questionText.innerText = q.question;
    optionsContainer.innerHTML = '';
    
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    
    shuffledOptions.forEach((option) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = option.text;
        
        btn.addEventListener('click', () => handleAnswer(option, btn, shuffledOptions));
        
        optionsContainer.appendChild(btn);
    });
    
    startTimer();
}

function startTimer() {
    timeLeft = 30;
    timeLeftEl.innerText = timeLeft;
    timerCircle.classList.remove('warning');
    questionStartTime = Date.now();
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        timeLeftEl.innerText = timeLeft;
        
        if (timeLeft <= 5) {
            timerCircle.classList.add('warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function handleAnswer(selectedOption, btnElement, allOptions) {
    stopTimer();
    
    const timeToAnswer = (Date.now() - questionStartTime) / 1000;
    currentUser.timeTaken += timeToAnswer;
    
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.style.pointerEvents = 'none');
    
    btnElement.classList.add('selected');
    
    let pointsEarned = 0;
    let isCorrect = false;
    const correctOption = allOptions.find(o => o.type === 'positive');
    
    if (selectedOption.type === 'positive') {
        btnElement.classList.add('correct');
        isCorrect = true;
        // 30s Scoring Tiers
        if (timeLeft >= 20) {
            pointsEarned = 10; // 0-10 sec
        } else if (timeLeft >= 10) {
            pointsEarned = 7;  // 11-20 sec
        } else {
            pointsEarned = 5;  // 21-30 sec
        }
    } else if (selectedOption.type === 'neutral') {
        pointsEarned = 3;
    } else if (selectedOption.type === 'negative') {
        btnElement.classList.add('wrong');
        pointsEarned = 0; 
        
        allBtns.forEach(b => {
            const optData = allOptions.find(o => o.text === b.innerText);
            if (optData && optData.type === 'positive') {
                b.classList.add('correct');
            }
        });
    }
    
    // Store answer breakdown
    currentUser.answers.push({
        question: questions[currentQuestionIndex].question,
        selected: selectedOption.text,
        correct: correctOption.text,
        isCorrect: isCorrect,
        timeTaken: Number(timeToAnswer.toFixed(1))
    });

    currentUser.score += pointsEarned;
    
    setTimeout(() => {
        showFeedback(selectedOption, pointsEarned);
    }, 800);
}

function handleTimeOut() {
    const allBtns = optionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.style.pointerEvents = 'none');
    
    const correctOption = questions[currentQuestionIndex].options.find(o => o.type === 'positive');
    
    currentUser.timeTaken += 30;
    currentUser.answers.push({
        question: questions[currentQuestionIndex].question,
        selected: "No Answer (Time Out)",
        correct: correctOption.text,
        isCorrect: false,
        timeTaken: 30
    });

    showFeedback({
        type: 'negative',
        feedback: "Time's up! Quick decision-making is often required in life."
    }, 0);
}

function showFeedback(option, pointsEarned) {
    feedbackExplanation.innerText = option.feedback;
    scoreUpdateEl.className = 'score-update';
    
    if (option.type === 'positive') {
        feedbackIcon.innerText = '🌟';
        feedbackTitle.innerText = pointsEarned === 10 ? 'Brilliant & Fast!' : 'Great Choice!';
        scoreUpdateEl.innerText = `+${pointsEarned} Points`;
        scoreUpdateEl.classList.add('positive');
    } else if (option.type === 'neutral') {
        feedbackIcon.innerText = '⚖️';
        feedbackTitle.innerText = 'Fair Enough';
        scoreUpdateEl.innerText = `+${pointsEarned} Points`;
        scoreUpdateEl.classList.add('neutral');
    } else {
        feedbackIcon.innerText = '🌱';
        feedbackTitle.innerText = 'Room for Growth';
        scoreUpdateEl.innerText = `+${pointsEarned} Points`;
        scoreUpdateEl.classList.add('negative');
    }
    
    feedbackOverlay.classList.remove('hidden');
}

btnNextQuestion.addEventListener('click', () => {
    feedbackOverlay.classList.add('hidden');
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
});

/* ==========================================================================
   Results & Firebase Storage
   ========================================================================== */
async function endQuiz() {
    progressFill.style.width = '100%';
    const maxScore = questions.length * 10;
    const percentage = (currentUser.score / maxScore) * 100;
    
    finalScoreEl.innerText = currentUser.score;
    performanceBadge.className = 'performance-badge';
    if (percentage >= 80) {
        performanceBadge.innerText = 'Harmony Leader';
        performanceBadge.classList.add('badge-high');
        resultMessage.innerText = "Exceptional understanding of Universal Human Values! You are a beacon of harmony.";
        resultIcon.innerText = '🏆';
    } else if (percentage >= 50) {
        performanceBadge.innerText = 'Learning Mind';
        performanceBadge.classList.add('badge-medium');
        resultMessage.innerText = "Good effort! You grasp the concepts well, but there is still room to deepen your understanding.";
        resultIcon.innerText = '🌿';
    } else {
        performanceBadge.innerText = 'Needs Reflection';
        performanceBadge.classList.add('badge-low');
        resultMessage.innerText = "Take some time to reflect on relationships, society, and nature. Harmony is a journey.";
        resultIcon.innerText = '🌱';
    }
    
    renderReviewAnswers(currentUser.answers, reviewList);
    showScreen('result');

    try {
        if(firebaseConfig.apiKey !== "YOUR_API_KEY") {
            await db.collection("leaderboard").add({
                name: currentUser.name,
                usn: currentUser.usn,
                section: currentUser.section,
                score: currentUser.score,
                timeTaken: Number(currentUser.timeTaken.toFixed(1)),
                answers: currentUser.answers,
                timestamp: new Date().toISOString()
            });
            console.log("Score saved to Firebase!");
        }
    } catch (e) {
        console.error("Error adding document to Firebase: ", e);
    }
}

function renderReviewAnswers(answersArray, containerElement) {
    containerElement.innerHTML = '';
    answersArray.forEach((ans, index) => {
        const item = document.createElement('div');
        item.classList.add('review-item');
        item.classList.add(ans.isCorrect ? 'is-correct' : 'is-wrong');
        
        item.innerHTML = `
            <div class="review-question">${index + 1}. ${ans.question}</div>
            <div class="review-answer"><strong>You selected:</strong> ${ans.selected} (${ans.timeTaken}s)</div>
            ${!ans.isCorrect ? `<div class="review-correct"><strong>Correct:</strong> ${ans.correct}</div>` : ''}
        `;
        containerElement.appendChild(item);
    });
}

btnRestart.addEventListener('click', () => {
    regForm.reset();
    showScreen('welcome');
});

/* ==========================================================================
   Public Leaderboard
   ========================================================================== */
btnShowPublicLeaderboard.addEventListener('click', () => {
    loadPublicLeaderboard();
    showScreen('publicLeaderboard');
});

btnClosePublic.addEventListener('click', () => {
    showScreen('welcome');
});

btnViewLeaderboard.addEventListener('click', () => {
    loadPublicLeaderboard();
    showScreen('publicLeaderboard');
});

async function loadPublicLeaderboard() {
    publicLeaderboardBody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Loading...</td></tr>';
    try {
        const querySnapshot = await db.collection("leaderboard").orderBy("score", "desc").get();
        const leaderboard = [];
        querySnapshot.forEach((doc) => {
            leaderboard.push(doc.data());
        });
        
        // JS Secondary Sort (Time Ascending)
        leaderboard.sort((a, b) => b.score - a.score || a.timeTaken - b.timeTaken);
        
        publicLeaderboardBody.innerHTML = '';
        if(leaderboard.length === 0) {
            publicLeaderboardBody.innerHTML = '<tr><td colspan="4" style="text-align:center;">No participants yet.</td></tr>';
        }

        leaderboard.forEach((entry, index) => {
            const tr = document.createElement('tr');
            let rankHtml = `${index + 1}`;
            if (index === 0) rankHtml = `<span class="rank-badge rank-1">1</span>`;
            else if (index === 1) rankHtml = `<span class="rank-badge rank-2">2</span>`;
            else if (index === 2) rankHtml = `<span class="rank-badge rank-3">3</span>`;
            
            tr.innerHTML = `
                <td>${rankHtml}</td>
                <td><strong>${entry.name}</strong></td>
                <td><strong style="color:var(--primary-color)">${entry.score}</strong></td>
                <td>${entry.timeTaken}s</td>
            `;
            publicLeaderboardBody.appendChild(tr);
        });
    } catch (e) {
        publicLeaderboardBody.innerHTML = '<tr><td colspan="4" style="text-align:center; color:red;">Error loading data.</td></tr>';
    }
}

/* ==========================================================================
   Winner Announcement System
   ========================================================================== */
function listenForWinner() {
    db.collection("announcement").orderBy("timestamp", "desc").limit(1)
      .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
              const winner = snapshot.docs[0].data();
              winnerNameDisplay.innerText = winner.name;
              winnerScoreDisplay.innerText = `${winner.score} Points (${winner.timeTaken}s)`;
              publicWinnerPanel.classList.remove('hidden');
          } else {
              publicWinnerPanel.classList.add('hidden');
          }
      }, (error) => {
          console.error("Could not listen for winner", error);
      });
}

btnAnnounceWinner.addEventListener('click', async () => {
    try {
        // Get the top user
        const snapshot = await db.collection("leaderboard").orderBy("score", "desc").get();
        const leaderboard = [];
        snapshot.forEach((doc) => leaderboard.push(doc.data()));
        leaderboard.sort((a, b) => b.score - a.score || a.timeTaken - b.timeTaken);

        if (leaderboard.length > 0) {
            const winner = leaderboard[0];
            await db.collection("announcement").add({
                name: winner.name,
                score: winner.score,
                timeTaken: winner.timeTaken,
                timestamp: new Date().toISOString()
            });
            alert(`Winner announced successfully: ${winner.name}!`);
        } else {
            alert("No participants to announce.");
        }
    } catch (e) {
        alert("Error announcing winner.");
        console.error(e);
    }
});

/* ==========================================================================
   Admin Dashboard (REALTIME & SECURE)
   ========================================================================== */
btnShowAdmin.addEventListener('click', () => {
    const password = prompt("Please enter the admin password:");
    if (password === "Anya@2006") {
        setupAdminListener();
        showScreen('admin');
    } else if (password !== null) {
        alert("Incorrect password!");
    }
});

btnCloseAdmin.addEventListener('click', () => {
    if (adminUnsubscribe) {
        adminUnsubscribe(); // Stop listening when admin closes
    }
    showScreen('welcome');
});

btnCloseBreakdown.addEventListener('click', () => {
    breakdownOverlay.classList.add('hidden');
});

function setupAdminListener() {
    totalParticipantsEl.innerText = '...';
    highestScoreEl.innerText = '...';
    leaderboardBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">Loading Live Data...</td></tr>';
    
    // Real-time listener
    adminUnsubscribe = db.collection("leaderboard")
        .orderBy("score", "desc")
        .onSnapshot((querySnapshot) => {
            const leaderboard = [];
            querySnapshot.forEach((doc) => {
                leaderboard.push({ id: doc.id, ...doc.data() });
            });
            
            // JS Secondary Sort (Time Ascending)
            leaderboard.sort((a, b) => b.score - a.score || a.timeTaken - b.timeTaken);
            
            // Stats
            totalParticipantsEl.innerText = leaderboard.length;
            if (leaderboard.length > 0) highestScoreEl.innerText = leaderboard[0].score;
            else highestScoreEl.innerText = '0';
            
            // Table
            leaderboardBody.innerHTML = '';
            if(leaderboard.length === 0) {
                leaderboardBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">No participants yet.</td></tr>';
            }

            leaderboard.forEach((entry, index) => {
                const tr = document.createElement('tr');
                let rankHtml = `${index + 1}`;
                if (index === 0) rankHtml = `<span class="rank-badge rank-1">1</span>`;
                else if (index === 1) rankHtml = `<span class="rank-badge rank-2">2</span>`;
                else if (index === 2) rankHtml = `<span class="rank-badge rank-3">3</span>`;
                
                tr.innerHTML = `
                    <td>${rankHtml}</td>
                    <td><strong>${entry.name}</strong><br><small style="color:#94a3b8">${entry.section}</small></td>
                    <td>${entry.usn}</td>
                    <td><strong style="color:var(--primary-color)">${entry.score}</strong></td>
                    <td>${entry.timeTaken}s</td>
                    <td><button class="btn secondary-btn view-breakdown-btn" style="padding: 0.3rem 0.8rem; margin:0; font-size: 0.8rem;">View</button></td>
                `;
                
                // Add Breakdown logic
                const viewBtn = tr.querySelector('.view-breakdown-btn');
                viewBtn.addEventListener('click', () => showBreakdown(entry));
                
                leaderboardBody.appendChild(tr);
            });
        }, (error) => {
            console.error("Live listener error: ", error);
            leaderboardBody.innerHTML = '<tr><td colspan="6" style="text-align:center; color:red;">Live update error.</td></tr>';
        });
}

function showBreakdown(userData) {
    breakdownName.innerText = `${userData.name}'s Answers`;
    
    if (userData.answers && userData.answers.length > 0) {
        renderReviewAnswers(userData.answers, breakdownList);
    } else {
        breakdownList.innerHTML = '<p style="color:white; text-align:center;">No answer data recorded for this user.</p>';
    }
    
    breakdownOverlay.classList.remove('hidden');
}

btnClearData.addEventListener('click', async () => {
    if (confirm("Are you sure you want to delete all participant data? This cannot be undone.")) {
        try {
            const querySnapshot = await db.collection("leaderboard").get();
            const deletePromises = [];
            querySnapshot.forEach((docSnap) => {
                deletePromises.push(db.collection("leaderboard").doc(docSnap.id).delete());
            });
            await Promise.all(deletePromises);
            
            // Also clear announcements
            const annSnap = await db.collection("announcement").get();
            const annPromises = [];
            annSnap.forEach(docSnap => {
                annPromises.push(db.collection("announcement").doc(docSnap.id).delete());
            });
            await Promise.all(annPromises);

            console.log("All data cleared.");
        } catch (e) {
            console.error("Error clearing data: ", e);
            alert("Error clearing data.");
        }
    }
});
