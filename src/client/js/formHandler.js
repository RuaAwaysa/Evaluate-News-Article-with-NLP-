import { isValidUrl } from './urlChecker';

const serverURL = 'http://localhost:8000/api/analyze';

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const url = document.getElementById('url').value;
    console.log(`this is the entered url ${url}`);

    // Check if the URL is valid
    if (!isValidUrl(url)) {  // Corrected function name
        console.log('Invalid URL');
        alert('Please enter a valid URL.');
        return;
    }
    // If the URL is valid, send it to the server using the serverURL constant above
    sendData(url);   
}

// Function to send data to the server
async function sendData(url) {
    try {
        const response = await fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: url }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        updateUI(data);
    } catch (error) {
        console.error('Error sending data to the server:', error);
        alert('There was an error processing your request.');
    }
}

function updateUI(data) {
    document.getElementById('polarity').innerText = `Polarity: ${data.polarity}`;
    console.log(data.polarity + data.subjectivity + data.text)
    document.getElementById('subjectivity').innerText = `Subjectivity: ${data.subjectivity}`;
    document.getElementById('text-content').innerText = `Text: ${data.text}`;
}
// Export the handleSubmit function
export { handleSubmit };
