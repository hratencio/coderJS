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
