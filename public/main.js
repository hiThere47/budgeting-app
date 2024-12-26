// Function to add a new input field when Enter is pressed
document.addEventListener('keydown', function (event) {
    // Check if the key pressed is "Enter" and the target is an under-input field
    if (event.key === 'Enter' && event.target.classList.contains('under-input')) {
        event.preventDefault(); // Prevent form submission or default behavior

        // Create a new input element
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.className = 'under-input'; // Add the same class as the original input
        newInput.style.marginLeft = "10px"; // Add some spacing between inputs

        // Append the new input next to the current one
        event.target.parentNode.appendChild(newInput);

        // Focus on the new input
        newInput.focus();
    }
});