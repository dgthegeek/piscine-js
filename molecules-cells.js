function RNA(molecule) {
    const moleculeCh = molecule.split("");
    const RES = [];

    for (let i = 0; i < moleculeCh.length; i++) {
        switch (moleculeCh[i]) {
            case "G":
                RES.push("C");
                break;
            case "C":
                RES.push("G");
                break;
            case "T":
                RES.push("A");
                break;
            case "A":
                RES.push("U");
                break;
            default:
                break;
        }
    }

    return RES.join("");
}

function RNA(molecule) {
    const moleculeCh = molecule.split("");
    const RES = [];

    for (let i = 0; i < moleculeCh.length; i++) {
        switch (moleculeCh[i]) {
            case "C":
                RES.push("G");
                break;
            case "G":
                RES.push("C");
                break;
            case "A":
                RES.push("T");
                break;
            case "U":
                RES.push("A");
                break;
            default:
                break;
        }
    }

    return RES.join("");
}
