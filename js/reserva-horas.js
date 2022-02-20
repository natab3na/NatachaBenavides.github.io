document.getElementById("nombre").addEventListener("blur", (evento)=>{
        const input = evento.currentTarget;
        const txtNombre = input.value;

        const feedbackNombre = document.getElementById("feedback-nombre")

        if( txtNombre.length < 3 ){
                feedbackNombre.innerHTML= "El nombre es muy corto"
                input.classList.add("is-valid");
                input.classList.add("is-invalid");
                feedbackNombre.className = "invalid-feedback";
                

        }else {
                feedbackNombre.innerHTML="Ok"
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
                feedbackNombre.className = "valid-feedback";
        }

});

document.getElementById("telefono").addEventListener("blur", (evento)=>{
        const input = evento.currentTarget;
        const txtTelefono = input.value;

        const feedbackTelefono = document.getElementById("feedback-telefono")

        if( txtTelefono.length < 9 ){
                feedbackTelefono.innerHTML= "El numero debe tener 9 digitos"
                input.classList.add("is-valid");
                input.classList.add("is-invalid");
                feedbackTelefono.className = "invalid-feedback";
                

        }else {
                feedbackTelefono.innerHTML="Ok"
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
                feedbackTelefono.className = "valid-feedback";
        }

});

document.getElementById("email").addEventListener("blur", (evento)=>{
        const input = evento.currentTarget;
        const txtEmail = input.value;

        const feedbackEmail = document.getElementById("feedback-telefono")

        if( txtEmail.length < 3 ){
                feedbackEmail.innerHTML= "El email no es valido"
                input.classList.add("is-valid");
                input.classList.add("is-invalid");
                feedbackEmail.className = "invalid-feedback";
                

        }else {
                feedbackEmail.innerHTML="Ok"
                input.classList.remove("is-invalid");
                input.classList.add("is-valid");
                feedbackEmail.className = "valid-feedback";
        }

});

