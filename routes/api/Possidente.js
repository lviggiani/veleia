import DBTable from "./DBTable.js";

export default class Possidente extends DBTable {

    static _table = "possidentes";
    static _identifier = "idPossidentes";

    constructor(){
        super(...arguments);
    }

    async full(){
        return this;
    }

    static async get(db, id){
        const query = `SELECT *
            FROM ${this._table}
            WHERE ${this._identifier} = ?`;

        return (await this.all(db, query, this, [id]))[0];
    }
}