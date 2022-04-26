const app = require("./index");

const connect = require("./configs/db");

app.listen(7001,async () => {
    try{
       await connect();

       console.log("listening on port 7001");
    }catch(err){
        console.log("listening on port 7001");
    }
});