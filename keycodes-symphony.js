document.addEventListener("keydown", function (event) {
    compose(event);
});

export function compose(e) {
    if (e === undefined) {
        return;
    }
    if (
        [...Array(26).keys()].map((i) => i + 97).includes(e.key.charCodeAt(0))
    ) {
        let noteDiv = document.createElement("div");
        noteDiv.classList.add("note");
        noteDiv.style.backgroundColor = `rgb(${
            (255 / 26) * (e.key.charCodeAt(0) - 97)
        }, ${(255 / 26) * (e.key.charCodeAt(0) - 97)}, ${
            (255 / 26) * (e.key.charCodeAt(0) - 97)
        })`;
        noteDiv.innerHTML = e.key;
        document.body.appendChild(noteDiv);
    } else if (e.key === "Backspace") {
        let notes = document.getElementsByClassName("note");
        if (notes.length > 0) {
            notes[notes.length - 1].remove();
        }
    } else if (e.key === "Escape") {
        let notes = document.getElementsByClassName("note");
        while (notes.length > 0) {
            notes[0].remove();
        }
    }
}


