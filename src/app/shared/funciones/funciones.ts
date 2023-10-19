
export class Funciones {
    ConvertStringtoDateDB(fecha:any) {
        var parts = fecha.split('-');
        var mydate = new Date(parts[0], parts[1] - 1, parts[2]);
        return mydate;
    }

    formatDate(date:any) {
        var d = new Date(date)         
        var cad =d.toUTCString();

        return cad.slice(4,16);
    }

    mostrarMensaje(tipo:any, nombreCampo:any) {
        var mensaje = "";
        if (tipo == "insertar") {
            mensaje = "Se realizó satisfactoriamente el registro.";
        } else if (tipo == "actualizar") {
            mensaje = "Se realizó satisfactoriamente la actualización.";
        } else if (tipo == "eliminacion") {
            mensaje = "Se realizó satisfactoriamente la eliminación del registro.";
        } else if (tipo == "error") {
            mensaje = "Hubo un error en el sistema. Consulte con el administrador.";
        } else if (tipo == "validación") {
            mensaje = "El dato" + nombreCampo + " es obligatorio.";
        }

        return mensaje;
    }
}