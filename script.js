/**
 * Plataforma Muvicar - Núcleo Logístico Estándar (FormSubmit Integración)
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Componente: Menú Móvil ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        mobileLinks.forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));
    }

    // --- Componente: Cotizador Algorítmico ---
    const dirOrigen = document.getElementById('dir-origen');
    const dirDestino = document.getElementById('dir-destino');
    const pesoCarga = document.getElementById('peso-carga');
    const tipoCarga = document.getElementById('tipo-carga');
    const panelResumen = document.getElementById('panel-resumen');
    const calcDistancia = document.getElementById('calc-distancia');
    const calcTiempo = document.getElementById('calc-tiempo');
    const calcTipoTxt = document.getElementById('calc-tipo-txt');
    const tarifaDinamica = document.getElementById('tarifa-dinamica');

    const VALOR_BASE = 6000; 
    const COSTO_POR_KM = 2200; 

    function actualizarTarifa() {
        if (!dirOrigen || !dirDestino) return;

        const origenLen = dirOrigen.value.trim().length;
        const destinoLen = dirDestino.value.trim().length;

        // Si ambos campos tienen texto, simulamos el cálculo de distancia
        if (origenLen > 3 && destinoLen > 3) {
            const factorDistancia = ((origenLen + destinoLen) % 12) + 1.5; 
            const factorPeso = parseFloat(pesoCarga.value) || 1.0;
            
            const distanciaFinal = factorDistancia;
            const tiempoFinal = Math.round(distanciaFinal * 3.5);
            const precioCalculadoGlobal = Math.round((VALOR_BASE + (distanciaFinal * COSTO_POR_KM)) * factorPeso);

            if (calcDistancia) calcDistancia.textContent = `${distanciaFinal.toFixed(1)} km`;
            if (calcTiempo) calcTiempo.textContent = `${tiempoFinal} min`;
            if (calcTipoTxt && tipoCarga) calcTipoTxt.textContent = tipoCarga.options[tipoCarga.selectedIndex].text;
            if (tarifaDinamica) {
                tarifaDinamica.innerHTML = `$${precioCalculadoGlobal.toLocaleString('es-CO')} <span class="text-xs font-sans font-normal text-on-surface-variant">COP</span>`;
            }
            
            panelResumen.classList.remove('hidden');
        } else {
            panelResumen.classList.add('hidden');
            if (tarifaDinamica) {
                tarifaDinamica.innerHTML = `$0 <span class="text-xs font-sans font-normal text-on-surface-variant">COP</span>`;
            }
        }
    }

    // Escuchar eventos en los inputs para calcular en tiempo real
    [dirOrigen, dirDestino, pesoCarga, tipoCarga].forEach(elem => {
        if (elem) {
            elem.addEventListener('input', actualizarTarifa);
            elem.addEventListener('change', actualizarTarifa);
        }
    });
});