import DBTable from "./DBTable.js";

export default class Pagi extends DBTable {

    static _table = "pagi";
    static _identifier = "idPagi";

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