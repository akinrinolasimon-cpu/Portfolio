document.getElementById('year').textContent = new Date().getFullYear();
window.addEventListener('load', function () {
    setTimeout(function () {
        document.body.classList.remove('is-loading');
    }, 2000);
});