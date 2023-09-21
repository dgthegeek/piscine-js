function RNA(DNAS) {
    const DNAS = DNAS.split("");
    const RES = [];

    for (let i = 0; i < DNAS.length; i++) {
        switch (DNAS[i]) {
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

function RNA(RNAS) {
    const RNAS = RNAS.split("");
    const RES = [];

    for (let i = 0; i < RNAS.length; i++) {
        switch (RNAS[i]) {
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
