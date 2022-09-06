const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const cors = require("cors")

app.use(cors({
    origin: 'http://localhost:3000'
}))

require('dotenv/config');




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
mongoose.connect(process.env.DB_CONNECTION, (err) => {
    if(err){
        console.log("Mongo DB Atlas Connection Failed");
    } else {
        console.log("Mongo DB Atlas Connection Established");
    }
})

const PORT = process.env.Port || 5000;

app.listen(PORT, () => console.log(`SERVER Started on Port: ${PORT}`));