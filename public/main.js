document.addEventListener('input', function (event) {
    // Check if the target is an under-input
    if (event.target.classList.contains('under-input')) {
        const inputGroup = event.target.closest('.input-group'); // Find the closest input group
        const underInputs = inputGroup.querySelectorAll('.under-input'); // Get all under-inputs in this group
        const inlineInput = inputGroup.querySelector('.inline-input'); // Get the inline input in this group

        // Calculate the sum of all numeric values in under-inputs
        let sum = 0;
        underInputs.forEach(input => {
            // Extract numbers from the input value
            const numbers = input.value.match(/-?\d+(\.\d+)?/g); // Matches integers and decimals (positive/negative)
            if (numbers) {
                sum += numbers.reduce((acc, num) => acc + parseFloat(num), 0); // Sum up all extracted numbers
            }
        });

        // Update the inline input with the sum
        inlineInput.value = sum;
    }

    // Adjust input box width dynamically
    if (event.target.tagName === 'INPUT') {
        const input = event.target;
        input.style.width = input.scrollWidth + 'px'; // Set the width based on the scrollWidth
    }
});

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