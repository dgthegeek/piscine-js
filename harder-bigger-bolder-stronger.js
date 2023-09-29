export function generateletterDivs() {
    const body = document.getElementsByTagName("body")[0]

    for (let i = 0; i < 120; i++) {
        const letterDiv = document.createElement("div")
        const fontSize = 11 + i
        letterDiv.style.fontSize = `${fontSize}px`
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        letterDiv.textContent = letters[Math.floor(Math.random() * letters.length)]


        if (i < 40) {
            letterDiv.style.fontWeight = "300"
        } else if (i < 80) {
            letterDiv.style.fontWeight = "400"
        } else {
            letterDiv.style.fontWeight = "600"
        }

        body.appendChild(letterDiv)
    }
}
