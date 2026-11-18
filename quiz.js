
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

$("industry").textContent = labels[job] || "PROFESSION NOT FOUND";

function money(n) {
    return "€" + n.toLocaleString("en-IE");
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function setTime() {
    $("timer").textContent = seconds + " seconds";

    const total = questions[index]?.seconds || 1;

    $("timeFill").style.width =
        (Math.max(0, seconds) / total * 100) + "%";
}

function render() {
    stopTimer();
    locked = false;

    if (!questions || !questions.length) {
        $("question").textContent =
            "No questions available for this profession.";

        $("count").textContent = "Not found";
        $("timer").textContent = "—";
        $("answers").replaceChildren();
        return;
    }

    if (index >= questions.length) {
        $("count").textContent = "Completed";
        $("level").textContent = "All questions finished";
        $("timer").textContent = "—";
        $("timeFill").style.width = "0%";

        $("question").textContent =
            "Game complete! Your final capital: " + money(bank);

        $("answers").replaceChildren();

        $("feedback").hidden = false;
        $("feedback").textContent =
            "You have completed all " + questions.length + " questions.";

        $("next").hidden = true;
        $("prize").textContent = "Thanks for playing!";

        $("hint").textContent =
            "Return to the industry list to play another profession.";

        return;
    }

    const q = questions[index];

    seconds = q.seconds;

    $("count").textContent =
        `Question ${index + 1} of ${questions.length}`;

    $("level").textContent =
        `${q.level} · ${q.category}`;

    $("prize").textContent =
        money(q.prize) + " for a correct answer";

    $("bank").textContent = money(bank);
    $("question").textContent = q.question;

    $("feedback").hidden = true;
    $("next").hidden = true;
    $("answers").replaceChildren();

    setTime();

    q.answers.forEach((answerText, i) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "answer";

        const letter = document.createElement("span");
        letter.className = "letter";
        letter.textContent = "ABCD"[i];

        const content = document.createElement("span");
        content.textContent = answerText;

        button.append(letter, content);

        button.addEventListener("click", () => answer(i));

        $("answers").appendChild(button);
    });

    interval = setInterval(() => {
        seconds = Math.max(0, seconds - 1);
        setTime();

        if (seconds === 0) {
            answer(-1);
        }
    }, 1000);
}

function answer(choice) {
    if (locked) return;

    locked = true;
    stopTimer();

    const q = questions[index];
    const correct = choice === q.correct;

    [...$("answers").children].forEach((button, i) => {
        button.disabled = true;

        if (i === q.correct) {
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
        heading.textContent = "Correct! +" + money(q.prize);
    } else {
        heading.textContent = "Incorrect · +€0";
    }

    $("feedback").appendChild(heading);

    const explanations = [
        ["Logic", q.logic],
        ["Lesson", q.lesson]
    ];

    explanations.forEach(([label, value]) => {
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

function nextQuestion() {
    if (!locked || !questions || index >= questions.length) {
        return;
    }

    index++;
    render();
}

$("next").addEventListener("click", nextQuestion);

document.addEventListener("keydown", event => {
    if (
        (event.code === "Space" || event.key === " ") &&
        locked &&
        event.target.tagName !== "BUTTON"
    ) {
        event.preventDefault();
        nextQuestion();
    }
});

render();
