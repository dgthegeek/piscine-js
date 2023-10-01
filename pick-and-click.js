export function pick() {
    let textDiv = document.createElement("div");
    textDiv.className = "text";
    textDiv.classList.add("hsl");
    document.body.appendChild(textDiv);

    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttributeNS(null, 'height', window.innerHeight);
    svg.setAttributeNS(null, 'width', window.innerWidth);

    let axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisX.setAttributeNS(null, 'id', 'axisX');
    axisX.setAttributeNS(null, 'x1', 0);
    axisX.setAttributeNS(null, 'y1', 0);
    axisX.setAttributeNS(null, 'x2', 0);
    axisX.setAttributeNS(null, 'y2', 0);
    axisX.style.stroke = "white";
    axisX.style.strokeWidth = 1;

    let axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    axisY.setAttributeNS(null, 'id', 'axisY');
    axisY.setAttributeNS(null, 'x1', 0);
    axisY.setAttributeNS(null, 'y1', 0);
    axisY.setAttributeNS(null, 'x2', 0);
    axisY.setAttributeNS(null, 'y2', 0);
    axisY.style.stroke = "white";
    axisY.style.strokeWidth = 1;

    svg.appendChild(axisX);
    svg.appendChild(axisY);

    document.body.appendChild(svg);

    addEventListener("mousemove", e => {
        document.querySelectorAll(".hue", ".hsl").forEach(elem => {
            elem.remove();
        });
        document.querySelectorAll(".hsl").forEach(elem => {
            elem.remove();
        });
        document.querySelectorAll(".luminosity").forEach(elem => {
            elem.remove();
        });

        let axisX = document.getElementById('axisX');
        let axisY = document.getElementById('axisY');

        axisX.setAttributeNS(null, 'x1', 0);
        axisX.setAttributeNS(null, 'y1', e.clientY);
        axisX.setAttributeNS(null, 'x2', window.innerWidth);
        axisX.setAttributeNS(null, 'y2', e.clientY);

        axisY.setAttributeNS(null, 'x1', e.clientX);
        axisY.setAttributeNS(null, 'y1', 0);
        axisY.setAttributeNS(null, 'x2', e.clientX);
        axisY.setAttributeNS(null, 'y2', window.innerHeight);

        let hueValue = Math.round(e.clientX / window.innerWidth * 360);
        let luminosityValue = Math.round(e.clientY / window.innerHeight * 100);

        document.body.style.background = "hsl(" + hueValue + ",50%," + luminosityValue + "%)";

        let hueDiv = document.createElement("div");
        hueDiv.className = "hue";
        hueDiv.classList.add("text");
        hueDiv.innerHTML = "hue" + "<br>" + hueValue;
        document.body.appendChild(hueDiv);

        let hslDiv = document.createElement("div");
        hslDiv.className = "hsl";
        hslDiv.classList.add("text");
        hslDiv.innerHTML = "hsl(" + hueValue + ", 50%, " + luminosityValue + "%)";
        document.body.appendChild(hslDiv);

        let luminosityDiv = document.createElement("div");
        luminosityDiv.className = "luminosity";
        luminosityDiv.classList.add("text");
        luminosityDiv.innerHTML = luminosityValue + "<br>luminosity";
        document.body.appendChild(luminosityDiv);
    });

    addEventListener("click", e => {
        let hslValue = document.getElementsByClassName('hsl')[0].innerHTML;
        let input = document.createElement('input');
        document.body.appendChild(input);
        input.value = hslValue;
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    });
}
