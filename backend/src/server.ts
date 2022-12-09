import { sample_foods, sample_tags } from './../../frontend/src/data';
import express from "express";
import cors from "cors"

const app = express();
app.use(cors({
    credentials: true,
    origin: ["https://localhost:4200"]
}))

app.get("/api/foods", (req, res) => {
    res.send(sample_foods);
})

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchterm = req.params.searchTerm;
    const foods = sample_foods
    .filter(food => food.name.toLowerCase()
    .includes(searchterm.toLowerCase()));
    res.send(foods)
})

app.get("/api/foods/tags", (req, res) => {
    res.send(sample_tags)
})

app.get("/api/foods/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName
    const foods = sample_foods.filter(food => food.tags?.includes(tagName))
    res.send(foods)
})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
    
})