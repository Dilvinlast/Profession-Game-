
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

// Keyboard navigation

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        changePage(1);
    }

    if (event.key === "ArrowLeft") {
        changePage(-1);
    }

});

// Show first page

showPage(0);
