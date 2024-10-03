
export class Cl_vCliente {
    constructor(controlador){
        this.vista = document.getElementById("clienteForm");
        this.inCedula = document.getElementById("clienteForm_inCedula");
        this.inCodigo = document.getElementById("clienteForm_inCodigo");
        this.inCantidad = document.getElementById("clienteForm_inCantidad");
        this.btAceptar = document.getElementById("clienteForm_btAceptar");
        this.btAceptar.onclick = () => { 
            controlador.agregarVenta({
                ced: this.inCedula.value,
                cod: this.inCodigo.value,
                cant: Number(this.inCantidad.value), 
                pPA: controlador.tienda.precioPA, 
                pPB: controlador.tienda.precioPB,
                pPC: controlador.tienda.precioPC,
            }); /* Se llama al agregarVenta que esta en el controlador y los 3 primeros parametros toman el valor de su respectivo input, osea el dato que se le haya ingresado */
        };
        this.ocultar(); //Ocultamos La seccion donde se le pide datos al cliente
    }
    mostrar(){
        this.vista.hidden = false;
    }
    ocultar(){
        this.vista.hidden = true;
    }
}