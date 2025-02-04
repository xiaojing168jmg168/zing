import express from "express";

const app = express();

app.use("/api/auth",authRoutes);

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
});