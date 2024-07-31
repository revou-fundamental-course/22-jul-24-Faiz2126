document.addEventListener("DOMContentLoaded", function() {
    const isiGulir = document.querySelector('.isi-gulir');
    let clone = isiGulir.cloneNode(true);
    isiGulir.parentElement.appendChild(clone);
});
