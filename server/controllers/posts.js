const express = require("express")
const router = new express.Router()
const database = require("../database")

router.get("/posts", async (_, response) => {
    try {
        const query = await database.query(`
            SELECT posts.image_url,
                posts.image_medium_url,
                posts.lazy_url,
                posts.aspect_ratio,
                profiles.name,
                profiles.image_url AS profile_image_url,
                profiles.lazy_url AS profile_lazy_url
            FROM public.posts
            CROSS JOIN public.profiles
            ORDER BY RANDOM()
            LIMIT 30;
        `)
        response.json(query.rows)
    }

    catch(error) {
        console.error(error)
    }
})

module.exports = router