const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correctAnswers = (RIGHT_ANSWERS, STUDENT_ANSWERS, callBack) => {
  let cont = 0;
  for(let i = 0; i < RIGHT_ANSWERS.length; i += 1) {
    const callBackReturn = callBack(RIGHT_ANSWERS[i], STUDENT_ANSWERS[i]);
    cont += callBackReturn;
  }
  return `Resultado da nota: ${cont}`;
}
const correct = (r, students) => {
  if (r === students) {
    return 1;
  } if (r === 'N.A') {
    return 0;
  }
  return -0.5;
}
console.log(correctAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, correct))
