
const professions = {
    horeca: {
        title: "HORECA",
        subtitle: "Hospitality & Food Service",
        number: 8,
        questions: [
            {
                question: "What does HORECA stand for?",
                answers: [
                    "Hotels, Restaurants, Cafés",
                    "Hospitals, Retail, Careers",
                    "Homes, Recreation, Cars"
                ],
                correct: 0
            }
        ]
    },

    retail: {
        title: "RETAIL / TRADE",
        subtitle: "Retail & Commerce",
        number: 9,
        questions: []
    },

    it: {
        title: "IT & TECHNOLOGY",
        subtitle: "Information Technology",
        number: 10,
        questions: [
            {
                question: "Which language is used to structure web pages?",
                answers: [
                    "Python",
                    "HTML",
                    "C++"
                ],
                correct: 1
            }
        ]
    },

    healthcare: {
        title: "HEALTHCARE",
        subtitle: "Health & Medical Services",
        number: 11,
        questions: []
    },

    education: {
        title: "EDUCATION",
        subtitle: "Teaching & Learning",
        number: 12,
        questions: []
    },

    beauty: {
        title: "BEAUTY, WELLNESS & SPORT",
        subtitle: "Beauty, Health & Fitness",
        number: 13,
        questions: []
    },

    construction: {
        title: "CONSTRUCTION",
        subtitle: "Building & Engineering",
        number: 14,
        questions: []
    },

    transport: {
        title: "TRANSPORTATION / LOGISTICS",
        subtitle: "Transport & Supply Chain",
        number: 15,
        questions: []
    },

    media: {
        title: "MEDIA & MARKETING",
        subtitle: "Creative & Digital Media",
        number: 16,
        questions: []
    },

    manufacturing: {
        title: "MANUFACTURING",
        subtitle: "Production & Industry",
        number: 17,
        questions: []
    }
};

const params = new URLSearchParams(window.location.search);
const job = params.get("job");
const profession = professions[job];

const title = document.getElementById("professionTitle");
const subtitle = document.getElementById("professionSubtitle");
const number = document.getElementById("quizNumber");
const content = document.getElementById("quizContent");

if (!profession) {
    title.textContent = "PROFESSION NOT FOUND";
    subtitle.textContent = "Invalid profession";
    number.textContent = "?";
    content.textContent = "Please scan a valid QR code.";
} else {
    title.textContent = profession.title;
    subtitle.textContent = profession.subtitle;
    number.textContent = profession.number;

    if (profession.questions.length === 0) {
        content.textContent = "Questions coming soon!";
    } else {
        renderQuiz(profession.questions);
    }
}

function renderQuiz(questions) {
    const form = document.createElement("form");

    questions.forEach((q, index) => {
        const card = document.createElement("div");
        card.className = "question-card";

        const heading = document.createElement("h2");
        heading.textContent = `${index + 1}. ${q.question}`;
        card.appendChild(heading);

        q.answers.forEach((answer, answerIndex) => {
            const label = document.createElement("label");
            label.className = "answer";

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${index}`;
            input.value = answerIndex;
            input.required = true;

            label.appendChild(input);
            label.appendChild(
                document.createTextNode(answer)
            );

            card.appendChild(label);
        });

        form.appendChild(card);
    });

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Submit Answers";
    form.appendChild(button);

    const result = document.createElement("div");
    result.className = "result";
    form.appendChild(result);

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let score = 0;

        questions.forEach((q, index) => {
            const selected = form.querySelector(
                `input[name="question${index}"]:checked`
            );

            if (selected && Number(selected.value) === q.correct) {
                score++;
            }
        });

        result.textContent =
            `Your score: ${score} / ${questions.length}`;
    });

    content.appendChild(form);
}
