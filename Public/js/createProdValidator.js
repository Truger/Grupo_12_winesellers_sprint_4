window.addEventListener("load", function() {
    let formulario         = document.querySelector("#form-create");

    let productName        = document.querySelector("#prod-name");
    let productDescription = document.querySelector("#descripction");   
    let productPrice       = document.querySelector("#prod-price");
    
    formulario.addEventListener("submit", function (e) {
  
        let errores = [];
    
        if(productName.value == '' ){
            errores.push('El nombre no puede estar vacío');
        }else if (productName.value.length < 7) {
            eroores.push('El nombre debe contener al menos 6 caracteres');
        }

        if(productDescription.value == '' ){
            errores.push ('La descripcion no puede estar vacia');
        }else if (productDescription.value.length < 16) {
            errores.push('La descripcion del producto debe contener al menos 16 caracteres');
        }

        if(productPrice.value == '' ){
            errores.push('El precio no puede estar vacío');
        }else if (price.value <= 0) {
            errores.push('El valor no puede ser 0');
        };

        if (errores.lenght > 0) {
            e.preventDefault();
   
            let ulErrores= document.querySelector("div.errores ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
                
            }
        }
    });     
});