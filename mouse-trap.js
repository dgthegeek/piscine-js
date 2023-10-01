const circles = [];
let box;

class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diameter = 50;
        this.isTrapped = false;
        this.HTML = null;
        this.draw();
        circles.push(this);
    }

    draw() {
        this.createCircleElement();
        this.updatePosition();
        this.trapped();
    }

    createCircleElement() {
        this.HTML = document.createElement("div");
        this.HTML.classList.add("circle");
        this.HTML.style.cssText = `
            position: absolute;
            background: white;
        `;
        document.body.appendChild(this.HTML);
    }

    updatePosition() {
        this.HTML.style.top = this.y + "px";
        this.HTML.style.left = this.x + "px";
    }

    move(x, y) {
        this.trapped();
        if (!this.isTrapped) {
            this.x = x;
            this.y = y;
            this.updatePosition();
        } else {
            if (this.isInsideBox(x, y)) {
                this.x = x;
                this.y = y;
                this.updatePosition();
            } else {
                if (this.isInsideBox(x, this.y)) {
                    this.x = x;
                    this.updatePosition();
                } else if (this.isInsideBox(this.x, y)) {
                    this.y = y;
                    this.updatePosition();
                }
            }
        }
    }

    trapped() {
        const { x, y, diameter } = this;
        const { x: bx, y: by, width, height } = box;
        const isInsideBox = x > bx && x + diameter < bx + width && y > by && y + diameter < by + height;
        this.isTrapped = isInsideBox;
        this.HTML.style.background = isInsideBox ? "var(--purple)" : "white";
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
        this.HTML = document.createElement("div");
        this.HTML.classList.add("box");
        this.HTML.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(this.HTML);
    }

    calculateDimensions() {
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = this.HTML;
        this.x = offsetLeft - offsetWidth / 2 - 1;
        this.y = offsetTop - offsetHeight / 2 - 1;
        this.width = offsetWidth + 1;
        this.height = offsetHeight + 1;
    }
}

document.body.addEventListener("click", createCircle);
document.body.addEventListener("mousemove", moveCircle);

function createCircle(e) {
    if (e === undefined) return;
    new Circle(e.clientX - 25, e.clientY - 25);
}

function moveCircle(e) {
    if (e === undefined || circles.length === 0) return;
    circles[circles.length - 1].move(e.clientX - 25, e.clientY - 25);
}

function setBox() {
    box = new Box();
}

export { createCircle, moveCircle, setBox };
