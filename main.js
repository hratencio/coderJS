class Bicicletas{
    constructor(id, nombre, descripcion, precio, img){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.img = img;
    }
    precioFinal(){
        let iva = this.precio * 0.21;
        let precioFinal = this.precio + iva;
        console.log(precioFinal);
    }
}

// 
const Decrecientes = bicis.sort(function(a,b){
    return b.precio - a.precio;
})

bicis.forEach(e => {
    $('#elemento3').prepend(`
    <div id="cartas">
        <h2>${e.nombre}</h2>
        <img id="imagenesCartas" src="${e.img}" alt="" srcset="">
         <p>${e.descripcion}</p>
             <div id="botonesCartas">
                <h3>Precio: ${e.precio}$</h3>
                <button id="selectorBici">Comprar</button>
            </div>
     </div>`)
    $("#selectorBici").on('click', function(bicis){
        bicis
        let costoE = 200;
        $("#biciNombre").val(`${e.nombre}`)
        $("#precio").val(`${e.precio}$`);
        $("#costosEnvio").val(`${costoE}$`);
        let subtotal = e.precio + costoE;
        $("#subtotal").val(`${subtotal}$`);
     $("#botonConfirmar").on('click', function(bicis){
            bicis
            let iva = e.precio * 0.15
            let total = e.precio + iva;
            $("table").show("fast");
            $("#tableNombre").text(`${e.nombre}`);
            $("#tablaImg").append(`<img id="tableImg" src="${e.img}" alt="">`);
            $("#tableSubtotal").append(`<p>${subtotal}</p>`);
            $("#tableTotal").append(`<p>${total}</p>`);
            $("#anuncioI").show("fast");
            $("#borrarImg").on('click', function(){
                $("table").hide();
            })
        })
    });
});

$("#botonE").on('click', function(){
    $("#botonR").hide();
})
$("#botonR").on('click', function(){
    $("#botonE").hide();
    $("#direccion").hide();
})
$("#botonConfirmar").on('click', function(){
    $("#elemento5").show("fast");
})
function datosUsuario(){
    let nombre = document.getElementById("nombreApellido").value;
    let direccion = document.getElementById("direccion").value;
    let numero = document.getElementById("numeroTelefono").value;
    console.log(nombre,direccion,numero);
   if(nombre == "" && direccion == "" && numero == ""){
       $("#elemento6").hide();
   }else{ 
       $("#elemento6").append(`
        <div>
            <div id="confirmacionNombre">
                <h2>Felicitaciones ${nombre}!</H2>
            </div>
            <div id="confirmacionDN">
                <p>Tu bicicleta sera entregada en la direccion: ${direccion}.</p>
                <p>Y sera confirmada la entrega a traves del siguiente numero: ${numero}</p>
                <p>Disfruta el descenzo sin compromisos!</p>
                <img src="https://media2.giphy.com/media/d7o7xi94fQ2vDTaeXk/giphy.gif" alt="" srcset="">
            </div>
    </div>`)
   }
}



