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
