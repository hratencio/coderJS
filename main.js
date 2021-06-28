/*function usuario(){
    let nombre = prompt('Cual es tu nombre?');
    let apellido = prompt('Caul es tu apellido?');
    alert(`Hola ${nombre} ${apellido}, saludos!`);
}
usuario();*/ 

function edad(){
    let edad = prompt('Cual es tu edad?');
    if(edad >= 18){
        alert('Bienvenido, puedes ingresar')
    } else if (edad < 18){
        alert('Lo siento... necesitas autorización')}
    }

/*function despegue(){
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
despegue(); */

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
// ------------------------------------------

class Bicicletas{
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

let bici1 = new Bicicletas('HardRock','Specialized','CrossCountry',500);
bici1.precioFinal();

let bici2 = new Bicicletas('HighTower','SantaCruz','Enduro', 1500)
bici2.precioFinal();
