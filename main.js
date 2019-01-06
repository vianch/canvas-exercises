((window) => {
    const contexts = {
       twoDimensional: '2d',
    };

    let canvas = document.querySelector('.canvas-resizing');
    let context;
    
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight / 2;

    // SQUARE
    context = canvas.getContext(contexts.twoDimensional);
    context.fillStyle = 'rgba(255, 200, 0, 0.5)';
    context.fillRect(20, 20, 100, 100);
    
    // Line
    context.beginPath();
    context.moveTo(50, 300);
    context.lineTo(300, 100);
    context.lineTo(400, 300);
    context.strokeStyle = "red";
    context.stroke();

    // Circle
    let xPosition;
    let yPosition;

    for(let i = 0; i < 5; ++i) {
        xPosition = Math.random() * window.innerWidth / 2;
        yPosition = Math.random() * window.innerHeight / 2;

        context.beginPath();
        context.arc(xPosition, yPosition, 30, 0, Math.PI * 2, false);
        context.strokeStyle = "blue";
        context.stroke();
    }

})(window);
