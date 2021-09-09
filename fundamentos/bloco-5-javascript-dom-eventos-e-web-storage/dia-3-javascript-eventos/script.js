function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function implementsDays (){
    let daysList = document.querySelector('#days');
    for (let index = 0; index < dezDaysList.length; index += 1){
        let days = dezDaysList[index];
        let daysListItem = document.createElement('li');
        daysListItem.innerHTML = days;
        daysList.appendChild(daysListItem)
        if (days == 24 || days == 31){
            daysListItem.className = 'day holiday'
        } else if (days == 4 || days == 11 || days == 18 ){
            daysListItem.className = 'day friday'
        }else if (days == 25){
            daysListItem.className = 'day holiday friday';
        }
         else {
            daysListItem.className = 'day'
        }
    }
  }
  implementsDays();

  function implementsHolidays(feriados) {
      let elementId = document.querySelector('.buttons-container')
      let button = document.createElement('button');
      button.id = 'btn-holiday';
      button.innerText = feriados
      elementId.appendChild(button);
      button.addEventListener('click', function (){
          let feriados = document.querySelectorAll('.holiday');
          let backgroundColor = 'rgb(238,238,238)';
          let newColor = 'white';
          for (let index = 0; index < feriados.length; index += 1){
              let days = feriados[index]
           if (days.style.backgroundColor === newColor){
              days.style.backgroundColor = backgroundColor;
          } else {
              days.style.backgroundColor = newColor;
          }
        }
      })
  }
  implementsHolidays('Feriados!');
let elementFriday = document.querySelector('.buttons-container');
let buttonFriday = document.createElement('button');
buttonFriday.id = 'btn-friday'
elementFriday.appendChild(buttonFriday);
buttonFriday.innerHTML = "Sexta-Feira";
buttonFriday.addEventListener('click', implementsFriday)

  function implementsFriday(){
    let sextas = [4,11,18,25]
    let fridays = document.querySelectorAll('.friday');
    let text = 'Sextouuu!!!'
    for (let index = 0; index < fridays.length; index += 1){
        let days = fridays[index];
        console.log(days)
        if (days.innerHTML !== text){
            days.innerHTML = text;
        } else {
            days.innerHTML = sextas[index];
        }
    }
  }
  