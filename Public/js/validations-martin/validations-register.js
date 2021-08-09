window.addEventListener("load", function(){


    alert('Hola que haces');
    
    let formulario = document.querySelector("#form-registro");

    formulario.addEventListener("submit", function(e){
        

        let errores = [];

        let nombre = document.getElementById("namevalid");
        let apellido = document.querySelector("input.r-lasName");
        let foto = document.querySelector("input.image-perfil");
        let email = document.querySelector("input.r-email");
        let password = document.querySelector("input.r-password");
        let passwordRepeat = document.querySelector("input.r-passwordRepeat");

        // PARA NOMBRE
        if (nombre.value == ""){
            errores.push("Este campo no puede estar vacio");
        }else if (nombre.value.length < 2) {
            errores.push("El nombre debe tener al menos 2 caracteres");
        }

        // PARA APELLIDO
        if (apellido.value == ""){
            errores.push("Este campo no puede estar vacio")
        }else if (napellido.value.length < 2) {
            errores.push("El apellido debe tener al menos 2 caracteres");
        }
        
         // TERMINAR ERROR
    if (errores.length > 0) {
        e.preventDefault();

        let ulErrores = document.querySelector ("div.errores ul");
        for (let i = 0; i < errores.length; i++) {

            ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
        
        }
        
    
    }  


    })


})
    