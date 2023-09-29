function generateletterDivs() {
    const body = document.body;

    const createLetterDiv = (fontSize, fontWeight) => {
        const letterDiv = document.createElement("div");
        letterDiv.style.fontSize = `${fontSize}px`;
        letterDiv.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        letterDiv.style.fontWeight = fontWeight;
        return letterDiv;
    };

    const determineFontWeight = (index) => {
        if (index < 40) return "300";
        if (index < 80) return "400";
        return "600";
    };

    for (let i = 0; i < 120; i++) {
        const fontSize = 11 + i;
        const fontWeight = determineFontWeight(i);
        const letterDiv = createLetterDiv(fontSize, fontWeight);
        body.appendChild(letterDiv);
    }
}
