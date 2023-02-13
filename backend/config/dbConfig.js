module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'NDSuser99$$',
    DB: 'mevn',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}