import DBTable from "./DBTable.js";

export default class Praedia extends DBTable {

    static _table = "praedia";
    static _identifier = "idPraedia";

    constructor(){
        super(...arguments);
    }

    async full(){
        return this;
    }

    static async get(db, id){
        const query = `SELECT praedia.idPraedia, praedia.name, praedia.share,
            praedia_types.name AS type
            FROM ${this._table}
            LEFT JOIN praedia_types ON praedia.fkPraediaType = praedia_types.idPraediaTypes
            WHERE ${this._identifier} = ?`;

        return (await this.all(db, query, this, [id]))[0];
    }
}