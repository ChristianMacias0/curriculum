document.addEventListener("DOMContentLoaded", function() {
    // Oculta todas las secciones principales excepto la de "sobre-mi"
    function showSection(id) {
        document.querySelectorAll('main > section').forEach(sec => {
            sec.style.display = (sec.id === id) ? 'block' : 'none';
        });
    }

    // Mostrar por defecto "sobre-mi"
    showSection('sobre-mi');

    // Manejar clicks en el menú lateral
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').replace('#', '');
            showSection(targetId);
            e.preventDefault(); // Evita el salto de ancla
        });
    });
});