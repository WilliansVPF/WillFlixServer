import uuidv1 from 'uuid/v1'

class Movie {
    constructor(title, director, img, year, duration) {
        this.id = uuidv1()
        this.title = title
        this.director = director
        this.img = img
        this.year = year
        this.duration = duration
    }
}

export default Movie