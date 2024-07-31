document.getElementById('submit-button').addEventListener('click', function() {
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const idolName = document.getElementById('idol-name');
    const message = document.getElementById('message');
    const gift = document.getElementById('gift');

    
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('idol-name-error').textContent = '';
    document.getElementById('message-error').textContent = '';
    document.getElementById('gift-error').textContent = '';

    if (!name.value) {
        isValid = false;
        document.getElementById('name-error').textContent = 'Name is required';
    }

    if (!email.value) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Email is required';
    } else if (!validateEmail(email.value)) {
        isValid = false;
        document.getElementById('email-error').textContent = 'Invalid email format';
    }

    if (!idolName.value) {
        isValid = false;
        document.getElementById('idol-name-error').textContent = 'Idol Name is required';
    }

    if (!message.value) {
        isValid = false;
        document.getElementById('message-error').textContent = 'Message is required';
    }

    if (!gift.value) {
        isValid = false;
        document.getElementById('gift-error').textContent = 'Gift selection is required';
    }

    if (isValid) {
        document.getElementById('myForm').submit();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

//cript ini digunakan untuk sliding media menggunakan radio button, tetapi radio buttonnya saya sembunyikan, karena apa? saya salah ketika membuat sliding bannernya hehe, lalu saya malas membuat ulang eheheh
//slider ini akan kembali ke titik 0 ketiak sudah melebihi gambar 2 atau disitu (counter lebih besar dari 2) :)
var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 2) {
        counter = 1;
    }
}, 4000);
