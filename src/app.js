import express from 'express'
import Movie from './models/Movie'
import MovieRepository from './repositories/MovieRepository'
import bodyParser from 'body-parser'

export default function() {

    const app = express()
    app.use(bodyParser.json())
    const movieRepository = new MovieRepository();
    
    movieRepository.save(new Movie('Filme 1', 'Willians', 'img.png', 1994, 180))
    movieRepository.save(new Movie('Filme 2', 'Bruno', 'img2.png', 1990, 140))

    app.get('/movie', (req, res) => {
        res.send(movieRepository.db)
    })

    app.get('/movie/:id', (req, res) => {
        const movie = movieRepository.get(req.params.id)
        res.send(movie)
    })

    app.put('/movie/:id', (req, res) => {
        res.send({ content: 'Hello World' })
    })

    app.post('/movie', (req, res) => {
        const movie = new Movie(req.body.title, req.body.director, req.body.img, req.body.year, req.body.duration)
        movieRepository.save(movie)
        res.send(movie)
    })

    app.delete('/movie/:id', (req, res) => {
        res.send({ content: 'Hello World' })
    })

    app.listen(3000, () => {
        console.log("example server running on port 3000")        
    })

}