class SqliteContext {
    sqlite
    
    constructor() {
        this.sqlite = require('sqlite3').verbose()
    }

    createDatabase() {
        return new Promise((resolve, reject) => {
            const database = new this.sqlite.Database('./infrastructure/database/relational/sqlite/pata.sqlite', (error) => {
                if (error) {
                    reject(error)
                }             
            })

            resolve(database)
        })
    }

    closeDatabase(database) {
        return new Promise((resolve, reject) => {
            database.close((error) => {
                if (error) {
                    reject(error)
                }
                resolve()
            })
        })
    }

    run(database, sql, params) {
        return new Promise((resolve, reject) => {
            database.run(sql, params, (error) => {
                if (error) {
                    reject(error)
                }
                resolve()
            })
        })
    }

    get(database, sql, params) {
        return new Promise((resolve, reject) => {
            database.get(sql, params, (error, row) => {
                if (error) {
                    reject(error)
                }

                resolve(row)
            })
        })
    }

    getAll(database, sql, params) {
        return new Promise((resolve, reject) => {
            database.all(sql, params, (error, rows) => {
                if (error) {
                    reject(error)
                }

                resolve(rows)
            })
        })
    }
}

module.exports =  {
    SqliteContext
}