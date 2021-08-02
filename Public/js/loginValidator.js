window.addEventListener("load", function () {
    let formulario    = document.querySelector("#form-login");

    let email         = document.querySelector("#login-email");
    let password      = document.querySelector("#login-password");
  
    formulario.addEventListener("submit", function (e) {
  
      let errores = [];
  
      if (email.value.length == "") {
        errors.push("El mail no puede estar vacio");
      } else if (email.value.indexOf('@') < 0) {
        errors.push("Debe ser un email válido");
      }
  
      if (password.value == "") {
        errors.push( "La contraseña no puede estar vacía");
      }
  
     if (errores.lenght > 0) {
         e.preventDefault();

         let ulErrores= document.querySelector("div.errores ul");
         for (let i = 0; i < errores.length; i++) {
             ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
             
         }
     }
    });
  });