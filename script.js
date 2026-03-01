document.getElementById('cta-button').addEventListener('click', function() {
    alert('Thank you for your interest! This button works!');
});

// Toggle name visibility with typing animation
const toggleNameBtn = document.getElementById('toggle-name-btn');
const profileNameContainer = document.querySelector('.profile-name-container');
const profileName = document.getElementById('profile-name');

// Initialize button text to "Show Name" since name is hidden by default
toggleNameBtn.textContent = 'Show name';

// Function to animate typing effect
function animateTyping() {
    const text = profileName.textContent;
    profileName.textContent = '';
    profileName.style.width = '0';
    profileName.classList.remove('full-width');
    
    // Make container visible first
    profileNameContainer.style.display = 'block';
    
    setTimeout(() => {
        profileName.textContent = text;
        // Calculate the width needed for the full text
        const tempSpan = document.createElement('span');
        tempSpan.style.visibility = 'hidden';
        tempSpan.style.whiteSpace = 'nowrap';
        tempSpan.style.fontSize = '1.5em';
        tempSpan.style.fontWeight = 'bold';
        tempSpan.textContent = text;
        document.body.appendChild(tempSpan);
        const fullWidth = tempSpan.getBoundingClientRect().width + 30; // Add padding
        document.body.removeChild(tempSpan);
        
        profileName.style.width = fullWidth + 'px';
        
        // After animation completes, set full width
        setTimeout(() => {
            profileName.classList.add('full-width');
        }, 500);
    }, 10);
}

toggleNameBtn.addEventListener('click', function() {
    if (profileNameContainer.style.display === 'none' || profileNameContainer.style.display === '') {
        toggleNameBtn.textContent = 'Hide name';
        animateTyping(); // Start typing animation when showing name (function handles display)
    } else {
        profileNameContainer.style.display = 'none';
        toggleNameBtn.textContent = 'Show name';
    }
});
