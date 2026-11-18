
const labels = {
    horeca: "HORECA",
    retail: "RETAIL & TRADE",
    it: "IT & TECHNOLOGY",
    healthcare: "HEALTHCARE",
    education: "EDUCATION",
    beauty: "BEAUTY, WELLNESS & SPORT",
    construction: "CONSTRUCTION",
    transport: "TRANSPORTATION & LOGISTICS",
    media: "MEDIA & MARKETING",
    manufacturing: "MANUFACTURING"
};

const $ = id => document.getElementById(id);

const params = new URLSearchParams(window.location.search);
const job = params.get("job");

const allQuestions = window.PROFESSION_QUESTIONS || {};
const questions = allQuestions[job] || [];

let index = 0;
let bank = 0;
let seconds = 0;
let timerInterval = null;
let locked = false;
let currentAnswers = [];

$("industry").textContent = labels[job] || "PROFESSION";

function money(amount) {
    return "€" + amount.toLocaleString("en-IE");
}

function stopTimer() {
    if (timerInterval !== null) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

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

function updateTimeBar(totalSeconds) {
    const percent = totalSeconds > 0
        ? (seconds / totalSeconds) * 100
        : 0;

    $("timeFill").style.width = percent + "%";
}

function render() {
    stopTimer();
    locked = false;

    if (!questions.length) {
        $("question").textContent =
            "Questions not found. Please select a profession.";

        $("count").textContent = "No questions";
        $("timer").textContent = "—";
        $("level").textContent = "";
        $("answers").replaceChildren();
        $("timeFill").style.width = "0%";
        $("next").hidden = true;

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

    $("timer").textContent = seconds + " seconds";

    $("question").textContent = q.question;

    $("level").textContent =
        q.level + " · " + q.category;

    $("prize").textContent =
        money(q.prize) + " for a correct answer";

    $("bank").textContent = money(bank);

    $("feedback").hidden = true;
    $("next").hidden = true;
    $("answers").replaceChildren();

    updateTimeBar(q.seconds);

    // Shuffle answers and keep the correct one
    currentAnswers = shuffleAnswers(q);

    currentAnswers.forEach((answer, i) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer";

        const letter = document.createElement("span");
        letter.className = "letter";
        letter.textContent = "ABCD"[i];

        const content = document.createElement("span");
        content.textContent = answer.text;

        button.append(letter, content);

        button.addEventListener("click", () => {
            answerQuestion(i);
        });

        $("answers").appendChild(button);
    });

    timerInterval = setInterval(() => {
        seconds--;

        $("timer").textContent =
            Math.max(0, seconds) + " seconds";

        updateTimeBar(q.seconds);

        if (seconds <= 0) {
            answerQuestion(-1);
        }
    }, 1000);
}

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

    if (correct) {
        bank += q.prize;
    }

    $("bank").textContent = money(bank);

    $("feedback").replaceChildren();

    const heading = document.createElement("strong");

    if (choice === -1) {
        heading.textContent = "Time is up!";
    } else if (correct) {
        heading.textContent =
            "Correct! +" + money(q.prize);
    } else {
        heading.textContent = "Incorrect! +€0";
    }

    $("feedback").appendChild(heading);

    const answerText = document.createElement("p");
    const answerLabel = document.createElement("strong");

    answerLabel.textContent = "Correct answer: ";

    answerText.append(
        answerLabel,
        document.createTextNode(
            "ABCD"[correctIndex] + ". " +
            currentAnswers[correctIndex].text
        )
    );

    $("feedback").appendChild(answerText);

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

    $("hint").textContent =
        "Press Space or click Next to continue.";
}

function showResults() {
    stopTimer();
    locked = true;

    $("count").textContent = "Completed";
    $("timer").textContent = "—";
    $("level").textContent = "Game finished";

    $("question").textContent =
        "Congratulations! Your final capital is " +
        money(bank) + "!";

    $("bank").textContent = money(bank);

    $("answers").replaceChildren();

    $("feedback").hidden = false;
    $("feedback").textContent =
        "You have completed all " +
        questions.length + " questions.";

    $("next").hidden = true;
    $("timeFill").style.width = "100%";

    $("prize").textContent = "Game completed";

    $("hint").textContent =
        "Refresh the page to play again.";
}

function nextQuestion() {
    if (!locked || index >= questions.length) {
        return;
    }

    index++;
    render();
}

$("next").addEventListener("click", nextQuestion);

document.addEventListener("keydown", event => {
    if (
        event.code === "Space" &&
        locked &&
        index < questions.length
    ) {
        event.preventDefault();
        nextQuestion();
    }
});

render();
