setInterval(() => {
    confetti({
        particleCount: 180,
        startVelocity: 30,
        spread: 360,
        origin: {
            x: Math.random(),
            y: Math.random()
        }
    });
}, 1000)