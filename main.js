/*function usuario(){
    let nombre = prompt('Cual es tu nombre?');
    let apellido = prompt('Caul es tu apellido?');
    alert(`Hola ${nombre} ${apellido}, saludos!`);
}
usuario();*/ 

function edad(){
    let edad = prompt('Cual es tu edad?');
    if(edad >= 18){
        console.log('Bienvenido, puedes ingresar')
    } else if (edad < 18){
        console.log('Lo siento... necesitas autorización')}
    }