
function sendDataToEmail(formData, csvContent) {
    // Append CSV content to form data
    formData.append('csvData', csvContent);

    // Prepare the request configuration
    var requestOptions = {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    };

    // Send the request using fetch to Formspree endpoint
    fetch('https://formspree.io/f/xeqybgod', requestOptions)
        .then(response => {
            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Failed to submit form. Please try again later.');
            }
        })
        .catch(error => {
            alert('Failed to submit form. Please try again later.');
        });
}




// event listener for form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if name and email are provided
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !email) {
        alert("Please provide your name and email.");
        return;
    }

    // Gather form data
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);


    // Function to send the form data to the server
    sendDataToEmail(formData);
});