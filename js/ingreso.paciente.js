window.addEventListener( "DOMContentLoaded", (eventoLoad) => {
    document.querySelector("form").addEventListener("submit", (eventoSubmit) => {
        eventoSubmit.preventDefault();
        
        const nombre        = $("#nombre").val();
        const tutor         = $("#tutor").val(); 
        const fecha         = $("#fecha").val(); 
        const especie       = $("#especie").val(); 
        const raza          = $("#raza").val(); 
        const genero        = $("#genero").val(); 
        const esterilizado  = $("#castrado").val(); 
        const peso          = $("#peso").val(); 
        const diagnostico   = $("#diagnostico").val(); 

        const nombreValido  = validarNombre(nombre);
        const tutorValido   = validarTutor(tutor);
        const fechaValido   = validarFecha(fecha);
        const especieValido   = validarEspecie(especie);
        const razaValido   = validarRaza(raza);
        const generoValido   = validarGenero(genero);
        const esterilizadoValido   = validarEsterilizado(castrado);
        const pesoValido   = validarPeso(peso);
        const diagnosticoValido   = validarDiagnostico(diagnostico);

        if( nombreValido && tutorValido && fechaValido && especieValido && razaValido && generoValido &&esterilizadoValido && pesoValido && diagnosticoValido){
            guardarDatosSuscriptor(nombre, tutor, fecha, especie, raza, genero, esterilizado,peso, diagnostico);
        } else {
            mostrarMensajeError();
        }
        return false;
    });
});

function guardarDatosSuscriptor (nombre,tutor, fecha,especie,raza,genero,esterilizado,peso,diagnostico) {
        const urlSupabase   = "https://nebqkynypmmrqdibdemt.supabase.co";
        const apiKey        = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lYnFreW55cG1tcnFkaWJkZW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTIyMjgsImV4cCI6MTk2MDc2ODIyOH0.ho1DDQQX6431ozw2UQX5f-nK0KnzhUEUfNgoUzNMK2M";
        const apiURL        = '/rest/v1/ingreso_pacientes'; 

        const ingreso = {
            nombre,
            tutor,
            fecha,
            especie,
            raza,
            genero,
            esterilizado,
            peso,
            diagnostico
        };

        const url = urlSupabase + apiURL; 
        const resultadoFetch = fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "apikey": apiKey,
                "authorization": "Bearer" +apiKey,
                "Prefer": "return=representation" 
            },
        body: JSON.stringify(ingreso)
    }).then( response => {
        if( response.ok ) {
            const r = response.json();
            return r;
        } else {
            console.error("Ocurrió un error al invocar la API de Supabase");
        }
    }).then( data => {
        mostrarMensajeExito(data);
    }).catch( err => console.dir(err) );
}

function mostrarMensajeExito(data){
    const id = data[0].id;
    $("#mensajes").addClass("alert alert-success").html("Se ha guardado correctamente su suscripción con el ID #" + id);
}


function mostrarMensajeError(){} 
function validarNombre(nombre){ return true; } 
function validarTutor(tutor){ return true; } 
function validarFecha(fecha){ return true; }
function validarEspecie(especie){ return true; }
function validarRaza(raza){ return true; }
function validarGenero(genero){ return true; }
function validarEsterilizado(esterilizado){ return true; }
function validarPeso(peso){ return true; }
function validarDiagnostico(diagnostico){ return true; }

