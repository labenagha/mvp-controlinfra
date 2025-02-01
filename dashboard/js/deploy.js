function showForm(provider) {
    document.querySelectorAll('.connection-form').forEach(form => {
        form.style.display = 'none';
    });
    document.querySelector('.backend-options').style.display = 'none';
    document.getElementById(`${provider}-form`).style.display = 'block';
}

function hideForm() {
    document.querySelectorAll('.connection-form').forEach(form => {
        form.style.display = 'none';
    });
    document.querySelector('.backend-options').style.display = 'flex';
}

function handleConnect(provider, event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Simulate connection
    const alert = document.createElement('div');
    alert.className = 'alert alert-success';
    alert.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 6L9 17l-5-5"></path>
        </svg>
        <span>Successfully connected to ${provider}</span>
    `;
    form.appendChild(alert);

    // Hide the next button
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
        nextButton.style.display = 'none';
    }
}