export class Cl_mTienda {
    constructor({pA, pB, pC}){
        this.acA = 0;
        this.acB = 0;
        this.acC = 0;
        this.acMontoTotal = 0.0;
        this.precioPA = pA;
        this.precioPB = pB;
        this.precioPC = pC;
    }
    procesarCliente(cli){
        switch(cli.codigo){
            case 'A': this.acA += cli.cantidad;
            break;
            case 'B': this.acB += cli.cantidad;
            break;
            case 'C': this.acC += cli.cantidad;
            break;
            default: 0;
            break;
        }
        this.acMontoTotal += cli.montoPagarCliente();
    }
    articuloMasVendido(){
        if(this.acA == this.acB || this.acA == this.acC){
            if(this.acA > this.acC){
                return "Producto A y B";
            } else if(this.acC > this.acA){
                return "Producto C";
            } else if(this.acA > this.acB){
                return "Producto A y C";
            } else if(this.acB > this.acA){
                return "Producto B";
            } else {
                return "Todos se vendieron por igual";
            }
        } else if(this.acA > this.acB && this.acA > this.acC){
            return "Producto A";
        } 
        else if(this.acB > this.acA && this.acB > this.acC){
            return "Producto B";
        } 
        else {
            return "Producto C";
        }
    }
    mostarMontoTotal(){
        return this.acMontoTotal.toFixed(2);
    }

}