const express = require("express")
const router = new express.Router()
const database = require("../database")

router.get("/posts", async (_, response) => {
    try {
        const query = await database.query(`
            SELECT *
            FROM public.posts;
        `)
        response.json(query.rows)
    }

    catch(error) {
        console.error(error)
    }
})

module.exports = router