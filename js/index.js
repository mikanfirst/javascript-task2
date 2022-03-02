
let score = 0;
  
function showScore() {

  const QUIZ_1 = document.getElementById("quiz_1");
  if (QUIZ_1.answer.value == 'b') {
    score++;
  }

  const QUIZ_2 = document.getElementById("quiz_2");
  if (QUIZ_2.answer.value == `b`) {
    score++;
  }

  const QUIZ_3 = document.getElementById("quiz_3");
  if (QUIZ_3.answer.value == `a`) {
    score++;
  }

  const QUIZ_4 = document.getElementById("quiz_4");
  if (QUIZ_4.answer.value == `b`) {
    score++;
  }

  const QUIZ_5 = document.getElementById("quiz_5");
  if (QUIZ_5.answer.value == `a`) {
    score++;
  }

  const totalScore = document.getElementById('score_message');

  if (score === 5) {
    totalScore.innerHTML = score + "点満点：秀才の極みだね！！";
  } else if(score === 4) {
    totalScore.innerHTML = score + "点：惜しかったね！悔しい？";
  } else if(score === 3) {
    totalScore.innerHTML = score + "点：平均です！";
  } else if(score === 2) {
    totalScore.innerHTML = score + "点：頑張れ！";
  } else if(score === 1) {
    totalScore.innerHTML = score + "点：残念！";
  } else {
    totalScore.innerHTML = score + "点：修行が足りん！！";
  }

}

// const correct = "正解です"
// const incorrect = "不正解です"

