export default class DBTable {
    #db;

    static _table = "";
    static _identifier = "";

    constructor(db, fields){
        this.#db = db;
        Object.assign(this, fields);
    }

    get db() { return this.#db }

    static async get(db, id){
        return (await this.all(db, `SELECT * FROM ${this._table} WHERE ${this._identifier} = ?`, this, [id]))[0];
    }

    static all(db, query, Cls, params){
        return new Promise((resolve, reject) => {
            const args = [query, params, (err, rows) => {
                err ? 
                    reject(err) :
                    resolve(rows.map(row => Cls ? new Cls(db, row) : row))
                }].filter(item => !!item);

            db.all(...args);
        });
    }
}