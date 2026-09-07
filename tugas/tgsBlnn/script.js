let gameVotes = 0;
let storeVotes = 0;
let todoVotes = 0;
let quizVotes = 0;

const totalVotesText = document.querySelector("#totalVotesText");
const feedbackAlert = document.querySelector("#feedbackAlert");

function updateTotal() {
    let total = gameVotes + storeVotes + todoVotes + quizVotes;
    totalVotesText.textContent = `Total Votes: ${total}`;
}

const gameButton = document.querySelector("#gameBtn");
const gameVoteText = document.querySelector("#gameVotes");

gameButton.addEventListener("click", function () {
    gameVotes++;
    gameVoteText.textContent = `Votes: ${gameVotes}`;
    updateTotal();
    feedbackAlert.textContent = "🎉 Kamu memilih Mini Game 🎮";
});

const storeButton = document.querySelector("#storeBtn");
const storeVoteText = document.querySelector("#storeVotes");

storeButton.addEventListener("click", function () {
    storeVotes++;
    storeVoteText.textContent = `Votes: ${storeVotes}`;
    updateTotal();
    feedbackAlert.textContent = "🎉 Kamu memilih Mini Store 🛒";
});

const todoButton = document.querySelector("#todoBtn");
const todoVoteText = document.querySelector("#todoVotes");

todoButton.addEventListener("click", function () {
    todoVotes++;
    todoVoteText.textContent = `Votes: ${todoVotes}`;
    updateTotal();
    feedbackAlert.textContent = "🎉 Kamu memilih To-Do App 📝";
});

const quizButton = document.querySelector("#quizBtn");
const quizVoteText = document.querySelector("#quizVotes");

quizButton.addEventListener("click", function () {
    quizVotes++;
    quizVoteText.textContent = `Votes: ${quizVotes}`;
    updateTotal();
    feedbackAlert.textContent = "🎉 Kamu memilih Quiz App 🧠";
});
