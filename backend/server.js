import express from "express";

const app = express();

app.get("/api/notes",(req,res) => {
    res.status(200).send("You got 10 notes");
});

app.post("/api/notes",(req,res) =>{
    res.status(201).json({message: "Note Created Successfully!"});
});

app.put("/api/notes/:id",(req,res) =>{
    res.status(200).json({message:"Note Updated Successfully!"});
});

app.delete("/api/notes/:id",(req,res) =>{
    res.status(200).json({message:"Note Deleted Successfully!"});
});

app.listen(5001,() => {
    console.log("Server started on http://localhost:5001");
});