import cerrarGaleria from './cerrar_galeria';
import slideClick from './slideClick';
import { cargarAnteriorSiguiente } from './cargarImagen';
import carousel from './carousel';

const galeria = document.getElementById('galeria');
galeria.addEventListener('click', (e) => {
    const boton = e.target.closest('button');

    /// Cerrar galeria
    if (boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria();
    }

    /// Selcción slide
    if (e.target.dataset.id){
        slideClick(e);
    }

    /// Siguiente imagen
    if (boton?.dataset?.accion === 'siguiente-imagen'){
        cargarAnteriorSiguiente('siguiente');
    }
    /// Anterior imagen
    if (boton?.dataset?.accion === 'anterior-imagen'){
        cargarAnteriorSiguiente('anterior');
    }

    /// Siguiente slide
    if (boton?.dataset?.accion === 'siguiente-slide'){
        carousel('siguiente');
    }
    /// Anterior slide
    if (boton?.dataset?.accion === 'anterior-slide'){
        carousel('anterior');
    }
});