document.addEventListener("DOMContentLoaded", function () {

document.getElementById("resumen").addEventListener("click", function() 
{
    var cantidad = parseInt(document.querySelector('#cantidad').value);
    var categoria = parseInt(document.querySelector('#categoria').value);
    var resultado;
    if(cantidad > 0){
        if(categoria === 1){
            resultado = (200 * 0.2) * cantidad;
        }else if( categoria === 2){
            resultado = (200 * 0.5) * cantidad;
        }else if(categoria === 3){
            resultado = (200 * 0.85) * cantidad;
        }
        else {
            resultado =  0;
        }
        var stringResultado = "Total a Pagar: $" + resultado;
        document.getElementById("totalpagar").value = "Total a Pagar: $" + resultado;
    }else {
        alert("Cantidad menor o igual cero");
    }
    

  });

  document.getElementById("borrar").addEventListener("click", function() 
  {
    document.getElementById("nombreTiket").value = '';
    document.getElementById("apellidoTiket").value = '';
    document.getElementById("email").value = '';
    document.getElementById("cantidad").value = '';
    document.getElementById("categoria").value = 1;
    document.getElementById("totalpagar").value = "Total a Pagar: $";


    
  });

});