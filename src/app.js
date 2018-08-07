import mongoose from 'mongoose'
import express from 'express'
import { MovieRepository } from './repositories/MovieRepository'
import bodyParser from 'body-parser'

const port = process.env.PORT || 3000

export default function() {

    const app = express()
    mongoose.connect('mongodb://WilliansVpf:jiromba10@ds259711.mlab.com:59711/express-server-db')
    app.use(bodyParser.json())
    const movieRepository = new MovieRepository()

    app.get('/movie', (req, res) => {
        movieRepository.get().then((movie) => {
            console.log(movie) 
            res.send(movie)
        }).catch((error) => {
            console.log(error)
            res.status(500)
            res.send(error)
        })        
    })

    app.get('/movie/:id', (req, res) => {
        movieRepository.getId(req.params.id).then((movie) => {
            console.log(movie) 
            res.send(movie)
        }).catch((error) => {
            console.log(error)
            res.status(500)
            res.send(error)
        })        
    })

    app.post('/movie', (req, res) => {
        movieRepository.add(req.body.title, req.body.director, req.body.img, req.body.year, req.body.duration).then((movie) => {
            console.log(movie) 
            res.send(movie)
        }).catch((error) => {
            console.log(error)
            res.status(500)
            res.send(error)
        })        
    })

    app.delete('/movie/:id', (req, res) => {
        movieRepository.del(req.params.id).then((movie) => {
            console.log(movie) 
            res.send(movie)
        }).catch((error) => {
            console.log(error)
            res.status(500)
            res.send(error)
        })        
    })

    app.put('/movie/:id', (req, res) => {
        movieRepository.update(req.params.id,req.body.director, req.body.img, req.body.year, req.body.duration).then((movie) => {
            console.log(movie) 
            res.send(movie)
        }).catch((error) => {
            console.log(error)
            res.status(500)
            res.send(error)
        })        
    })

    app.listen(port, () => {
        console.log(`example server running on port ${port}`)        
    })

}