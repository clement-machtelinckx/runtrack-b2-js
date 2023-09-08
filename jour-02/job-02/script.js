const addCountBtn = document.getElementById('add-count-btn');
const display = document.getElementById('count-displayer');

let count = 0;

display.innerHTML = count;

addCountBtn.addEventListener('click', function() {

    count++;

    display.innerHTML = count;
});