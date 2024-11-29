//Coge los datos siempre y cuando no sean vacíos, 
//caso contrario que salga mensaje datos incompletos
//<form action="http://milink/guardar/profesor"></form>

let tamaño = 0;
cedula = "";
nombre = "";
apellido = "";

function profesor(idCedula, idNombre, idApellido, idMensaje) {
    tamaño++;
    document.getElementById(idNombre).innerText = nombre;
    document.getElementById(idCedula).innerText = cedula;
    document.getElementById(idApellido).innerText = apellido;
    document.getElementById(idMensaje).style.background = "red"
    document.getElementById(idMensaje).style.color = "black"

    guardar();
}

const vacio = () => {
    if (datos = null) {
        document.getElementById(mensaje).innerText = "Datos Incompletos"
        document.getElementById(mensaje).style.background = "red"
        document.getElementById(mensaje).style.color = "black"
        document.getElementById(mensaje).display = "block"
    }
}

const json = (tamaño, mensaje) => {
    if(tamaño == 0){
        document.getElementById(mensaje).innerText= "No hay datos";

    }else{
        document.getElementById(mensaje).innerText= "Datos completos";
    }

};



const guardar = (tamaño, mensaje) => {
    if(tamaño == 0){
        document.getElementById(mensaje).innerText= "Datos incompletos";

    }else{
        document.getElementById(mensaje).innerText= "Datos completos";
    }

};




//json presenta un objeto en formato json
//el botón json si se aplasta se debe llenar los espacios