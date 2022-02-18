const question = document.querySelector(".question");
const questionText = document.querySelector("h3");
const answer = document.querySelector(".answer");
const arrow = document.querySelector(".arrow");

question.addEventListener("click", function () {
    if (answer.classList.contains("hide")) {
        answer.classList.remove("hide");
        questionText.style.fontWeight = 700;
        arrow.style.transform = "rotate(180deg)";
    } else {
        answer.classList.add("hide");
        questionText.style.fontWeight=400;
        arrow.style.transform = "rotate(0deg)";
    };
});