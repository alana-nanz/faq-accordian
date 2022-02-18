const question = document.querySelector(".question");
const questionText = document.querySelector("h3");
const answer = document.querySelector(".answer");

question.addEventListener("click", function () {
    answer.classList.remove("hide");
    questionText.style.fontWeight = 700;
});

