/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro
ed emetto un messaggio in console con il numero della cella cliccata.
*/

const container = document.querySelector('.container');
const genBtn = document.querySelector('.gen-btn')





genBtn.addEventListener('click', function(){


  const difficult = document.querySelector('select')
  
  let nBox;
  
  if (difficult.value === 'hard'){
    nBox = 100;
  } else if (difficult.value === 'medium') {
    nBox = 81
  } else if (difficult.value === 'easy') {
    nBox = 49;
  }

  for (i = 0; i < nBox; i++) {
    let newBox;
    if (nBox == 100) {
      newBox = createBox('hard-box');
    } else if (nBox == 81) {
      newBox = createBox('medium-box');
    } else if (nBox == 49) {
      newBox = createBox('easy-box')
    }
    container.append(newBox);
    newBox.boxId = i;
    console.log(newBox.boxId);
    
    newBox.addEventListener('click', function () {
      this.classList.toggle('blue')
      console.log(this.boxId);
    })
  }

  genBtn.classList.add('hide')

})







//--------------------------------------------------------

function createBox (difficultBox) {
  const box = document.createElement('div');
  box.classList.add(difficultBox);
  return box;
}