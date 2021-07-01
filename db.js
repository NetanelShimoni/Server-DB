const {Pool} = require("pg") // Use PG library to connect to our DB - Don’t forget install library . 
const pool = new Pool({ // Struct 'pool' to set up configurations with all our items
    user: "postgres",
    password: "122236",
    host: "localhost",
    port: 5432,
    database: "users"

});
module.exports=pool; // Create library to use in index.js 