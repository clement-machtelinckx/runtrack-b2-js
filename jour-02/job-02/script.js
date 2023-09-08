

function myAddCount () {

    const counterDisplay = document.getElementById('count-displayer');

    let currentValue = Number(counterDisplay.textContent);
    currentValue++;

    counterDisplay.textContent = currentValue;
}

document.getElementById('add-count-btn').addEventListener('click', myAddCount);