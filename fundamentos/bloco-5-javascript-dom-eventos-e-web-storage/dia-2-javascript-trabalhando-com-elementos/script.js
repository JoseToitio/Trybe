// Tarefa 1
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.querySelector('body').appendChild(h1);
// Tarefa 2
let main = document.createElement('main');
main.className = 'main-content';
document.querySelector('body').appendChild(main);
// Tarefa 3
let section = document.createElement('section');
section.className = 'center-content';
document.querySelector('.main-content').appendChild(section);
// Tarefa 4
let sectionParagrafo = document.createElement('p');
sectionParagrafo.innerText = 'Paragrafo do section da main'
document.querySelector('.center-content').appendChild(sectionParagrafo);
//Tarefa 5
let sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
document.querySelector('.main-content').appendChild(sectionLeft);
// Tarefa 6
let sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
document.querySelector('.main-content').appendChild(sectionRight);
// Tarefa 7
let imageSectionLeft = document.createElement('img');
imageSectionLeft.src = 'https://picsum.photos/200';
document.querySelector('.left-content').appendChild(imageSectionLeft);
// Tarefa 8
let lista = ['um','dois','três','quartro','cinco','seis','sete','oito','nove','dez']
let listUnOrdered = document.createElement('ul');
document.querySelector('.right-content').append(listUnOrdered)
for ( let index = 0; index < lista.length; index += 1){
    let list = lista[index];
    let li = document.createElement('li');
    li.innerHTML = list;
    document.querySelector('ul').appendChild(li);
}
// Tarefa 9
for (let index = 0; index < 3; index +=1){
    let tagH3 = document.createElement('h3');
    document.querySelector('.main-content').appendChild(tagH3)
}
// Alterações e remoções
// Tarefa 1
h1.className = 'title';
// Tarefa 2
let tagH3 = document.querySelectorAll('h3');
for (let index = 0; index < tagH3.length; index += 1){
    tagH3[index].className = 'description';
}
// Tarefa 3
document.querySelector('main').removeChild(sectionLeft);
// Tarefa 4
document.querySelector('.right-content').style.marginRight = 'auto';
// Tarefa 5
document.querySelector('.center-content').parentNode.style.backgroundColor = '#7777'
// Tarefa 6
listUnOrdered.lastChild.remove()
listUnOrdered.lastChild.remove()