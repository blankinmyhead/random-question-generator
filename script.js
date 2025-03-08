let personCount = 0;
const questions = [
    "가장 좋아하는 음식은?",
    "어릴 적 꿈은 무엇이었나요?",
    "최근에 가장 즐거웠던 일은?",
    "가장 기억에 남는 여행지는?",
    "나에게 힘이되는 말은?"
    // 여기에 원하는 질문들을 추가하세요.
];

function nextPage() {
    personCount = document.getElementById("personCount").value;
    if (personCount > 0) {
        document.getElementById("questionPage").style.display = "block";
    } else {
        alert("인원 수를 입력해주세요.");
    }
}

function generateQuestion() {
    const randomPerson = Math.floor(Math.random() * personCount) + 1;
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("questionResult").textContent = `${randomPerson}번 사람에게 질문! : ${randomQuestion}`;
}