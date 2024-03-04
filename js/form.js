
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('user-name');
    const telInput = document.getElementById('user-tel');
    const form = document.getElementById('contact-form');

    nameInput.addEventListener('input', function() {
        if (!isValidName(nameInput.value)) {
            nameInput.setCustomValidity('Invalid name');
        } else {
            nameInput.setCustomValidity('');
        }
    });

    telInput.addEventListener('input', function() {
        if (!isValidPhoneNumber(telInput.value)) {
            telInput.setCustomValidity('Invalid phone number');
        } else {
            telInput.setCustomValidity('');
        }
    });

    form.addEventListener('submit', function(event) {
        if (!isValidName(nameInput.value) || !isValidPhoneNumber(telInput.value)) {
            event.preventDefault();
            alert('Please enter valid data');
        }
    });

    function isValidName(name) {
        const regex = /^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
        return regex.test(name);
    }

    function isValidPhoneNumber(phoneNumber) {
        const regex = /^[+]?[0-9.-\s]{10,13}$/;
        return regex.test(phoneNumber);
    }
});

