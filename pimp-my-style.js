import { styles } from './pimp-my-style.data.js';

let counter = 0; 

export function pimp() {
    const button = document.querySelector("button");
    const isUnpimped = button.classList.contains("unpimp");
    
    button.classList.add(styles[counter]);
    counter++;

    if (counter === styles.length) {
        button.classList.add("unpimp"); 
    }

    if (isUnpimped) {
        button.classList.remove("unpimp");
        button.classList.remove(styles[counter]); 
        counter--;

        if (counter < 0) {
            counter = 0; 
        }
    } 
}
