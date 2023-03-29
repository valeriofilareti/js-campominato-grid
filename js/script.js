/*
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro
ed emetto un messaggio in console con il numero della cella cliccata.
*/

const container = document.querySelector('.container');
const genBtn = document.querySelector('button')

genBtn.addEventListener('click', function(){
  for (i = 0; i < 100; i++) {
    const newBox = createBox();
    container.append(newBox);
    newBox.addEventListener('click', function () {
      this.classList.toggle('blue')
    })
  }
})



// const box = document.getElementsByClassName('box')


console.log(newBox);

//--------------------------------------------------------

function createBox () {
  const box = document.createElement('div');
  box.classList.add('box');
  return box;
}