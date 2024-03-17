import { Sequelize } from "sequelize";

const db = new Sequelize('cobajwt','root','',{
    host:"localhost",
    dialect:"mysql",
    timezone: '+07:00',
    decimalNumbers: true
});

export default db;