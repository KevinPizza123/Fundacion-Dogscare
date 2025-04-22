document.addEventListener('DOMContentLoaded', function() {
    const botonesSolicitar = document.querySelectorAll('.btn-solicitar');
    const numeroWhatsApp = '+593995864018'; // ¡Reemplaza esto con tu número!

    botonesSolicitar.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault();

            const nombreAnimal = this.getAttribute('data-nombre');
            const mensaje = `Hola, estoy interesado en adoptar a ${nombreAnimal}.`;
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

            window.open(urlWhatsApp, '_blank');
        });
    });
});