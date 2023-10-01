import { gossips } from './data.js';

export function grid() {
    let changeContainer = document.createElement('div');
    changeContainer.className = 'ranges';

    let widthRange = document.createElement('input');
    widthRange.className = 'range';
    widthRange.id = 'width';
    widthRange.type = 'range';
    widthRange.value = '';
    widthRange.min = '200';
    widthRange.max = '800';
    widthRange.addEventListener('input', function () {
        let gossipElements = document.querySelectorAll('.gossip');
        gossipElements.forEach(element => {
            element.style.width = widthRange.value + 'px';
        });
    });

    let fontSizeRange = document.createElement('input');
    fontSizeRange.className = 'range';
    fontSizeRange.id = 'fontSize';
    fontSizeRange.type = 'range';
    fontSizeRange.min = '20';
    fontSizeRange.max = '40';
    fontSizeRange.value = '';
    fontSizeRange.addEventListener('input', function () {
        let gossipElements = document.querySelectorAll('.gossip');
        gossipElements.forEach(element => {
            element.style.fontSize = fontSizeRange.value + 'px';
        });
    });

    let backgroundRange = document.createElement('input');
    backgroundRange.className = 'range';
    backgroundRange.id = 'background';
    backgroundRange.type = 'range';
    backgroundRange.min = '20';
    backgroundRange.max = '75';
    backgroundRange.value = '';
    backgroundRange.addEventListener('input', function () {
        let gossipElements = document.querySelectorAll('.gossip');
        gossipElements.forEach(element => {
            element.style.background = " hsl(280, 50%," + backgroundRange.value + "%)";
        });
    });

    changeContainer.appendChild(widthRange);
    changeContainer.appendChild(fontSizeRange);
    changeContainer.appendChild(backgroundRange);
    document.body.appendChild(changeContainer);

    let shareForm = document.createElement("form");
    shareForm.className = "gossip";
    document.body.appendChild(shareForm);

    let textarea = document.createElement("textarea");
    textarea.setAttribute("placeholder", "Got a gossip to share?");
    shareForm.appendChild(textarea);

    let button = document.createElement("button");
    button.innerHTML = "Share gossip!";
    shareForm.appendChild(button);

    button.addEventListener("click", function () {
        let value = textarea.value;
        let gossipElement = document.createElement('div');
        gossipElement.className = "gossip";
        gossipElement.textContent = value;
        document.body.insertBefore(gossipElement, document.querySelectorAll('.gossip')[1]);
        textarea.value = "";
        event.preventDefault();
    });

    addGossipItems(gossips);
}

function addGossipItems(gossipData) {
    gossipData.forEach(item => {
        let gossipElement = document.createElement('div');
        gossipElement.className = "gossip";
        gossipElement.innerHTML = item;
        document.body.appendChild(gossipElement);
    });
}
