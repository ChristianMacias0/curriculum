document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('toggle-theme');
    const icon = document.getElementById('theme-icon');
    function updateIcon() {
        if (document.body.classList.contains('day-mode')) {
            icon.textContent = '☀️';
        } else {
            icon.textContent = '🌙';
        }
    }
    if (btn && icon) {
        btn.addEventListener('click', function() {
            document.body.classList.toggle('day-mode');
            updateIcon();
        });
        updateIcon();
    }
});