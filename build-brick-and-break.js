export function build(n) {
    const body = document.body;

    let bricks = 1;

    const interval = setInterval(() => {
        const brick = document.createElement("div");
        brick.id = "brick-" + bricks
        if (bricks % 3 === 2) {
            brick.dataset.foundation = true;
        
        }
        body.appendChild(brick);
        bricks++;
        if (bricks > n) {
            clearInterval(interval);
        }
    }, 100);
}

export function repair(...ids) {
    ids.forEach((id) => {
        let brick = document.getElementById(id);
        brick.dataset.repaired = brick.hasAttribute("foundation") ? "in progress" : true;
    });
}

export function destroy() {
    let bricks = document.getElementsByTagName("div");
    const last = bricks.length - 1
    bricks[last].remove();
}