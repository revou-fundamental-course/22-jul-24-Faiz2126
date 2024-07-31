document.getElementById('submit-button').addEventListener('click', function() {
    const form = document.getElementById('booking-form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const idolName = document.getElementById('idol-name');
    const message = document.getElementById('message');
    const gift = document.getElementById('gift');


    let errors = [];
    if (name.value.trim() === '') {
        errors.push('who are you?');
    }
    if (email.value.trim() === '') {
        errors.push('can you fill the email please');
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        errors.push('please fill the correct email :)');
    }
    if (idolName.value.trim() === '') {
        errors.push('who you idol?');
    }
    if (message.value.trim() === '') {
        errors.push('No greeting?');
    }
    if (gift.value === '') {
        errors.push('oke');
    }
    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        form.submit();
    }
});


var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 2) {
        counter = 1;
    }
}, 4000);
