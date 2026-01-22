const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today);

const form = document.getElementById('bookingForm');
const modal = document.getElementById('successModal');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex = /^[\d\s\-\+\(\)]+$/;

const inputs = form.querySelectorAll('input[required]');
inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('error')) {
            validateField(input);
        }
    });
});

function validateField(field) {
    const formGroup = field.parentElement;
    let isValid = true;

    if (!field.value.trim()) {
        isValid = false;
    } else {
        if (field.type === 'email' && !emailRegex.test(field.value)) {
            isValid = false;
            formGroup.querySelector('.error-message').textContent = 'Please enter a valid email address';
        }

        if (field.type === 'tel') {
            if (!phoneRegex.test(field.value) || field.value.replace(/\D/g, '').length < 8) {
                isValid = false;
                formGroup.querySelector('.error-message').textContent = 'Please enter a valid phone number';
            }
        }

        if (field.type === 'number') {
            const value = parseInt(field.value);
            if (value < 1 || value > 20) {
                isValid = false;
                formGroup.querySelector('.error-message').textContent = 'Number of guests must be between 1 and 20';
            }
        }

        if (field.type === 'date') {
            const selectedDate = new Date(field.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                isValid = false;
                formGroup.querySelector('.error-message').textContent = 'Please select a future date';
            }
        }
    }

    if (isValid) {
        formGroup.classList.remove('error');
    } else {
        formGroup.classList.add('error');
    }

    return isValid;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isFormValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isFormValid = false;
        }
    });

    if (isFormValid) {
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            guests: document.getElementById('guests').value,
            message: document.getElementById('message').value
        };

        document.getElementById('userName').textContent = formData.firstName + ' ' + formData.lastName;
        document.getElementById('userPhone').textContent = formData.phone;
        document.getElementById('userEmail').textContent = formData.email;
        modal.classList.add('active');

        form.reset();

        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });

        console.log('Booking data:', formData);
    } else {
        const firstError = document.querySelector('.form-group.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

function closeModal() {
    modal.classList.remove('active');
}

modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
