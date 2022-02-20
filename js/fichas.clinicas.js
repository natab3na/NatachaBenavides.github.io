window.addEventListener("DOMContentLoaded", (loadEvent) => {
    recuperarDatosPacientes();
});

function recuperarDatosPacientes () {
    const urlSupabase   = "https://nebqkynypmmrqdibdemt.supabase.co";
    const apiKey        = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lYnFreW55cG1tcnFkaWJkZW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTIyMjgsImV4cCI6MTk2MDc2ODIyOH0.ho1DDQQX6431ozw2UQX5f-nK0KnzhUEUfNgoUzNMK2M";
    const apiURL        = '/rest/v1/ingreso_pacientes'; 

    
    const url = urlSupabase + apiURL; 
    const resultadoFetch = fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "apikey": apiKey,
            "authorization": "Bearer" +apiKey,
            
        }
    
}).then( response => {
    if( response.ok ) {
        const r = response.json();
        return r;
    } else {
        console.error("Ocurrió un error al invocar la API de Supabase");
    }
}).then( data => {
    mostrarDatosEnTabla(data);
}).catch( err => console.dir(err) );
}

function mostrarDatosEnTabla(data) {
    data.forEach( paciente => {
        const row = `
        <tr>
            <td>${paciente.id}</td>
            <td>${paciente.nombre}</td>
            <td>${paciente.created_at}</td>
            <td>${paciente.tutor}</td> 
            <td>${paciente.fecha}</td>
            <td>${paciente.especie}</td>
            <td>${paciente.raza}</td>
            <td>${paciente.genero}</td>
            <td>${paciente.esterilizado}</td>
            <td>${paciente.peso}</td>
            <td>${paciente.diagnostico}</td>            
            <td>
                <a href="#">editar</a>
                <a href="#">eliminar</a>
            </td>
        </tr>
        `
        $("table tbody").append(row);
    });
}
