document.addEventListener('DOMContentLoaded', () => {
    const dragon = document.getElementById('dragon');
    let position = 0;
    let direction = 1;

    function animate() {
        position += direction * 0.5;

        if (position >= 20) {
            direction = -1;
        } else if (position <= -20) {
            direction = 1;
        }

        dragon.style.transform = `translateX(-50%) translateY(${position}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});