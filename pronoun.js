function pronoun(str) {
    const pronouns = ["i", "you", "he", "she", "it", "they", "we"]
    const obj = {}

    const words = str.split(/\s+/)

    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase()

        if (pronouns.includes(word)) {
            const nextWord = words[i + 1]?.replace(/[,;]/, '')
            if (!obj[word]) {
                obj[word] = { count: 0, word: [] }
            }
            obj[word].count++
            if (nextWord && !pronouns.includes(nextWord)){
                obj[word].word.push(nextWord)
            }
        }
    }

    return obj
}

console.log(pronoun(`it i it she is gone`))