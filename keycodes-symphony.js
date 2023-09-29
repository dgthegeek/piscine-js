document.addEventListener("keydown", compose);

function compose(event) {
    if (!event) return;

    const key = event.key;
    const notes = document.getElementsByClassName("note");

    if (/[a-z]/.test(key)) {
        const colorValue = (255 / 26) * (key.charCodeAt(0) - 97);
        const rgbColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

        const div = document.createElement("div");
        div.classList.add("note");
        div.style.backgroundColor = rgbColor;
        div.textContent = key;

        document.body.appendChild(div);
    } else if (key === "Backspace" && notes.length > 0) {
        notes[notes.length - 1].remove();
    } else if (key === "Escape") {
        while (notes.length > 0) {
            notes[0].remove();
        }
    }
}

export { compose };
