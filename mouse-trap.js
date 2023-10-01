const circles = [];
let box;

class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diameter = 50;
        this.isTrapped = false;
        this.createCircleElement();
        this.addToCircles();
    }

    createCircleElement() {
        this.element = document.createElement("div");
        this.element.classList.add("circle");
        this.element.style.cssText = `position: absolute; top: ${this.y}px; left: ${this.x}px; background: white;`;
        this.updateTrappedState();
        document.body.appendChild(this.element);
    }

    move(x, y) {
        this.updateTrappedState();
        if (!this.isTrapped) {
            this.x = x;
            this.y = y;
            this.element.style.cssText = `position: absolute; top: ${this.y}px; left: ${this.x}px;`;
        } else {
            if (this.isInsideBox(x, y)) {
                this.x = x;
                this.y = y;
                this.element.style.cssText = `position: absolute; top: ${this.y}px; left: ${this.x}px;`;
            } else {
                if (this.isInsideBox(x, this.y)) {
                    this.x = x;
                    this.element.style.cssText = `position: absolute; left: ${this.x}px;`;
                } else if (this.isInsideBox(this.x, y)) {
                    this.y = y;
                    this.element.style.cssText = `position: absolute; top: ${this.y}px;`;
                }
            }
        }
    }

    updateTrappedState() {
        const { x, y, diameter } = this;
        const isInsideBox = x > box.x && x + diameter < box.x + box.width && y > box.y && y + diameter < box.y + box.height;
        this.isTrapped = isInsideBox;
        this.element.style.background = isInsideBox ? "var(--purple)" : "white";
    }

    isInsideBox(x, y) {
        const { x: bx, y: by, width, height, diameter } = box;
        return x > bx && x + diameter < bx + width && y > by && y + diameter < by + height;
    }
}

class Box {
    constructor() {
        this.createBoxElement();
        this.calculateDimensions();
    }

    createBoxElement() {
        this.element = document.createElement("div");
        this.element.classList.add("box");
        this.element.style.cssText = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);";
        document.body.appendChild(this.element);
    }

    calculateDimensions() {
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = this.element;
        this.x = offsetLeft - offsetWidth / 2 - 1;
        this.y = offsetTop - offsetHeight / 2 - 1;
        this.width = offsetWidth + 1;
        this.height = offsetHeight + 1;
    }
}

document.body.addEventListener("click", (e) => createCircleHandler(e));
document.body.addEventListener("mousemove", (e) => moveCircleHandler(e));

function createCircleHandler(e) {
    if (e === undefined) return;
    const circle = new Circle(e.clientX - 25, e.clientY - 25);
    circles.push(circle);
}

function moveCircleHandler(e) {
    if (e === undefined || circles.length === 0) return;
    circles[circles.length - 1].move(e.clientX - 25, e.clientY - 25);
}

function setBox() {
    box = new Box();
}

export { createCircleHandler as createCircle, moveCircleHandler as moveCircle, setBox };
