window.addEventListener("load", function() {
    
    let formulario         = document.querySelector("#form-edit");
    let productName        = document.querySelector("#edit-name");
    let productDescription = document.querySelector("#descripction");   
    let productPrice       = document.querySelector("#edit-price");
    let img                = document.querySelector("#file");
    let errors = {};
    
    let validateProductName = () => {
        let feedback = "";
        let feedbackElement = productName.nextElementSibling;
    
        if (productName.value.trim() == "") {
            feedback = "El nombre no puede estar vacio"
        }else if (productName.value.length < 8) {
            feedback = "El nombre debe tener mas de 8 caracteres "
        }

        if (feedback) {
            productName.classList.add('error-input');
            errors.productName = feedback;
        }else {
            productName.classList.remove('error-input');
            delete errors.productName;
        }

        feedbackElement.innerText = feedback;
    }
    let validateProductDescription = () => {
        let feedback = "";
        let feedbackElement = productDescription.nextElementSibling;
    
        if (productDescription.value.trim() == "") {
            feedback = "La descripcion no puede estar vacia"
        }else if (productDescription.value.length < 15) {
            feedback = "La descripcion debe tener al menos 15 caracteres"
        }
    
        if (feedback) {
            productDescription.classList.add('error-input');
            errors.productDescription = feedback;
        }else {
            productDescription.classList.remove('error-input');
            delete errors.productDescription;
        }
    
        feedbackElement.innerText = feedback;
    }

    let validateProductPrice = () => {
        let feedback = "";
        let feedbackElement = productPrice.nextElementSibling;
    
        if (productPrice.value == "" || productPrice.value == 0) {
            feedback = "Debe colocar un precio mayor a 0"
        }
    
        if (feedback) {
            productPrice.classList.add('error-input');
            errors.productPrice = feedback;
        }else {
            productPrice.classList.remove('error-input');
            delete errors.productPrice;
        }
    
        feedbackElement.innerText = feedback;
    }

    let validateImg = () => {
        let feedback = "";
        let feedbackElement = img.nextElementSibling;
        let acceptedExtensions = ['jpg', 'png', 'jpeg', 'gif'];
        let filename = img.value;
        let fileExtension = filename.split(".").pop();
    console.log(fileExtension)
        if (img.files[0] == undefined) {
            feedback = "Debes cargar una imagen"
        }else if(!acceptedExtensions.includes(fileExtension)) {
            console.log("algo");
            feedback = `Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`
        }
    console.log(feedback);
        if (feedback) {
            img.classList.add('error-input');
            errors.img = feedback;
        }else {
            img.classList.remove('error-input');
            delete errors.img;
        }
    
        feedbackElement.innerText = feedback;
    }

    productName.addEventListener('blur', validateProductName);
    productDescription.addEventListener('blur', validateProductDescription);
    productPrice.addEventListener('blur', validateProductPrice);
    img.addEventListener('blur', validateImg);

    formulario.addEventListener('submit', (e) => {
        validateProductName();
        validateProductDescription();
        validateProductPrice();
        validateImg();

        if (Object.keys(errors).length) {
            e.preventDefault();
        } 
    });
});