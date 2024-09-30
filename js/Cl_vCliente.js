
export class Cl_vCliente {
    constructor(controlador){
        this.vista = document.getElementById("clienteForm");
        this.inCedula = document.getElementById("clienteForm_inCedula");
        this.inCodigo = document.getElementById("clienteForm_inCodigo");
        this.inCantidad = document.getElementById("clienteForm_inCantidad");
        this.btAceptar = document.getElementById("clienteForm_btAceptar");
        this.btAceptar.onclick = () => {
            controlador.agregarVenta({ced: this.inCedula.value, cod: this.inCodigo.value, cant: this.inCantidad.value});
        }
        this.ocultar();
    }
    mostrar(){
        this.vista.hidden = false;
    }
    ocultar(){
        this.vista.hidden = true;
    }
}