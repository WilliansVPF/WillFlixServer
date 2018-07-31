import { Movie } from '../models/Movie'


export class MovieRepository {

    add(title, director, img, year, duration) {
        const newMovie = new Movie({title, director, img, year, duration})
        return newMovie.save()        
    }

    get(){
        return Movie.find()
    }

}

