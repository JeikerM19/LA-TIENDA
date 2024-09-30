import { Cl_vCliente } from "./Cl_vCliente.js";
import { Cl_vTienda } from "./Cl_vTienda.js";
import { Cl_mTienda } from "./Cl_mTienda.js";
import { Cl_mCliente } from "./Cl_mCliente.js";

export class Cl_controlador {
    constructor(){
        this.vCliente = new Cl_vCliente(this);
        this.vTienda = new Cl_vTienda(this);
        
    }
    mostrarVistaCliente(){
        this.vTienda.ocultar();
        this.vCliente.mostrar();
    }
    mostrarVistaTienda(){
        this.vCliente.ocultar();
        this.vTienda.mostrar();
    }
    agregarPrecios({pA, pB, pC}){
        let tienda = new Cl_mTienda({pA, pB, pC});
        return tienda;
    }
    
    agregarVenta({ced, cod ,cant}){
        let cliente = new Cl_mCliente({ced, cod, cant});
        let tienda = this.agregarPrecios({pA, pB, pC});
        tienda.procesarCliente(cliente);
        this.vTienda.reporteVenta({
            ced: cliente.ced, 
            cod: cliente.cod, 
            cant: cliente.cant, 
            montoPagaCliente: cliente.montoPagaCliente( tienda.productoA, tienda.productoB, tienda.productoC ), 
            articuloMasVendido: tienda.articuloMasVendido(), 
            mostarMontoTotal: tienda.mostarMontoTotal()
        });
        this.mostrarVistaTienda();
    }
}