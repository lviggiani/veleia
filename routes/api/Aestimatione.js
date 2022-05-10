import DBTable from "./DBTable.js";
import Praedia from "./Praedia.js";

export default class Aestimatione extends DBTable {

    static _table = "aestimationes";
    static _identifier = "idAestimationes";

    constructor(){
        super(...arguments);
    }

    async getPraedia(){
        this.praedia = await Promise.all((
            await DBTable.all(this.db, "SELECT * FROM aestimationes_praedia WHERE fkAestimationes = ?", undefined, [this.idAestimationes]))
        .map(async item => (await Praedia.get(this.db, item.fkPraedia)).full()));
    }

    async full(){
        await this.getPraedia();

        return this;
    }
}