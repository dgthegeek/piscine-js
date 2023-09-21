function RNA(dna) {
    const dna = dna.split("");
    const rna = [];

    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case "G":
                rna.push("C");
                break;
            case "C":
                rna.push("G");
                break;
            case "T":
                rna.push("A");
                break;
            case "A":
                rna.push("U");
                break;
            default:
                break;
        }
    }

    return rna.join("");
}

function DNA(rna) {
    const rna = rna.split("");
    const dna = [];

    for (let i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case "C":
                dna.push("G");
                break;
            case "G":
                dna.push("C");
                break;
            case "A":
                dna.push("T");
                break;
            case "U":
                dna.push("A");
                break;
            default:
                break;
        }
    }

    return dna.join("");
}
