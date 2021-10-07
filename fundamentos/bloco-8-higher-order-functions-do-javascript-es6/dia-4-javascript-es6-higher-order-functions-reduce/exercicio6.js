const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


const calculateAverage = (index => (grades[index].reduce((result, actual) => result + actual,0)) / grades[index].length)
function studentAverage() {
  // escreva seu código aqui
  const objNamesAndAverage = students.map((student, index) => ({
    name: student,
    average: calculateAverage(index),
  }))
  return objNamesAndAverage
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage())