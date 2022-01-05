//variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;
const selectMarca = document.querySelector('#marca');
const selectPrecioMin = document.querySelector('#minimo');
const selectPrecioMax = document.querySelector('#maximo');
const selectPuertas = document.querySelector('#puertas');
const selectTransmision = document.querySelector('#transmision');
const selectColor = document.querySelector('#color');


//Generar objeto con la busqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : ''
}
//eventos
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos); //Muestra los automoviles al cargar

    //llena las opciones de años
    llenarSelect();
});
//event listener para los select de busqueda
selectMarca.addEventListener('change',e=>{
    datosBusqueda.marca = e.target.value;
    filtrarAutos();
});
year.addEventListener('change',e=>{
    datosBusqueda.year = e.target.value;
    filtrarAutos();
});
selectPrecioMin.addEventListener('change',e=>{
    datosBusqueda.minimo = e.target.value;
    filtrarAutos();
});
selectPrecioMax.addEventListener('change',e=>{
    datosBusqueda.maximo = e.target.value;
    filtrarAutos();
});
selectPuertas.addEventListener('change',e=>{
    datosBusqueda.puertas = e.target.value;
    filtrarAutos();
});
selectTransmision.addEventListener('change',e=>{
    datosBusqueda.transmision = e.target.value;
    filtrarAutos();
});
selectColor.addEventListener('change',e=>{
    datosBusqueda.color = e.target.value;
    filtrarAutos();
});

//funciones
function mostrarAutos(autos) {
    limpiarHtml();
    autos.forEach(auto =>{
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHtml = document.createElement('p');
        autoHtml.textContent =`${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}`;
        //insertar en el html
        resultado.appendChild(autoHtml);
    });
}
function limpiarHtml() {
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}
function llenarSelect() {
    for(let i = maxYear; i >= minYear; i--){
        const opcion = document.createElement('option');
        opcion.value=i;
        opcion.textContent=i;
        year.appendChild(opcion);//agrega las opciones del año al select
    }
}
function filtrarAutos() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarAnio).filter(filtrarPrecioMin).filter(filtrarPrecioMax).filter(filtrarPuertas).filter(filtrarColor).filter(filtrarTransmision);
    if (resultado.length) {
        mostrarAutos(resultado);
    }else{
        limpiarHtml();
        noResultado();
    }
    
}
function noResultado() {
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No Hay Resultados';
    resultado.appendChild(noResultado);
}
function filtrarMarca(auto) {
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}
function filtrarAnio(auto) {
    if (datosBusqueda.year) {
        return auto.year === parseInt(datosBusqueda.year);
    }
    return auto;
}
function filtrarPrecioMin(auto) {
    const {minimo} = datosBusqueda;
    if (minimo) {
        return auto.precio >= parseInt(minimo);
    }
    return auto;
}
function filtrarPrecioMax(auto) {
    const {maximo} = datosBusqueda;
    if (maximo) {
        return auto.precio <= parseInt(maximo);
    }
    return auto;
}
function filtrarPuertas(auto) {
    const {puertas} = datosBusqueda;
    if (puertas) {
        return auto.puertas === parseInt(puertas);
    }
    return auto;
}
function filtrarTransmision(auto) {
    const {transmision} = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }
    return auto;
}
function filtrarColor(auto) {
    const {color} = datosBusqueda;
    if (color) {
        return auto.color === color;
    }
    return auto;
}