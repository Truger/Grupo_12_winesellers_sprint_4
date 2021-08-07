window.addEventListener("load", function(){
    
    alert('Hola como estas');
    
    let formulario = document.querySelector("#form-registro");

    formulario.addEventListener("submit", function(e){
        

        let errores = [];

        let nombre = document.querySelector("input.r-name");
        let apellido = document.querySelector("input.r-lasName");
        let foto = document.querySelector("input.image-perfil");
        let email = document.querySelector("input.r-email");
        let password = document.querySelector("input.r-password");
        let passwordRepeat = document.querySelector("input.r-passwordRepeat");



        // PARA NOMBRE
        if (nombre.value == ""){
            errores.push("Este campo no puede estar vacio")
        }else if (nombre.value.length < 2) {
            errores.push("El nombre debe tener al menos 2 caracteres");
        }

        // PARA APELLIDO
        if (apellido.value == ""){
            errores.push("Este campo no puede estar vacio")
        }else if (napellido.value.length < 2) {
            errores.push("El apellido debe tener al menos 2 caracteres");
        }

        // PARA FOTO
        if (foto) {
            let filename = foto.value;
            let fileExtension = filename.split(".").pop();
            if (!acceptedExtensions.includes(fileExtension)) {
                feedback = `Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}` 
                foto.classList.add('is-invalid');   
            }
        }
        if (feedback) {
           fotoError.innerText = feedback;
            hasErrors.foto = feedback;
        } else{
            fotoError.innerText = ''; 
           foto.classList.remove('is-invalid');  
        }

        //PARA EMAIL
        let id = 'email_error';
        let regexEmail = /^([A-Za-z0-9_\-\+\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if (email.value == '' || email.value == null) {
            errores.push( { id, msg: 'Este campo no puede estar vacío' } );
            email.classList.add('is-invalid');
            return true
        } else if (!email.value.match(regexEmail)) {
            errores.push( { id, msg: 'El email debe ser valido' } );
            email.classList.add('is-invalid');
            return true
        }

        // PARA PASSSOWORD
        let id = 'password_error';
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
        if (password.value == '' || password.value == null) {
            errores.push( { id, msg: 'Este campo no puede estar vacío' } );
            password.classList.add('is-invalid');
            return true
        } else if (!password.value.match(strongRegex)) {
            errores.push( { id, msg: 'La contraseña debe tener al menos una minúscula, una mayúscula, un número y un caracter especial' } );
            password.classList.add('is-invalid');
            return true
        } else if (password.value.length < 8 || password.value.length > 12) {
            errores.push( { id, msg: 'La contraseña debe tener entre 8 y 12 caracteres' } );
            password.classList.add('is-invalid');
            return true
        }

        //PARA PASSWORDREPEAT
        let id = 'passwordRepeat_error';
        if (passwordRepeat.value == '' || passwordRepeat.value == null) {
            errores.push( { id, msg: 'Este campo no puede estar vacío' } );
            passwordRepeat.classList.add('is-invalid');
            return true
        } else if (passwordRepeat.value !== password.value) {
            errores.push( { id, msg: 'Las contraseñas no coinciden' } );
            repassword.classList.add('is-invalid');
            return true
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