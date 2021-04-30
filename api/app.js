require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./users/user.router")
const barangRouter = require("./barang/barang.router")

app.use(express.json())
app.use("/api/users", userRouter)
app.use("/api/barang", barangRouter)

app.listen(process.env.APP_PORT, ()=>{
    console/console.log("running on port"+ process.env.APP_PORT);
})