// Form Validation Script
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear all error messages
    clearErrors();
    
    // Validate fields
    let isValid = true;
    
    // Validate Full Name
    const fullName = document.getElementById('fullName').value.trim();
    if (fullName === '') {
        showError('nameError');
        isValid = false;
    }
    
    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        showError('emailError');
        isValid = false;
    }
    
    // Validate Password (minimum 6 characters)
    const password = document.getElementById('password').value;
    if (password === '' || password.length < 6) {
        showError('passwordError');
        isValid = false;
    }
    
    // Validate Gender
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        showError('genderError');
        isValid = false;
    }
    
    // Validate Course
    const course = document.getElementById('course').value;
    if (course === '') {
        showError('courseError');
        isValid = false;
    }
    
    // If all validations pass, show success message
    if (isValid) {
        showSuccessMessage();
        // Reset form
        document.getElementById('registrationForm').reset();
        
        // Hide success message after 3 seconds
        setTimeout(function() {
            hideSuccessMessage();
        }, 3000);
    }
});

// Function to show error messages
function showError(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.classList.add('show');
}

// Function to clear all error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(function(error) {
        error.classList.remove('show');
    });
}

// Function to show success message
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.add('show');
}

// Function to hide success message
function hideSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    successMessage.classList.remove('show');
}

// Real-time validation on input change
document.getElementById('fullName').addEventListener('blur', function() {
    if (this.value.trim() === '') {
        showError('nameError');
    } else {
        clearErrorById('nameError');
    }
});

document.getElementById('email').addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value.trim() === '' || !emailRegex.test(this.value)) {
        showError('emailError');
    } else {
        clearErrorById('emailError');
    }
});

document.getElementById('password').addEventListener('blur', function() {
    if (this.value === '' || this.value.length < 6) {
        showError('passwordError');
    } else {
        clearErrorById('passwordError');
    }
});

document.getElementById('course').addEventListener('change', function() {
    if (this.value === '') {
        showError('courseError');
    } else {
        clearErrorById('courseError');
    }
});

// Helper function to clear specific error
function clearErrorById(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.classList.remove('show');
}
