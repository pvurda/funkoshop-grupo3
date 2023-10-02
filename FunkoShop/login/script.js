function submitForm() {
    // Obtener los valores del formulario
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Validar los campos (puedes hacer validaciones más avanzadas)
    if (usuario === "" || contrasena === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Simular un envío a un servidor (puedes realizar una petición AJAX aquí)
    alert("Formulario enviado. Usuario: " + usuario);
}

function forgotPassword() {
    alert("¡No te preocupes! Puedes restablecer tu contraseña.");
}