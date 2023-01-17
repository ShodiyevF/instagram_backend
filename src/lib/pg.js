const pg = require('pg')

const pool = new pg.Pool({
    user: 'postgres',
    password: 'test',
    host: 'localhost',
    port: 5432,
    database: 'instagram_test'
})

const uniqRow = async (queryy, ...arr) => {
    try{
        const client = await pool.connect()
        const query = await client.query(queryy, arr)
        client.release()
        return query()
    } catch (err){
        console.log(err.message, 'uniqROW');
    }
}

module.exports = {
    uniqRow
}