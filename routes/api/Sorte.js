import Aestimatione from "./Aestimatione.js";
import DBTable from "./DBTable.js";

export default class Sorte extends DBTable {

    static _table = "sortes";
    static _identifier = "idSortes";
    
    constructor(){
        super(...arguments);
    }

    async getAestimationes(){
        this.aestimationes = await Promise.all((
            await DBTable.all(this.db, "SELECT * FROM sortes_aestimationes WHERE fkSortes = ?", undefined, [this.idSortes]))
        .map(async item => (await Aestimatione.get(this.db, item.fkAestimationes)).full()));
    }

    async full(){
        await this.getAestimationes();
        
        return this;
    }
}