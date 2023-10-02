function redirigirLogin(){
    window.location.href = "/login/login.html";
}

function submitRegister(){

    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var email = document.getElementById("mail").value;

    if ((usuario === "" || contrasena === "") || email === "") {
        alert("Por favor, completa todos los campos.");
        return false;
    }else if((usuario !== "" || contrasena !== "") || email !== ""){
        validarCorreo();
        
    }
    return true;
}

function validarCorreo() {
    var email = document.getElementById("mail").value;
    var dominio = obtenerDominio(email);
    
    switch (dominio) {
        case "gmail.com":
            alert("la cuenta se creo correctamente(hipoteticamente)");
            break;
        case "yahoo.com":
            alert("la cuenta se creo correctamente(hipoteticamente)");
            break;
        case "outlook.com":
            alert("la cuenta se creo correctamente(hipoteticamente)");
            break;
        default:
            alert("Correo invalido.");
    }
}

function obtenerDominio(email) {
    // Obtener la parte después de "@"
    var partes = email.split("@");
    return partes.length > 1 ? partes[1] : "";
}