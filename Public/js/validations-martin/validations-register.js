window.addEventListener("load", function(){   

    let formulario = document.querySelector("#formregistro");
    let nombre = document.querySelector("#register-name");
    let apellido = document.querySelector("#register-lastName");
    let email = document.querySelector("#register-email");
    let password = document.querySelector("#register-password");
    let passwordRepeat = document.querySelector("#register-passwordRepeat");
    let errors = [];

    // PARA NOMBRE
   let validateNombre= function () {
        let feedback = '';
        let feedbackElement = nombre.nextElementSibling;

        if (nombre.value == ""){
            feedback = "Este campo no puede estar vacio";
        }else if (nombre.value.length < 2) {
            feedback = "El nombre debe tener al menos 2 caracteres";
        }
        feedbackElement.innerText = feedback; 
    }
    
    nombre.addEventListener('blur', validateNombre);
    
    // PARA APELLIDO
    let validateApellido= function () {
        let feedback = '';
        let feedbackElement = apellido.nextElementSibling;

        if (apellido.value == ""){
            feedback = "Este campo no puede estar vacio";
        }else if (apellido.value.length < 2) { 
            feedback = "El apellido debe tener al menos 2 caracteres";;
        }
        feedbackElement.innerText = feedback;
    }
    
    apellido.addEventListener('blur', validateApellido);

    
    
    // PARA EMAIL
    let validateEmail = function () {
        let feedback = '';
        let feedbackElement = email.nextElementSibling;
        let emailRegex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/
    
        if (email.value.trim() == "") {
            feedback = "El email no puede estar vacio"
        } else if (!emailRegex.test(email.value)) {
            feedback = 'Email invalido'
        }
    
        if(feedback){
            email.classList.add('error-input');
            errors.email = feedback;
        }
        else{
            email.classList.remove('error-input');
            delete errors.email;
        }
    
        feedbackElement.innerText = feedback; 
        }

    email.addEventListener('blur', validateEmail);
        
    // PARA PASSWORD
    let validatePassword= () => {
        let feedback = '';
        let feedbackElement = password.nextElementSibling;

        if (password.value.trim() == "") {
            feedback = "La contraseña no puede estar vacia"
        } else if (password.value.length < 8) {
            feedback = "La contraseña no es valida"
        }
    
        if (feedback) {
            password.classList.add('error-input');
            errors.password = feedback;
        }else {
            password.classList.remove('error-input');
            delete errors.password;
        }

        feedbackElement.innerText = feedback;
    }

    password.addEventListener('blur', validatePassword);

    // PARA CONFIRMAR PASSWORD

    let validatePasswordRepeat = () => {
        let feedback = "";  
        let feedbackElement = passwordRepeat.nextElementSibling;
    
        if (passwordRepeat.value == "") {
            feedback = "Debes confirmar tu contraseña"
        } else if (passwordRepeat.value !== password.value) {
            feedback = "Las contraseñas no coinciden"
        }
        
        if (feedback) {
            passwordRepeat.classList.add('error-input');
            errors.passwordRepeat = feedback;
        }else {
            passwordRepeat.classList.remove('error-input');
            delete errors.passwordRepeat;
        }
        
    
        feedbackElement.innerText = feedback;
    }

    passwordRepeat.addEventListener('blur', validatePasswordRepeat);


    //PARA CONFIRMAR FOTO

// Si submit de form se ejecutan funciones de validacion
    formulario.addEventListener('submit', (e) => {
        validateNombre();
        validateApellido();
        validateEmail();
        validatePassword();
        ValidatePasswordRepeat();
    
        // si existen errores prevent default
        if (Object.keys(errors).length) {
            e.preventDefault();
        }
    })
        


})
    