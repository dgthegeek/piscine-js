export function pick() {
    let textElem = document.createElement("div");
    textElem.className = "text";
    textElem.classList.add("hsl");
    document.body.appendChild(textElem);

    let svgElem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElem.setAttributeNS(null, 'height', window.innerHeight);
    svgElem.setAttributeNS(null, 'width', window.innerWidth);

    let xLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xLine.setAttributeNS(null, 'id', 'axisX');
    xLine.setAttributeNS(null, 'x1', 0);
    xLine.setAttributeNS(null, 'y1', 0);
    xLine.setAttributeNS(null, 'x2', 0);
    xLine.setAttributeNS(null, 'y2', 0);
    xLine.style.stroke = "white";
    xLine.style.strokeWidth = 1;

    let yLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yLine.setAttributeNS(null, 'id', 'axisY');
    yLine.setAttributeNS(null, 'x1', 0);
    yLine.setAttributeNS(null, 'y1', 0);
    yLine.setAttributeNS(null, 'x2', 0);
    yLine.setAttributeNS(null, 'y2', 0);
    yLine.style.stroke = "white";
    yLine.style.strokeWidth = 1;

    svgElem.appendChild(xLine);
    svgElem.appendChild(yLine);

    document.body.appendChild(svgElem);

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

        let xLine = document.getElementById('axisX');
        let yLine = document.getElementById('axisY');

        xLine.setAttributeNS(null, 'x1', 0);
        xLine.setAttributeNS(null, 'y1', e.clientY);
        xLine.setAttributeNS(null, 'x2', window.innerWidth);
        xLine.setAttributeNS(null, 'y2', e.clientY);

        yLine.setAttributeNS(null, 'x1', e.clientX);
        yLine.setAttributeNS(null, 'y1', 0);
        yLine.setAttributeNS(null, 'x2', e.clientX);
        yLine.setAttributeNS(null, 'y2', window.innerHeight);

        let hueVal = Math.round(e.clientX / window.innerWidth * 360);
        let luminosityVal = Math.round(e.clientY / window.innerHeight * 100);

        document.body.style.background = "hsl(" + hueVal + ",50%," + luminosityVal + "%)";

        let hueElem = document.createElement("div");
        hueElem.className = "hue";
        hueElem.classList.add("text");
        hueElem.innerHTML = "hue" + "<br>" + hueVal;
        document.body.appendChild(hueElem);

        let hslElem = document.createElement("div");
        hslElem.className = "hsl";
        hslElem.classList.add("text");
        hslElem.innerHTML = "hsl(" + hueVal + ", 50%, " + luminosityVal + "%)";
        document.body.appendChild(hslElem);

        let luminosityElem = document.createElement("div");
        luminosityElem.className = "luminosity";
        luminosityElem.classList.add("text");
        luminosityElem.innerHTML = luminosityVal + "<br>luminosity";
        document.body.appendChild(luminosityElem);
    });

    addEventListener("click", e => {
        let hslValue = document.getElementsByClassName('hsl')[0].innerHTML;
        let inputElem = document.createElement('input');
        document.body.appendChild(inputElem);
        inputElem.value = hslValue;
        inputElem.select();
        document.execCommand('copy');
        document.body.removeChild(inputElem);
    });
}
