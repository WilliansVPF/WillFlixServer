import { Movie } from '../models/Movie'


export default class MovieRepository {

    add(title, director, img, year, duration, like=false) {
        const newMovie = new Movie({title, director, img, year, duration, like})
        return newMovie.save()        
    }

    get(query){        
        if ('title' in query){
            query.title = { '$regex': query.title, '$options': 'i' }
        }
        if ('director' in query){
            query.director = { '$regex': query.director, '$options': 'i' }
        }
        return Movie.find(query)
    }

    getId(id){
        return Movie.findById(id)
    }

    del(id){
        return Movie.findByIdAndDelete(id)
    }

    update(id, title, director, img, year, duration, like){
        const newMovie = ({title, director, img, year, duration, like})
        return Movie.findByIdAndUpdate(id, newMovie)
    }

}

