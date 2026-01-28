// Display alert when page loads
window.addEventListener('DOMContentLoaded', function() {
    alert('Welcome to my Personal Portfolio!');
    updateDateTime();
});

// Display current date and time
function updateDateTime() {
    const datetimeElement = document.getElementById('datetime');
    const now = new Date();
    
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC'
    };
    
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    datetimeElement.textContent = 'Current Date & Time: ' + formattedDateTime;
    
    // Update time every second
    setInterval(function() {
        const updated = new Date();
        const updatedDateTime = updated.toLocaleDateString('en-US', options);
        datetimeElement.textContent = 'Current Date & Time: ' + updatedDateTime;
    }, 1000);
}
