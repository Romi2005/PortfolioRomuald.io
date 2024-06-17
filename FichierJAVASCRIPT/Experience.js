window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var windowHeight = window.innerHeight;
    var containerHeight = document.querySelector('.parallax-container').offsetHeight;
    var contentHeight = document.querySelector('.parallax-content').offsetHeight;

    if (scrollTop >= containerHeight - windowHeight) {
        // Fin de la page, ne pas faire défiler plus loin
        return;
    }

    var scrollPercentage = scrollTop / (containerHeight - windowHeight);
    var move = (containerHeight - contentHeight) * scrollPercentage;

    document.querySelector('.parallax-content.right').style.marginTop = '-' + move + 'px';
});

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}
