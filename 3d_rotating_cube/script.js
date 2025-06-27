// Get DOM elements
const cube = document.querySelector('.cube');
const toggleBtn = document.getElementById('toggle-rotation');
const resetBtn = document.getElementById('reset-cube');

// Track rotation state
let isRotating = true;

// Toggle rotation functionality
toggleBtn.addEventListener('click', () => {
    if (isRotating) {
        cube.classList.add('paused');
        toggleBtn.textContent = 'Start Rotation';
        isRotating = false;
    } else {
        cube.classList.remove('paused');
        toggleBtn.textContent = 'Pause Rotation';
        isRotating = true;
    }
});

// Reset cube to original position
resetBtn.addEventListener('click', () => {
    // Remove any existing animation
    cube.style.animation = 'none';
    
    // Reset to original position
    cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
    
    // Force reflow to apply the reset
    cube.offsetHeight;
    
    // Restore animation after a brief delay
    setTimeout(() => {
        cube.style.animation = 'rotate 10s infinite linear';
        cube.classList.remove('paused');
        toggleBtn.textContent = 'Pause Rotation';
        isRotating = true;
    }, 100);
});

// Keyboard controls
document.addEventListener('keydown', (event) => {
    switch(event.key) {
        case ' ': // Spacebar to toggle
            event.preventDefault();
            toggleBtn.click();
            break;
        case 'r': // 'r' key to reset
        case 'R':
            event.preventDefault();
            resetBtn.click();
            break;
    }
});

// Visual feedback
toggleBtn.addEventListener('mouseenter', () => {
    if (!isRotating) {
        toggleBtn.style.background = 'rgba(76, 175, 80, 0.3)';
    }
});

toggleBtn.addEventListener('mouseleave', () => {
    toggleBtn.style.background = 'rgba(255,255,255,0.2)';
});

resetBtn.addEventListener('mouseenter', () => {
    resetBtn.style.background = 'rgba(244, 67, 54, 0.3)';
});

resetBtn.addEventListener('mouseleave', () => {
    resetBtn.style.background = 'rgba(255,255,255,0.2)';
}); 