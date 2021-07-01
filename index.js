// IMPORTS
const express = require("express")
const app = express();
const cors = require("cors")
const pool = require("./db")

//Middleware (API)
app.use(cors());
app.use(express.json());

//ROUTES//

//create a user
app.post("/users", async(req,res) =>{
    try{
        console.log(req.body);

       const user = req.body;
       //console.log(user.LastName);

        const newuser = await pool.query("INSERT INTO user_table (UserId, Name,LastName,Age,Brithdate) VALUES ($1, $2,$3,$4,$5) RETURNING *",
        [user.UserId,user.Name , user.LastName,user.Age,user.Brithdate]
        );

        res.json(newuser.rows);
    }catch(err){

        console.error(err.message)
    }
 } );


//get all users

app.get("/users", async(req,res) => {
try{
const alluser = await pool.query("SELECT * FROM user_table");
    console.log(alluser.json);

res.json(alluser.rows);
}catch(err){
console.log(err.message)
}}  );

//update a user
app.put("/users/:id", async (req,res) => {
try{
    const id = req.params;
    const user = req.body;
    const updateuser = await pool.query("UPDATE user_table SET Name = $1 ,LastName = $2 ,Age = $3 ,Brithdate=$4 WHERE userid = $5",
    [user.Name , user.LastName,user.Age,user.Brithdate,id]);
    res.json("USER is UPDATE!");
}catch(err){
console.log(err.message);
}
});

 


//delete a user
app.delete("/users/:id", async (req,res) => {
    try{
        const id = req.params;
        //const {lastname} = req.body;
        const deleteuser = await pool.query("DELETE FROM user_table WHERE userid= $1",
        [id]);
        res.json("USER is REMOVE!");
    }catch(err){
    console.log(err.message);
    }
    });

app.listen(5000, () => {
    console.log("Server start work on port 5000!")
});
