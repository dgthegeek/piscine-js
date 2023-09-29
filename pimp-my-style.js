import { styles } from './pimp-my-style.data.js';

let counter = 0;

export function pimp() {
    const button = document.querySelector("button");
    const isUnpimped = button.classList.contains("unpimp");
    if (isUnpimped) {
        counter--;
        button.classList.remove(styles[counter]);

        if (counter === 0) {
            counter = 0;
            button.classList.remove("unpimp");

        }
    } else {
        button.classList.add(styles[counter]);
        counter++;
        if (counter === styles.length - 1) {
            button.classList.add("unpimp");
        }
    }

}