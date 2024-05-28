import mongoose from "mongoose";

import { DB_NAME } from "../constants";


const connectDB = async () => {
    try {
      const connectionInstance = await mongoose.connect
      (`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR", error);
        process.exit(1)
    }
}


export default connectDB









import express from "express"
// const app = express()

// ;(async ()=>{
//     try {
//        await mongoose.connect(`${process.env.
//         MONGODB_URI}/${DB_NAME}`)
//         app.on("error", ()=>{
//             console.log("ERR:", error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listen on port 
//             ${process.env.PORT}` )
//         })
        
//     } catch (error) {
//         console.error("ERROR:",error)
//     }
// })()