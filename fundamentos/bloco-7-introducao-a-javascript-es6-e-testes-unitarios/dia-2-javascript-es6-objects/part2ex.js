const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

function addTurno(obj, key, value) {
  obj[key] = value;
  console.log(lesson2)
}
// addTurno(lesson2, 'turno', 'noite')

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listKeys(obj) {
  return Object.keys(obj)
}
// console.log(listKeys(lesson3));

// Crie uma função para mostrar o tamanho de um objeto.
function objLength(obj) {
  console.log(Object.keys(obj).length);
}
// objLength(lesson1)

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro

const values = (obj) => Object.values(obj);
// console.log(values(lesson1))

//Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {
  lesson1,
  lesson2,
  lesson3
});
// console.log(allLessons);


//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const allStudents = (obj) => `${obj.lesson1.numeroEstudantes+obj.lesson2.numeroEstudantes+obj.lesson3.numeroEstudantes}`

// console.log(allStudents(allLessons))

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
function valueKey(obj, key) {
  const obejeto = Object.values(obj)[key];
  return obejeto
}

// console.log(valueKey(lesson1, 0));

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifica = (obj, key, value) => {
  const arr = Object.entries(obj);
  console.log(arr[2][0])
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value) {
      return true;
    }
  }
  return false;
}
// console.log(verifica(lesson2, 'professor', 'Carlos'));

//Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const aulasMat = (obj) => {
  const arr = Object.keys(obj);
  let total = 0;
  for (let i in arr) {
    if (obj[arr[i]].materia === 'Matemática') {
      total += obj[arr[i]].numeroEstudantes;
    }
  }
  return total;
}
// console.log(aulasMat(allLessons))

//Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const infoProf = (obj, prof) => {
  const allLessonss = [];
  let allStudents = 0;
  const array = Object.values(obj);
  for (let i in array) {
    if (array[i].professor === prof) {
      allLessonss.push(array[i].materia)
      allStudents += array[i].numeroEstudantes;
    }
  }
  return { lessons: allLessonss, estudantes: allStudents };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, infoProf(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
