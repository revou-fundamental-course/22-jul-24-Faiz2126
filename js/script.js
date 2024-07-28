document.getElementById('submit-button').addEventListener('click', function() {
    // Dapatkan nilai dari elemen form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const idolName = document.getElementById('idol-name').value.trim();
    const message = document.getElementById('message').value.trim();
    const gift = document.getElementById('gift').value;

    // Validasi sederhana
    if (name === '') {
        alert('Please enter your name.');
        return;
    }
    if (email === '') {
        alert('Please enter your email.');
        return;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    if (idolName === '') {
        alert('Please enter the idol\'s name.');
        return;
    }
    if (message === '') {
        alert('Please enter your message.');
        return;
    }
    if (gift === '') {
        alert('Please select a gift.');
        return;
    }

    // Jika semua validasi berhasil
    alert('Form submitted successfully!');
    document.getElementById('booking-form').submit();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
