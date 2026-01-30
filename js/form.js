const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today);
// data minima oggi 
const form = document.getElementById('bookingForm');
const modal = document.getElementById('successModal');
// form tutto insieme e pop up quando va a buon fine
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// controlla che la mail sia valida
const phoneRegex = /^[\d\s\-\+\(\)]+$/;
// controlla il telefono
const inputs = form.querySelectorAll('input[required]');
inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('error')) {
            validateField(input);
        } // quando esci dal campo controlla se valido
    }); // input cioe mentre scrivi
});
// tutti gli input required tutti i campi obbl
function validateField(field) {
    const formGroup = field.parentElement;
    let isValid = true;
// validare un singolo campo
    if (!field.value.trim()) {
        isValid = false;
    } else { // rimuove spazi inizio e fine se è vuoto fals
        if (field.type === 'email' && !emailRegex.test(field.value)) {
            isValid = false;
            formGroup.querySelector('.error-message').textContent = 'Please enter a valid email address';
        }
// solo se e mail senno mess di errore
        if (field.type === 'tel') {
            if (!phoneRegex.test(field.value) || field.value.replace(/\D/g, '').length < 8) {
                isValid = false;
                formGroup.querySelector('.error-message').textContent = 'Please enter a valid phone number';
            }
        }
// solo il telefono e giusto o mess di errore
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
// controlla data
    if (isValid) {
        formGroup.classList.remove('error');
    } else {
        formGroup.classList.add('error');
    }

    return isValid;
} // restituisced true  fas se campo e valido
// mostrare o nascondere la classe error
form.addEventListener('submit', function (e) {
    e.preventDefault();
// blocca l invio automatico
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
//  crea un oggetto con tutti i dati dell utente
        document.getElementById('userName').textContent = formData.firstName + ' ' + formData.lastName;
        document.getElementById('userPhone').textContent = formData.phone;
        document.getElementById('userEmail').textContent = formData.email;
        modal.classList.add('active');
// inserisce i dati nel pop up
        form.reset();

        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });
// rimuove i messaggi di errore
        console.log('Booking data:', formData);
    } else {
        const firstError = document.querySelector('.form-group.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    } // scorre automaticamente al primo errore
});

function closeModal() {
    modal.classList.remove('active');
}
// nasconde il popup
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        closeModal();
    }
});
// se clicco su backgro chiude popup
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
//  se premi esc e il popup e aperto chiude il popup