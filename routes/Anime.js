const express = require('express');
const router = express.Router()
const animeData = require('../anime.json');

// router.get('/', (req, res) => {
//     res.send(animeData)
// })
// router.get('/api/animehype/:hype', (req, res) => {
//     console.log(req.params);
//     const { hype } = req.params;
//     res.json(animeData[hype - 1])
// });

router.get('/', (req, res) => {
    // const {title} = req.query
    const newanimeData = []
    animeData.map((anime) => {
        const { studio, title, description, hype, text, link, genres } = anime
        newanimeData.push({
            studio, title, description, hype, text, link, genres
        })
    })
    res.json(newanimeData)
})

module.exports = router