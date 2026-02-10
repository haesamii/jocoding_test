document.addEventListener('DOMContentLoaded', () => {
    const numberBalls = document.querySelectorAll('.number-ball');
    const drawButton = document.getElementById('draw-button');

    // Function to generate unique random numbers
    function generateUniqueRandomNumbers(count, min, max) {
        const numbers = new Set();
        while (numbers.size < count) {
            numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    // Function to draw and display lottery numbers
    function drawLotteryNumbers() {
        const drawnNumbers = generateUniqueRandomNumbers(6, 1, 45); // Generate 6 unique numbers between 1 and 45

        numberBalls.forEach((ball, index) => {
            // Optional: Add a slight delay for visual effect
            setTimeout(() => {
                ball.textContent = drawnNumbers[index];
                // Optional: Animate the numbers appearing
                ball.style.opacity = '0';
                ball.style.transform = 'scale(0.5)';
                setTimeout(() => {
                    ball.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                    ball.style.opacity = '1';
                    ball.style.transform = 'scale(1)';
                }, 50);
            }, index * 100); // Stagger the animation
        });
    }

    // Event listener for the draw button
    drawButton.addEventListener('click', drawLotteryNumbers);

    // Initial draw when the page loads (optional)
    drawLotteryNumbers();
});