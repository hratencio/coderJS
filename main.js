/*function usuario(){
    let nombre = prompt('Cual es tu nombre?');
    let apellido = prompt('Caul es tu apellido?');
    alert(`Hola ${nombre} ${apellido}, saludos!`);
}
usuario();

function edad(){
    let edad = prompt('Cual es tu edad?');
    if(edad >= 18){
        alert('Bienvenido, puedes ingresar')
    } else if (edad < 18){
        alert('Lo siento... necesitas autorización')}
    }

function despegue(){
    for(let i = 5; i > 0; i--){
        console.log(i);
        if(i == 1){
            console.log('Ignition! The rocket is flying.')
            let rocket;
           do {
               alert('The rocket is in course to mars!')
           } while (rocket);
        }
    }
} 
despegue(); 

function math(){
    let operacion = prompt('Que calculo matematico desea realizar?');
    let numero1 = Number(prompt('Introduce el primer numero'));
    let numero2 = Number(prompt('Introduce el segundo numero'));

    if(operacion == 'suma'){
       let resultado = numero1 + numero2;
       alert(resultado);
    } else if(operacion == 'resta'){
        let resultado = numero1 - numero2;
        alert(resultado)
    } else if(operacion == 'multiplicacion'){
        let resultado = numero1 * numero2;
        alert(resultado)
    } else if (operacion == 'division'){
        let resultado = numero1 / numero2;
        alert(resultado)
    }else{
        alert('porfavor introduzca los datos pedidos.');
    }
}

// Desafío complementario. 
const productos = {
    cerveza: 100,
    cococola: 80,
    agua: 50
}
function iva(){
let iva = 0.21;
let producto = prompt('Que producto deseas comprar?');
switch (producto) {
    case 'cerveza':
        let cervezaIva = productos.cerveza * iva;
        let cerveza = cervezaIva + productos.cerveza;
        alert(`Una cerveza cuesta ${cerveza}$`);
        break;
    case 'cocacola':
        let cocacolaIva = productos.cococola * iva;
        let cocacola = cocacolaIva + productos.cococola
        alert(`Una cocacola cuesta ${cocacola}$`);
        break;
    case 'agua':
        let aguaIva = productos.agua * iva;
        let agua = productos.agua + aguaIva;
        alert(`una botella de agua cuesta ${agua}$`);
    default:
        alert('Porfavor introduzca uno de los tres productos validos.')
        break;
}
}
*/
// ------------------------------------------
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
                        <p> Precio: ${bici1.precio}</p>`;
                         
let nombreBici2 = document.getElementById('grid2');
nombreBici2.innerHTML = `<h3> ${bici2.nombre} </h3>
                        <p> Marca: ${bici2.marca} </p>
                        <p> Modelo: ${bici2.modelo} </p>
                        <p> Precio: ${bici2.precio}</p>`;
let nombreBici3 = document.getElementById('grid3');
nombreBici3.innerHTML = `<h3> ${bici3.nombre} </h3>
                         <p> Marca: ${bici3.marca} </p>
                         <p> Modelo: ${bici3.modelo} </p>
                         <p> Precio: ${bici3.precio}</p>`;
let nombreBici4 = document.getElementById('grid4');
nombreBici4.innerHTML = `<h3> ${bici4.nombre} </h3>
                        <p> Marca: ${bici4.marca} </p>
                        <p> Modelo: ${bici4.modelo} </p>
                        <p> Precio: ${bici4.precio}</p>`;
