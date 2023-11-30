const express = require('express')
const PORT = 4000;
const App = express()
const cors = require('cors')
const AnimeRouter = require('./routes/Anime');


App.use(cors())
App.use('/api/anime', AnimeRouter)
/*App.get('/', (req, res) => {
    res.send(animeData)
})
App.get('/api/animehype/:hype', (req, res) => {
    console.log(req.params);
    const { hype } = req.params;
    res.json(animeData[animeData - 1])
})*/

/*App.get('/api/anime', (req, res) => {
    const newanimeData = []
    animeData.map((anime) => {
        const { studio, title, description, hype, text, link, genres } = anime
        newanimeData.push({
            studio, title, description, hype, text, link, genres
        })
    })
    res.json(newanimeData)
})*/


App.listen(PORT, () => {
    console.log(`server run on port ${PORT}`)
})