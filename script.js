
// PAGE NAVIGATION

let currentPage = 0;

const pages = document.querySelectorAll(".page");
const indicator = document.getElementById("pageIndicator");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showPage(index) {
    if (index < 0 || index >= pages.length) {
        return;
    }

    pages.forEach(page => {
        page.classList.remove("active");
    });

    pages[index].classList.add("active");

    currentPage = index;

    indicator.textContent =
        `${currentPage + 1} / ${pages.length}`;

    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;

    window.scrollTo(0, 0);
}

function changePage(direction) {
    showPage(currentPage + direction);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        changePage(1);
    }

    if (event.key === "ArrowLeft") {
        changePage(-1);
    }
});

showPage(0);


// QR CODE GENERATION

const websiteURL =
    "https://dilvinlast.github.io/Profession-Game-/";

document.querySelectorAll(".qr-container").forEach(container => {
    const job = container.dataset.job;
    const qrElement = container.querySelector(".qr-code");

    const quizURL =
        `${websiteURL}quiz.html?job=${encodeURIComponent(job)}`;

    if (typeof QRCode !== "undefined") {
        new QRCode(qrElement, {
            text: quizURL,
            width: 190,
            height: 190,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.M
        });
    } else {
        qrElement.textContent = "QR code unavailable";
    }

    // Clicking the QR area opens the quiz too
    container.style.cursor = "pointer";

    container.addEventListener("click", function() {
        window.location.href = quizURL;
    });
});
