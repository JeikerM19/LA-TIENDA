import { Cl_vCliente } from "./Cl_vCliente.js";
import { Cl_vTienda } from "./Cl_vTienda.js";
import { Cl_mTienda } from "./Cl_mTienda.js";
import { Cl_mCliente } from "./Cl_mCliente.js";

export class Cl_controlador {
    constructor(){
        this.vCliente = new Cl_vCliente(this);
        this.vTienda = new Cl_vTienda(this);
        this.mTienda = new Cl_mTienda();
    }
    mostrarVistaCliente(){
        this.vTienda.ocultar();
        this.vCliente.mostrar();
    }
    mostrarVistaTienda(){
        this.vCliente.ocultar();
        this.vTienda.mostrar();
    }
    agregarVenta({ced, cod ,cant}){
        let cliente = new Cl_mCliente({ced, cod, cant});
        this.mTienda.procesarCliente(cliente);
        this.vTienda.reporteVenta({
            ced: cliente.cedula, 
            cod: cliente.codigo, 
            cant: cliente.cantidad, 
            montoPagarCliente: cliente.montoPagarCliente(), 
            articuloMasVendido: this.mTienda.articuloMasVendido(), 
            mostarMontoTotal: this.mTienda.mostarMontoTotal()
        });
        this.mostrarVistaTienda();
    }
}