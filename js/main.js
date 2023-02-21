
for (let i = 1; i <= 20; i++) {
    let ingresarNombre = prompt("Ingresar nombre ");
    let ingresarApellido = prompt(" Ingresar apellido");
    if ((ingresarNombre != "") && (ingresarApellido != "")) {
        alert("Datos registrados:  " + "\nNombre " + ingresarNombre + " Apellido " + ingresarApellido);
        alert("A continuación podrá seleccionar turnos para trámites en Renaper");
    }
    else {
        alert("Debe Ingresar su nombre y apellido");
        let ingresarNombre = prompt("Ingresar nombre ");
        let ingresarApellido = prompt(" Ingresar apellido");
        alert("Datos registrados:  " + "\nNombre " + ingresarNombre + " Apellido " + ingresarApellido);
        alert("A continuación podrá seleccionar turnos para trámites en Renaper");
    }
    let turno = prompt("solicitud de turno para:");
    if ((turno != "") && ((turno == "DNI") || (turno == "dni"))) {
        alert("Podrá tomar turnos para este trámite para el 09/03 en adelante");
    }
    else if ((turno != "") && ((turno == "SOLICITUD DE PARTIDAS") || (turno == "solicitud de partidas"))) {
        alert("Actualmente no hay turnos disponibles para este trámite");
        let turno = prompt("solicitud de turno para:");
    }
    else {
        alert("la especialidad seleccionada se encuentra disponible");
    }
    let fecha = prompt("ingrese fecha DD/MM")

    let horario = prompt("Ingrese hora")

    alert(" Turno  N° " + i + "\nNombre: " + ingresarNombre + "\nApellido: " + ingresarApellido + "\nEspecialidad: " + turno + "\nFecha: " + fecha + "\nhora: " + horario);
}






















