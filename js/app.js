//variables
const resultado = document.querySelector('#resultado');
//eventos
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos();
});
//funciones
function mostrarAutos() {
    autos.forEach(auto =>{
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHtml = document.createElement('p');
        autoHtml.textContent =`${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color}`;
        //insertar en el html
        resultado.appendChild(autoHtml);
    });
}