document.addEventListener("DOMContentLoaded", function() {
    const isiGulir = document.querySelector('.isi-gulir');
    let clone = isiGulir.cloneNode(true);
    isiGulir.parentElement.appendChild(clone);
});

function smoothScroll() {
    var anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);

            window.scroll({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
}