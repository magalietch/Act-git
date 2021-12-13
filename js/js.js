
const datos = { 
    nombre: "",
    apellido: "",
    correo: "",
    cantidad: "",
    categoria: "",
    total: ""
}



const cantidad = document.querySelector("#cantidad");
const categoria = document.querySelector("#categoria");
let total = document.querySelector("#total-pagar");
const borrar = document.querySelector("#borrar");
const resumen = document.querySelector("#resumen");

    

cantidad.addEventListener("input",leerTexto);
categoria.addEventListener("input",leerTexto);
total.addEventListener("input",total);
borrar.addEventListener("input",leerTexto);
resumen.addEventListener("click", totalFunc);
function totalFunc (){
    

    if (categoria.value == "80"){
        const categoria = document.querySelector('#categoria').value;
        const cantidad = document.querySelector('#cantidad').value;
        // total =  cantidad *  (200 - ( 200*(categoria/100)));
        total =  (cantidad * 200) - (cantidad * 200) * categoria / 100;
        
        document.querySelector("#total-pagar-mostrar").innerHTML = total;
      
    }else if (categoria.value == "50"){

        const categoria = document.querySelector('#categoria').value;
        const cantidad = document.querySelector('#cantidad').value;
        
       
        total =  (cantidad * 200) - (cantidad * 200) * categoria / 100;
        document.querySelector("#total-pagar-mostrar").innerHTML = total;
        
        
    } else if( categoria.value == "15"){
        const categoria = document.querySelector('#categoria').value;
        const cantidad = document.querySelector('#cantidad').value;
        
        total =  (cantidad * 200) - (cantidad * 200) * categoria / 100;
        document.querySelector("#total-pagar-mostrar").innerHTML = total;
       
    }
};





function leerTexto(e){
    datos [e.target.id] = e.target.value;
    console.log(datos)
}
