// Form Validation using JavaScript Events

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous errors
    clearAllErrors();
    
    let isValid = true;
    
    // Validate Full Name - not empty
    const fullName = document.getElementById('fullName');
    if (fullName.value.trim() === '') {
        showError('nameError', fullName);
        isValid = false;
    }
    
    // Validate Email - not empty and valid format
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '' || !emailPattern.test(email.value)) {
        showError('emailError', email);
        isValid = false;
    }
    
    // Validate Password - not empty and length >= 6
    const password = document.getElementById('password');
    if (password.value === '' || password.value.length < 6) {
        showError('passwordError', password);
        isValid = false;
    }
    
    // Validate Gender - must be selected
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderError').classList.add('show');
        isValid = false;
    }
    
    // Validate Course - must be selected
    const course = document.getElementById('course');
    if (course.value === '') {
        showError('courseError', course);
        isValid = false;
    }
    
    // If valid, show success and reset
    if (isValid) {
        document.getElementById('successMessage').classList.add('show');
        document.getElementById('registrationForm').reset();
        
        setTimeout(function() {
            document.getElementById('successMessage').classList.remove('show');
        }, 3000);
    }
});

// Show error message
function showError(errorId, inputElement) {
    document.getElementById(errorId).classList.add('show');
    if (inputElement) {
        inputElement.classList.add('input-error');
    }
}

// Clear all error messages
function clearAllErrors() {
    const errors = document.querySelectorAll('.error-message');
    errors.forEach(function(error) {
        error.classList.remove('show');
    });
    
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(function(input) {
        input.classList.remove('input-error');
    });
    
    document.getElementById('successMessage').classList.remove('show');
}

// Real-time validation on blur events
document.getElementById('fullName').addEventListener('blur', function() {
    clearError('nameError', this);
    if (this.value.trim() === '') {
        showError('nameError', this);
    }
});

document.getElementById('email').addEventListener('blur', function() {
    clearError('emailError', this);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value.trim() === '' || !emailPattern.test(this.value)) {
        showError('emailError', this);
    }
});

document.getElementById('password').addEventListener('blur', function() {
    clearError('passwordError', this);
    if (this.value === '' || this.value.length < 6) {
        showError('passwordError', this);
    }
});

document.getElementById('course').addEventListener('change', function() {
    clearError('courseError', this);
    if (this.value === '') {
        showError('courseError', this);
    }
});

// Clear specific error
function clearError(errorId, inputElement) {
    document.getElementById(errorId).classList.remove('show');
    if (inputElement) {
        inputElement.classList.remove('input-error');
    }
}