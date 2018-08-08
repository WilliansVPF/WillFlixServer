import MovieRepository from '../repositories/MovieRepository'
import { Get, Post, Delete, Put } from '../utils/httpAnnotations'

export default class MovieController {
    constructor() {
        this.movieRepository = new MovieRepository()
    }
    
    @Get('/movie', 'getAll')
    getAll(req, res) {
        this.movieRepository.get().then((movie) => {
            console.log(movie) 
            res.send(movie)
        }).catch((error) => {
            console.log(error)
            res.status(500)
            res.send(error)
        })        
    }

    @Get('/movie/:id')
    get(req, res) {
        this.movieRepository.getId(req.params.id).then((movie) => {
            console.log(movie) 
            res.send(movie)
        }).catch((error) => {
            console.log(error)
            res.status(500)
            res.send(error)
        })        
    }

    @Post('/movie')
    save(req, res) {
        this.movieRepository.add(req.body.title, req.body.director, req.body.img, req.body.year, req.body.duration).then((movie) => {
            console.log(movie) 
            res.send(movie)
        }).catch((error) => {
            console.log(error)
            res.status(500)
            res.send(error)
        })        
    }

    @Delete('/movie/:id')
    delete(req, res) {
        this.movieRepository.del(req.params.id).then((movie) => {
            console.log(movie) 
            res.send(movie)
        }).catch((error) => {
            console.log(error)
            res.status(500)
            res.send(error)
        })        
    }

    @Put('/movie/:id')
    update(req, res) {
        this.movieRepository.update(req.params.id,req.body.director, req.body.img, req.body.year, req.body.duration).then((movie) => {
            console.log(movie) 
            res.send(movie)
        }).catch((error) => {
            console.log(error)
            res.status(500)
            res.send(error)
        })        
    }

}