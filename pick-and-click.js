export function pick() {
    let textElement = document.createElement("div");
    textElement.className = "text";
    textElement.classList.add("hsl");
    document.body.appendChild(textElement);

    let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.setAttributeNS(null, 'height', window.innerHeight);
    svgElement.setAttributeNS(null, 'width', window.innerWidth);

    let xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    xAxis.setAttributeNS(null, 'id', 'axisX');
    xAxis.setAttributeNS(null, 'x1', 0);
    xAxis.setAttributeNS(null, 'y1', 0);
    xAxis.setAttributeNS(null, 'x2', 0);
    xAxis.setAttributeNS(null, 'y2', 0);
    xAxis.style.stroke = "white";
    xAxis.style.strokeWidth = 1;

    let yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    yAxis.setAttributeNS(null, 'id', 'axisY');
    yAxis.setAttributeNS(null, 'x1', 0);
    yAxis.setAttributeNS(null, 'y1', 0);
    yAxis.setAttributeNS(null, 'x2', 0);
    yAxis.setAttributeNS(null, 'y2', 0);
    yAxis.style.stroke = "white";
    yAxis.style.strokeWidth = 1;

    svgElement.appendChild(xAxis);
    svgElement.appendChild(yAxis);

    document.body.appendChild(svgElement);

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

        let xAxis = document.getElementById('axisX');
        let yAxis = document.getElementById('axisY');

        xAxis.setAttributeNS(null, 'x1', 0);
        xAxis.setAttributeNS(null, 'y1', e.clientY);
        xAxis.setAttributeNS(null, 'x2', window.innerWidth);
        xAxis.setAttributeNS(null, 'y2', e.clientY);

        yAxis.setAttributeNS(null, 'x1', e.clientX);
        yAxis.setAttributeNS(null, 'y1', 0);
        yAxis.setAttributeNS(null, 'x2', e.clientX);
        yAxis.setAttributeNS(null, 'y2', window.innerHeight);

        let hueValue = Math.round(e.clientX / window.innerWidth * 360);
        let luminosityValue = Math.round(e.clientY / window.innerHeight * 100);

        document.body.style.background = "hsl(" + hueValue + ",50%," + luminosityValue + "%)";

        let hueElement = document.createElement("div");
        hueElement.className = "hue";
        hueElement.classList.add("text");
        hueElement.innerHTML = "hue" + "<br>" + hueValue;
        document.body.appendChild(hueElement);

        let hslElement = document.createElement("div");
        hslElement.className = "hsl";
        hslElement.classList.add("text");
        hslElement.innerHTML = "hsl(" + hueValue + ", 50%, " + luminosityValue + "%)";
        document.body.appendChild(hslElement);

        let luminosityElement = document.createElement("div");
        luminosityElement.className = "luminosity";
        luminosityElement.classList.add("text");
        luminosityElement.innerHTML = luminosityValue + "<br>luminosity";
        document.body.appendChild(luminosityElement);
    });

    addEventListener("click", e => {
        let hslValue = document.getElementsByClassName('hsl')[0].innerHTML;
        let inputElement = document.createElement('input');
        document.body.appendChild(inputElement);
        inputElement.value = hslValue;
        inputElement.select();
        document.execCommand('copy');
        document.body.removeChild(inputElement);
    });
}
