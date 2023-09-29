document.addEventListener("keydown", compose);

export function compose(event) {
    if (!event) return;

    const key = event.key;

    if (/[a-z]/.test(key)) {
        const div = document.createElement("div");
        div.classList.add("note");
        div.style.backgroundColor = `rgb(${(255 / 26) * (key.charCodeAt(0) - 97)}, ${(255 / 26) * (key.charCodeAt(0) - 97)}, ${(255 / 26) * (key.charCodeAt(0) - 97)})`;
        div.textContent = key;
        document.body.appendChild(div);
    } else if (key === "Backspace") {
        let notes = document.getElementsByClassName("note");
        if (notes.length > 0) {
            notes[notes.length - 1].remove();
        }
    } else if (key === "Escape") {
        let notes = document.getElementsByClassName("note");
        while (notes.length > 0) {
            notes[0].remove();
        }
    }
}

