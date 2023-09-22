import datos from './../datos/fotos';
import { cargarImagen } from './cargarImagen';

const slideClick = (e) => {
    const id = e.target.dataset.id;
    const galeria = document.getElementById('galeria');
    const categoriaActiva = galeria.dataset.categoria;

    console.log('Hiciste click en un slide!', id, categoriaActiva);
    let ruta, nombre, descripcion;
    datos.fotos[categoriaActiva].forEach((foto) => {
        

        ///console.log(foto.id, parseInt(id));
        if (foto.id === parseInt(id)){
            console.log(foto);
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
        //console.log(ruta, nombre, descripcion);

    });
    cargarImagen(id, nombre, ruta, descripcion);
}

export default slideClick;