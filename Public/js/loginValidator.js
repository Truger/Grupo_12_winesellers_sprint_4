window.addEventListener("load", function () {

  let formulario    = document.querySelector("#form-login");

  formulario.addEventListener("submit", function (event) {
  
    let email         = document.querySelector("#login-email");
    let password      = document.querySelector("#login-password");
  
   

        console.log('disparo de funcion')
      let errores = [];
  
      if (email.value.length == "") {
        errores.push("El mail no puede estar vacio");
      } else if (email.value.indexOf('@') < 0) {
        errores.push("Debe ser un email válido");
      }
  
   if (password.value == "") {
    errores.push( "La contraseña no puede estar vacía");
        }

  
     if (errores.length > 0) {
      event.preventDefault();

         let ulErrores= document.querySelector("div.errores ul");
         for (let i = 0; i < errores.length; i++) {
             ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
             
         }
     
     }
    });

  });