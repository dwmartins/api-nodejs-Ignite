import express from 'express';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello World!" });
})

app.post("/courses", (req, res) => {
    const { name } = req.body;
    res.json({ name });
})

app.listen(3333, () => {
    console.log("Server is running!");
});