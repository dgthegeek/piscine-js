export function generateletterDivs() {
    const body = document.body;
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < 120; i++) {
        const letterDiv = createLetterDiv(11 + i, letters);
        body.appendChild(letterDiv);
    }
}

function createLetterDiv(fontSize, letters) {
    const letterDiv = document.createElement("div");
    letterDiv.style.fontSize = `${fontSize}px`;

    const randomLetterIndex = Math.floor(Math.random() * letters.length);
    letterDiv.textContent = letters[randomLetterIndex];

    const fontWeight = i < 40 ? "300" : (i < 80 ? "400" : "600");
    letterDiv.style.fontWeight = fontWeight;

    return letterDiv;
}
