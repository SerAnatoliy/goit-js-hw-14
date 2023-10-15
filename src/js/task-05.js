const refs = {
    nameInput: document.querySelector("#name-input"),
    nameDefault: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", handleInput);

function handleInput(e) {
    if (!e.currentTarget.value) {
        refs.nameDefault.textContent = "Anonymous";
    } else {
        refs.nameDefault.textContent = e.currentTarget.value;
    }
}