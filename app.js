
import express from "express"
import mongoose from "mongoose"


const app = express()  //crea un servidor
const port = process.env.PORT

app.use(express.json())

const userdb = process.env.USERDB
const passdb = process.env.PASSDB
const host = process.env.HOSTDB
const namedb = process.env.NAMEDB

const url = `mongodb+srv://${userdb}:${passdb}@${host}/?retryWrites=true&w=majority&appName=${namedb}`

try {

    await mongoose.connect(url)
    console.log("DB connected");
    
} catch (error) {
    console.log("error DB", error);
}

app.listen(port, () => console.log(`server on port: ${port}`))




