const tibiadb = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "123456",
    DB: "tibiaapp",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export default tibiadb