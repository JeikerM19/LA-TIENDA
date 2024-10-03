import { Cl_vCliente } from "./Cl_vCliente.js";
import { Cl_vTienda } from "./Cl_vTienda.js";
import { Cl_mTienda } from "./Cl_mTienda.js";
import { Cl_mCliente } from "./Cl_mCliente.js";

export class Cl_controlador {
    constructor(){
        this.vCliente = new Cl_vCliente(this);
        this.vTienda = new Cl_vTienda(this);
        //Definimos las instancias de las dos clases vista, y usamos this para que las vistas accedan a los metodos del controladors
        this.tienda = null; // Definimos una variable Tienda que sera usada para crear la instancia de la mTienda(null: no tiene ningún objeto o valor asignado)
    }
    mostrarVistaCliente(){
        this.vTienda.ocultar(); //Oculta la vista Tienda
        this.vCliente.mostrar(); //Muestra la vista Cliente
    }
    mostrarVistaTienda(){
        this.vCliente.ocultar(); //oculta la vista Cliente
        this.vTienda.mostrar(); //muestra la vista Tienda
    }
    agregarPrecios({pA, pB, pC}){
        if (this.tienda == null) {  // Creamos una unica instancia de la clase haciendo uso de una condicion si la variable tienda no se le ha asignado ningun objeto entonces se crea una instancia de la clase mTienda con sus respectivos Parametros(Luego este metodo sera usado en vTienda)
            this.tienda = new Cl_mTienda({pA, pB, pC});
        }
        return this.tienda; //retornamos el nuevo valor de tienda, con todo esto nos aseguramos de que la Clase mTienda solo se inicialice una vez
    }
    agregarVenta({ced, cod ,cant, pPA, pPB, pPC}){ //Creamos el agregarVentas que se usara en la vista Cliente
        let cliente = new Cl_mCliente({ced, cod, cant, pPA, pPB, pPC});
        this.tienda.procesarCliente(cliente);
        this.vTienda.reporteVenta({
            ced: cliente.cedula, 
            cod: cliente.codigo, 
            cant: cliente.cantidad, 
            montoPagarCliente: cliente.montoPagarCliente(), 
            articuloMasVendido: this.tienda.articuloMasVendido(), 
            mostarMontoTotal: this.tienda.mostarMontoTotal() //Sustituimos los parametros del reporte venta por cada uno de los valores necesarios
        });
        this.mostrarVistaTienda(); //Muestra la vista Tienda(mainForm) y Oculta la vista Cliente(clienteForm)
    }
}