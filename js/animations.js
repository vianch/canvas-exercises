class ContextAnimation {
    constructor() {
        this.xPosition = 200;
        this.initializeCanvas();
        this.initializeSize();
        this.animateCircle.bind(this);
    }

    animateCircle() {
        requestAnimationFrame(this.animateCircle.bind(this));
        this.circle();

        ++this.xPosition;
    }

    circle() {
        this.context.clearRect(0, 0, innerWidth, innerHeight);
        this.context.beginPath();
        this.context.arc(this.xPosition, 200, 30, 0, Math.PI * 2, false);
        this.context.strokeStyle = "red";
        this.context.stroke();
    }

    initializeCanvas() {
        this.contexts = {
            twoDimensional: '2d',
        };
        this.canvas = document.querySelector('.canvas-animation');
        this.context = this.canvas.getContext(this.contexts.twoDimensional);
    }

    initializeSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}


((window) => {    
    let contextAnimation = new ContextAnimation();
    contextAnimation.animateCircle();
})(window);
