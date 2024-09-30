
export class Cl_vTienda {
    constructor(controlador){
        this.vista = document.getElementById("mainForm");
        this.tabla =  document.getElementById("mainForm_tabla");
        this.btAgregar =  document.getElementById("mainForm_btAgregar");
        this.btConfirmar = document.getElementById("mainForm_btConfirmar");
        this.inProductoA =  document.getElementById("mainForm_inProductoA");
        this.inProductoB =  document.getElementById("mainForm_inProductoB");
        this.inProductoC =  document.getElementById("mainForm_inProductoC");
        this.lblArtMasVendido =  document.getElementById("mainForm_lblArtMasVendido");
        this.lblMontoFinal =  document.getElementById("mainForm_lblMontoFinal");
        this.btConfirmar.onclick = () => {
            controlador.agregarPrecios({
                pA: parseFloat(this.inProductoA.value),
                pB: parseFloat(this.inProductoB.value),
                pC: parseFloat(this.inProductoC.value)
            });
        }
        this.btAgregar.onclick = () => controlador.mostrarVistaCliente();
    }
    mostrar(){
        this.vista.hidden = false;
    }
    ocultar(){
        this.vista.hidden = true;
    }
    reporteVenta({ced, cod, cant, montoPagaCliente, articuloMasVendido, mostarMontoTotal}){
        this.tabla.innerHTML += `
        <tr>
            <td>${ced}</td>
            <td>${cod}</td>
            <td>${cant}</td>
            <td>${montoPagaCliente}</td>
        </tr>
        `;
        this.lblArtMasVendido.innerHTML += articuloMasVendido;
        this.lblMontoFinal.innerHTML += mostarMontoTotal;
    }
}