
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

const MTB = Bicicletas.filter(Bicicleta => Bicicleta.modelo == 'Trail');
console.log(MTB);
const CC = Bicicletas.filter(Bicicleta => Bicicleta.modelo == 'CrossCountry');
console.log(CC);
const Ruta = Bicicletas.filter(Bicileta => Bicileta.modelo == 'Carretera');
console.log(Ruta);
const PreciosCrecientes = Bicicletas.sort(function(a,b){
    return a.precio - b.precio;
})
console.log(PreciosCrecientes);

const Decrecientes = Bicicletas.sort(function(a,b){
    return b.precio - a.precio;
})
console.log(Decrecientes);

let nombreBici1 = document.getElementById('grid1');
nombreBici1.innerHTML = `<h3> ${bici1.nombre} </h3>
   <p> Marca: ${bici1.marca} </p>
   <p> Modelo: ${bici1.modelo} </p>
   <p> Precio: ${bici1.precio}</p>
   <button id="boton"> Comprar </button>`;
                         
let nombreBici2 = document.getElementById('grid2');
nombreBici2.innerHTML = `<h3> ${bici2.nombre} </h3>
   <p> Marca: ${bici2.marca} </p>
   <p> Modelo: ${bici2.modelo} </p>
   <p> Precio: ${bici2.precio}</p>
   <button class="boton"> Comprar </button>`;
let nombreBici3 = document.getElementById('grid3');
nombreBici3.innerHTML = `<h3> ${bici3.nombre} </h3>
  <p> Marca: ${bici3.marca} </p>
  <p> Modelo: ${bici3.modelo} </p>
 <p> Precio: ${bici3.precio}</p>
  <button class="boton"> Comprar </button>`;
let nombreBici4 = document.getElementById('grid4');
nombreBici4.innerHTML = `<h3> ${bici4.nombre} </h3>
 <p> Marca: ${bici4.marca} </p>
 <p> Modelo: ${bici4.modelo} </p>
 <p> Precio: ${bici4.precio}</p>
 <button class="boton"> Comprar </button>`;
 

let boton = document.getElementById("boton");
boton.onclick = () => {
    console.log('Desea comprar esta bicicleta?');
}
let nombreUsuario = document.getElementById("nombreUsuario");
nombreUsuario.onkeypress = () => {console.log("EL USUARIO ESCRIBIO ALGO")};

