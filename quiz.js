
const labels = {
    horeca: "HORECA",
    retail: "RETAIL / TRADE",
    it: "IT & TECHNOLOGY",
    healthcare: "HEALTHCARE",
    education: "EDUCATION",
    beauty: "BEAUTY, WELLNESS & SPORT",
    construction: "CONSTRUCTION",
    transport: "TRANSPORTATION / LOGISTICS",
    media: "MEDIA & MARKETING",
    manufacturing: "MANUFACTURING"
};

const job = new URLSearchParams(window.location.search).get("job");

const questions = window.PROFESSION_QUESTIONS?.[job];

const $ = id => document.getElementById(id);

let index = 0;
let bank = 0;
let seconds = 0;
let interval = null;
let locked = false;
let currentAnswers = [];

$("title").textContent = labels[job] || "PROFESSION NOT FOUND";

function money(n) {
    return "€" + n.toLocaleString("en-IE");
}

function stopTimer() {
    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }
}

// Randomly shuffle the answer positions
function shuffleAnswers(question) {
    const answers = question.answers.map((text, i) => ({
        text: text,
        isCorrect: i === question.correct
    }));

    for (let i = answers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [answers[i], answers[j]] = [answers[j], answers[i]];
    }

    return answers;
}

// Display the current question
function render() {
    stopTimer();
    locked = false;

    if (!questions || !questions.length) {
        $("question").textContent =
            "No questions available for this profession.";
        return;
    }

    if (index >= questions.length) {
        showResults();
        return;
    }

    const q = questions[index];

    seconds = q.seconds;

    $("count").textContent =
        `Question ${index + 1} / ${questions.length}`;

    $("level").textContent =
        `${q.level} · ${q.category}`;

    $("prize").textContent = money(q.prize);
    $("bank").textContent = money(bank);
    $("timer").textContent = seconds + "s";

    $("progress").style.width =
        (index / questions.length * 100) + "%";

    $("question").textContent = q.question;

    $("feedback").hidden = true;
    $("next").hidden = true;
    $("answers").replaceChildren();

    // Shuffle answers for every question
    currentAnswers = shuffleAnswers(q);

    currentAnswers.forEach((answer, i) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer";

        const letter = document.createElement("span");
        letter.className = "letter";
        letter.textContent = "ABCD"[i] + ".";

        const content = document.createElement("span");
        content.textContent = answer.text;

        button.append(letter, content);

        button.addEventListener("click", () => {
            answerQuestion(i);
        });

        $("answers").appendChild(button);
    });

    // Start timer
    interval = setInterval(() => {
        seconds--;

        $("timer").textContent = Math.max(0, seconds) + "s";

        if (seconds <= 0) {
            answerQuestion(-1);
        }
    }, 1000);
}

// Check the selected answer
function answerQuestion(choice) {
    if (locked) return;

    locked = true;
    stopTimer();

    const q = questions[index];

    const correctIndex = currentAnswers.findIndex(
        answer => answer.isCorrect
    );

    const correct = choice === correctIndex;

    const buttons = [...$("answers").children];

    buttons.forEach((button, i) => {
        button.disabled = true;

        if (i === correctIndex) {
            button.classList.add("correct");
        }

        if (i === choice && !correct) {
            button.classList.add("wrong");
        }
    });

    // Add money only for a correct answer
    if (correct) {
        bank += q.prize;
    }

    $("bank").textContent = money(bank);

    // Show feedback
    $("feedback").replaceChildren();

    const heading = document.createElement("strong");

    if (choice === -1) {
        heading.textContent = "Time is up!";
    } else if (correct) {
        heading.textContent = "Correct! +" + money(q.prize);
    } else {
        heading.textContent = "Not quite — +€0";
    }

    $("feedback").appendChild(heading);

    const correctAnswer = document.createElement("p");
    const correctLabel = document.createElement("strong");

    correctLabel.textContent = "Correct answer: ";

    correctAnswer.append(
        correctLabel,
        document.createTextNode(
            "ABCD"[correctIndex] + ". " +
            currentAnswers[correctIndex].text
        )
    );

    $("feedback").appendChild(correctAnswer);

    // Display Logic and Lesson
    [
        ["Logic", q.logic],
        ["Lesson", q.lesson]
    ].forEach(([label, value]) => {
        const paragraph = document.createElement("p");
        const strong = document.createElement("strong");

        strong.textContent = label + ": ";

        paragraph.append(
            strong,
            document.createTextNode(value)
        );

        $("feedback").appendChild(paragraph);
    });

    $("feedback").hidden = false;
    $("next").hidden = false;

    $("next").textContent =
        index === questions.length - 1
            ? "See final result →"
            : "Next question →";
}

// Final screen
function showResults() {
    stopTimer();
    locked = true;

    $("count").textContent = "Completed";
    $("level").textContent = "Game finished";
    $("timer").textContent = "—";
    $("prize").textContent = "—";
    $("bank").textContent = money(bank);

    $("progress").style.width = "100%";

    $("question").textContent =
        "Congratulations! Your final bank: " + money(bank);

    $("answers").replaceChildren();

    $("feedback").hidden = false;
    $("feedback").textContent =
        "You have completed all " +
        questions.length +
        " questions.";

    $("next").hidden = true;
}

// Next question
function nextQuestion() {
    if (!locked || !questions || index >= questions.length) {
        return;
    }

    index++;
    render();
}

$("next").addEventListener("click", nextQuestion);

// Space to continue after answering
document.addEventListener("keydown", event => {
    if (
        event.code === "Space" &&
        locked &&
        questions &&
        index < questions.length
    ) {
        event.preventDefault();
        nextQuestion();
    }
});

// Start the game
render();
