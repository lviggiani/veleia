import DBTable from "./DBTable.js";
import Pagi from "./Pagi.js";
import Possidente from "./Possidente.js";

export default class Praedia extends DBTable {

    static _table = "praedia";
    static _identifier = "idPraedia";

    constructor(){
        super(...arguments);
    }

    async full(){
        this.possidentes = [];
        if (this.fkPossidentes) this.possidentes.push(await Possidente.get(this.db, this.fkPossidentes));
        if (this.fkPossidentes2) this.possidentes.push(await Possidente.get(this.db, this.fkPossidentes2));
        if (this.fkPossidentes3) this.possidentes.push(await Possidente.get(this.db, this.fkPossidentes3));
        
        delete this.fkPossidentes;
        delete this.fkPossidentes2;
        delete this.fkPossidentes3;

        this.pagi = [];
        if (this.fkPagi) this.pagi.push(await Pagi.get(this.db, this.fkPagi));
        if (this.fkPagi2) this.pagi.push(await Pagi.get(this.db, this.fkPagi2));
        if (this.fkPagi3) this.pagi.push(await Pagi.get(this.db, this.fkPagi3));
        if (this.fkPagi4) this.pagi.push(await Pagi.get(this.db, this.fkPagi4));
        
        delete this.fkPagi;
        delete this.fkPagi2;
        delete this.fkPagi3;
        delete this.fkPagi4;

        return this;
    }

    static async get(db, id){
        const query = `SELECT praedia.idPraedia, praedia.name, praedia.share,
            praedia.fkPossidentes, praedia.fkPossidentes2, praedia.fkPossidentes3,
            praedia.fkPagi, praedia.fkPagi2, praedia.fkPagi3, praedia.fkPagi4,
            praedia_types.name AS type
            FROM ${this._table}
            LEFT JOIN praedia_types ON praedia.fkPraediaType = praedia_types.idPraediaTypes
            WHERE ${this._identifier} = ?`;

        return (await this.all(db, query, this, [id]))[0];
    }
}