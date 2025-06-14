// Get the counter element
const counterElement = document.getElementById('counter');

// Initialize counter value
let count = 0;

// Function to update the counter display
function updateCounter() {
    counterElement.textContent = count;
    // Add negative class if count is less than 0
    if (count < 0) {
        counterElement.classList.add('negative');
    } else {
        counterElement.classList.remove('negative');
    }
}

// Function to increase the counter
function increase() {
    count++;
    updateCounter();
}

// Function to decrease the counter
function decrease() {
    count--;
    updateCounter();
}

// Function to reset the counter
function reset() {
    count = 0;
    updateCounter();
}

// Initialize the counter display
updateCounter(); 