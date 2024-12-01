// require('dotenv').config({ path: './env' })
// aur

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from './app.js'

dotenv.config({
    path: './.env'
})




connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️  Servie is running at : ${process.env.PORT}`);
        })

    })
    .catch((err) => {
        console.log("MONGODB connection failed !! re ", err)
    })