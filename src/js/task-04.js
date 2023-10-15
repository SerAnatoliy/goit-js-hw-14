const refs = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    counter: document.querySelector("#value"),
};

let counterValue = 0;

refs.increment.addEventListener("click", addCounter);
refs.decrement.addEventListener("click", deleteCounter);

function addCounter() {
    refs.counter.textContent = counterValue += 1;
}

function deleteCounter() {
    refs.counter.textContent = counterValue -= 1;
}

refs.counter.innerHTML = counterValue;