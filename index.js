import express from "express";
import cors from "cors";
import router from "./src/router.js"
import {connection} from "./src/mongo.js"

connection();
const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/Users" , router)

app.get('/', (req, res)=>{
    res.send("running")
})

app.listen(3000)