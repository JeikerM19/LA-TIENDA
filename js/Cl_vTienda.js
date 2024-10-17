
export class Cl_vTienda {
    constructor(controlador){
        this.vista = document.getElementById("mainForm");
        this.tabla =  document.getElementById("mainForm_tabla");
        this.btAgregar =  document.getElementById("mainForm_btAgregar");
        this.lblArtMasVendido =  document.getElementById("mainForm_lblArtMasVendido");
        this.lblMontoFinal =  document.getElementById("mainForm_lblMontoFinal");
        this.inPrecioPA = document.getElementById("clienteForm_inPrecioPA");
        this.inPrecioPB = document.getElementById("clienteForm_inPrecioPB");
        this.inPrecioPC = document.getElementById("clienteForm_inPrecioPC");
        this.inPrecios = document.getElementById("clienteForm_inPrecios");
        this.btAceptar = document.getElementById("mainForm_btAceptar");
        this.btAceptar.onclick = () => {
            controlador.agregarPrecios({
                pA: this.inPrecioPA.value,
                pB: this.inPrecioPB.value,
                pC: this.inPrecioPC.value,
            }) //Se le agregan los valores a cada uno de los parametros, nuevamente se usa el controlador para llamar a agregarPrecios
            this.ocultarPrecios(); //Se oculta la seccion de precios
        };
        this.btAgregar.onclick = () => controlador.mostrarVistaCliente(); //Usando el cotrolador se llama a ese metodo y el metodo oculta el mainForm(Seccion Principal) y muestra el clienteForm(Seccion donde se pide datos al cliente)
    }
    mostrar(){
        this.vista.hidden = false;
    }
    ocultar(){
        this.vista.hidden = true;
    }
    ocultarPrecios(){
        this.inPrecios.hidden = true;
    }
    reporteVenta({ced, cod, cant, montoPagarCliente, articuloMasVendido, mostarMontoTotal}){
        this.tabla.innerHTML += `
        <tr>
            <td>${ced}</td>
            <td>${cod}</td>
            <td>${cant}</td>
            <td>${montoPagarCliente}</td>
        </tr>
        `;
        this.lblArtMasVendido.innerHTML = articuloMasVendido;
        this.lblMontoFinal.innerHTML = mostarMontoTotal;
        //Se muestran los reportes haciendo uso de cada uno de los parametros
    }
}