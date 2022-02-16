window.addEventListener('DOMContentLoaded', (eventLoad) => {
   
    document.querySelector("form-signin").addEventListener(
        "submit", (eventoSubmit) => {
        eventoSubmit.preventDefault();
        

        if(usuarioEsValido() && contrasenaEsValida() ){
            validarUsuario();
          }  else{
                mostrarMensajeerror();
          }
    
        return false

    }) ;

});

