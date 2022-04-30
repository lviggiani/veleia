import DBTable from "./DBTable.js";

export default class Sorte extends DBTable {

    static _table = "sortes";
    static _identifier = "idSortes"
    
    constructor(){
        super(...arguments);
    }
}