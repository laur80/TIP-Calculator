const button = document.querySelector('button');
const output = document.querySelector('.output');
let cost = document.querySelector('input');

function tipButton() {
  const tip = (cost.value * 0.1).toFixed(2);
  let temp = '<h1>You should tip $' + tip + ' on $' + cost.value + '</h1>';
  output.innerHTML = temp;
  cost.value = '';
}
function tipKeyboard(event) {
  if (event.keyCode === 13) {
    const tip = (cost.value * 0.1).toFixed(2);
    let temp = '<h1>You should tip $' + tip + ' on $' + cost.value + '</h1>';
    output.innerHTML = temp;
    cost.value = '';
  }
}

button.addEventListener('click', tipButton);
cost.addEventListener('keypress', tipKeyboard);
