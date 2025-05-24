document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    function closeMenuOnOverlay(e) {
        if (window.innerWidth <= 900 && sidebar.classList.contains('open')) {
            // Cierra si se hace click fuera de la sidebar
            if (!sidebar.contains(e.target) && e.target !== menuBtn) {
                sidebar.classList.remove('open');
                body.classList.remove('menu-open');
                document.removeEventListener('mousedown', closeMenuOnOverlay);
            }
        }
    }

    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        body.classList.toggle('menu-open');
        if (sidebar.classList.contains('open')) {
            document.addEventListener('mousedown', closeMenuOnOverlay);
        } else {
            document.removeEventListener('mousedown', closeMenuOnOverlay);
        }
    });

    // Opcional: Cierra el menú al seleccionar una opción
    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 900) {
                sidebar.classList.remove('open');
                body.classList.remove('menu-open');
                document.removeEventListener('mousedown', closeMenuOnOverlay);
            }
        });
    });
});