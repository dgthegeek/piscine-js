import { colors } from "./fifty-shades-of-cold.data.js";

export function generateClasses() {
    const head = document.getElementsByTagName("head")[0];
    const style = document.createElement("style");
    style.innerHTML = colors.map(color => `.${color} { background: ${color}; }\n`).join('');
    head.appendChild(style);
}

export function generateColdShades() {
    const body = document.getElementsByTagName("body")[0];
    colors.filter(color => /(aqua|blue|turquoise|green|cyan|navy|purple)/.test(color))
          .forEach(color => {
              const div = document.createElement("div");
              div.classList.add(color);
              div.textContent = color;
              body.appendChild(div);
          });
}

export function choseShade(shade) {
    document.querySelectorAll("div").forEach(div => {
        div.className = shade;
    });
}

