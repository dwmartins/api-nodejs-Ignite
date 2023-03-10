import { Router } from "express";
import { v4 as uuidV4 } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const category = {
        id: uuidV4(),
        name,
        description
    }

    //Add dados no array vindo da req
    categories.push(category);

    res.status(201).send(categories);
})

export { categoriesRoutes };