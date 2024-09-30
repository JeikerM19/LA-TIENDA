export class Cl_mTienda {
    constructor({pA, pB, pC}){
        this.productoA = pA;
        this.productoB = pB;
        this.productoC = pC;
        this.acA = 0;
        this.acB = 0;
        this.acC = 0;
        this.acMontoTotal = 0.0;
    }
    get productoA() {
        return this._productoA;
    }
    set productoA(pA) {
        this._productoA = pA;
    }
    
    get productoB() {
        return this._productoB;
    }
    set productoB(pB) {
        this._productoB = pB;
    }
    
    get productoC() {
        return this._productoC;
    }
    set productoC(pC) {
        this._productoC = pC;
    }
    procesarCliente(cli){
        switch(cli.cod){
            case 'A': this.acA += cli.cant;
            break;
            case 'B': this.acB += cli.cant;
            break;
            case 'C': this.acC += cli.cant;
            break;
            default: 0;
            break;
        }
        this.acMontoTotal += cli.montoPagaCliente(this.productoA, this.productoB, this.productoC);
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