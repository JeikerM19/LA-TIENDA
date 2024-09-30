export class Cl_mCliente {
    constructor({ced, cod, cant}){
        this.ced = ced;
        this.cod = cod;
        this.cant = cant;
    }
    get ced() {
        return this._ced;
    }
    set ced(ced) {
        this._ced = ced;
    }
    
    get cod() {
        return this._cod;
    }
    set cod(cod) {
        this._cod = cod;
    }
    
    get cant() {
        return this._cant;
    }
    set cant(cant) {
        this._cant = cant;
    }
    montoPagaCliente(a, b, c){
        switch(this.cod){
            case 'A': return a * this.cant;
            case 'B': return b * this.cant;
            case 'C': return c * this.cant;
            default: return 0;
        }
    }
}