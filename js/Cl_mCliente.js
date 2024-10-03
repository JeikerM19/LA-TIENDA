export class Cl_mCliente {
    constructor({ced, cod, cant, pPA, pPB, pPC}){
        this.cedula = ced;
        this.codigo = cod;
        this.cantidad = cant;
        this.pPA = pPA;
        this.pPB = pPB;
        this.pPC = pPC;
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
    get pPA() {
        return this._pPA;
    }
    set pPA(pPA) {
        this._pPA = pPA;
    }
    
    get pPB() {
        return this._pPB;
    }
    set pPB(pPB) {
        this._pPB = pPB;
    }
    get pPC() {
        return this._pPC;
    }
    set pPC(pPC) {
        this._pPC = pPC;
    }
    montoPagarCliente(){
        switch(this.codigo){
            case 'A': return this.pPA * this.cantidad;
            case 'B': return this.pPB * this.cantidad;
            case 'C': return this.pPC * this.cantidad;
            default: return 0;
        }
    }
}