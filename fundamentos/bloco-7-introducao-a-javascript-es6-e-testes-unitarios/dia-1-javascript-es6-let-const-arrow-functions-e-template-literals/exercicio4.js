const button = document.querySelector('button');
const p = document.querySelector('#contador');
let contador = 0;
button.addEventListener('click', () => {
  contador += 1;
  p.innerHTML = contador;
});