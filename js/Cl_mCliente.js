export class Cl_mCliente {
    constructor({ced, cod, cant}){
        this.cedula = ced;
        this.codigo = cod;
        this.cantidad = cant;
    }
    get cedula() {
        return this._cedula;
    }
    set cedula(ced) {
        this._cedula = ced;
    }
    
    get codigo() {
        return this._codigo;
    }
    set codigo(cod) {
        this._codigo = cod;
    }
    
    get cantidad() {
        return this._cantidad;
    }
    set cantidad(cant) {
        this._cantidad = cant;
    }
    

    montoPagarCliente(){
        switch(this.codigo){
            case 'A': return 10 * this.cantidad;
            case 'B': return 5 * this.cantidad;
            case 'C': return 20 * this.cantidad;
            default: return 0;
        }
    }
}