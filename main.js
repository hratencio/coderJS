
function usuario(){
    let nombre = prompt('Cual es tu nombre');
    let apellido = prompt('Caul es tu apellido?');
    alert(`Hola, ${nombre} ${apellido} Bienvenidos a Baires Bikes!`);
}


class Bicicleta{
    constructor(nombre, marca, modelo, precio){
        this.nombre = nombre;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    precioFinal(){
        let iva = this.precio * 0.21;
        let precioFinal = this.precio + iva;
        console.log(precioFinal);
    }
}

let bici1 = new Bicicleta('StumpJumper','Specialized','Trail',3500);
let bici2 = new Bicicleta('HighTower','SantaCruz','Trail', 4500);
let bici3 = new Bicicleta('Rockhopper','Specialized','CrossCountry', 1000);
let bici4 = new Bicicleta('Epic','Specialized','CrossCountry', 4000);
let bici5 = new Bicicleta('Bronson','SantaCruz','Trail', 2000);
let bici6 = new Bicicleta('Session','Trek','Trail', 2500);
let bici7 = new Bicicleta('TCR','Giant','Carretera', 1500);
let bici8 = new Bicicleta('Emonda','Trek','Carretera', 2000);
let bici9 = new Bicicleta('Tarmac','Specialized','Carretera', 1500);
let bici10 = new Bicicleta('Slash','Trek','Trail', 3000);
let bici11 = new Bicicleta('Chisel','Specialized','CrossCountry', 1600);
let bici12 = new Bicicleta('Marlin','Trek','CrossCountry',1200);

const Bicicletas = [];
Bicicletas.push(bici1);
Bicicletas.push(bici2);
Bicicletas.push(bici3);
Bicicletas.push(bici4);
Bicicletas.push(bici5);
Bicicletas.push(bici6);
Bicicletas.push(bici7);
Bicicletas.push(bici8);
Bicicletas.push(bici9);
Bicicletas.push(bici10);
Bicicletas.push(bici11);
Bicicletas.push(bici12);

const MTB = Bicicletas.filter(Bicicleta => Bicicleta.modelo == 'Trail');
console.log(MTB);
const CC = Bicicletas.filter(Bicicleta => Bicicleta.modelo == 'CrossCountry');
console.log(CC);
const Ruta = Bicicletas.filter(Bicileta => Bicileta.modelo == 'Carretera');
console.log(Ruta);
const PreciosCrecientes = Bicicletas.sort(function(a,b){
    return a.precio - b.precio;
})


const Decrecientes = Bicicletas.sort(function(a,b){
    return b.precio - a.precio;
})

for (const bicis of Bicicletas){
    $('#todasBicis').prepend(`<div id="grid1">
    <h3> ${bicis.nombre} </h3>
   <p> Marca: ${bicis.marca} </p>
   <p> Modelo: ${bicis.modelo} </p>
   <p> Precio: ${bicis.precio}</p>
   <button id="boton"> Comprar </button>
   </div>`);

   $("#boton").on('click', function(){
       console.log(`Agregaste ${bicis.nombre} al carrito`);
   });
}
/*Bicicletas.forEach(function(bicis){
    let nombreBici1 = document.getElementById('todasBicis');
    nombreBici1.innerHTML += `
    <div id="grid1">
    <h3> ${bicis.nombre} </h3>
   <p> Marca: ${bicis.marca} </p>
   <p> Modelo: ${bicis.modelo} </p>
   <p> Precio: ${bicis.precio}</p>
   <button id="boton"> Comprar </button>
   </div>
   `;
})*/

