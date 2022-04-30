import DBTable from "./DBTable.js";
import Sorte from "./Sorte.js";

export default class Obligatio extends DBTable {

    static _table = "obligationes";
    static _identifier = "idObligationes";

    constructor(){
        super(...arguments);
    }

    async getSortes(){
        this.sortes = await Promise.all((
            await DBTable.all(this.db, "SELECT * FROM obligationes_sortes WHERE fkObligationes = ?", undefined, [this.idObligationes]))
        .map(item => Sorte.get(this.db, item.fkSortes)));
    }

    async full(){
        await this.getSortes();
        return this;
    }

    static async all(db){
        return Promise.all(
            (await DBTable.all(db, "SELECT * FROM obligationes ORDER BY name", Obligatio))
            .map(async obligatio => await obligatio.full()));
    }
}