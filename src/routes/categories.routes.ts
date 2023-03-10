import { Router } from "express";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/categories", (req, res) => {
    const { name, description } = req.body;

    //Add dados no array vindo da req
    categories.push({
        name,
        description
    });

    res.status(201).send();
})

export { categoriesRoutes };