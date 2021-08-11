window.addEventListener("load", function () {
let formulario    = document.querySelector("#form-login");
let email         = document.querySelector("#login-email");
let password      = document.querySelector("#login-password");
let errors = {};

let validateEmail = function () {
    let feedback = '';
    let feedbackElement = email.nextElementSibling;
    let emailRegex = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,4}/
console.log (email.value)
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

    let validatePassword = () => {
        let feedback = "";
        let feedbackElement = password.nextElementSibling;
    
        if (password.value.trim() == "") {
            feedback = "La contraseña no puede estar vacia"
        } else if (password.value.length < 8) {
            feedback = "La contraseña es incorrecta"
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

    email.addEventListener('blur', validateEmail);
    password.addEventListener('blur', validatePassword);

formulario.addEventListener('submit', (e) => {
    validateEmail();
    validatePassword();
    
    if (Object.keys(errors).length) {
        console.log(errors);
        e.preventDefault();
    }
})
})