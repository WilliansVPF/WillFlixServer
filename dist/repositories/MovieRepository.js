"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Repository;
function Repository() {
    var that = this;
    that.db = [];

    function save(movie) {
        that.db.push(movie);
    }

    function get(id) {
        var movie = null;
        that.db.forEach(function (imovie) {
            if (imovie.id === id) {
                movie = imovie;
            }
        });
        return movie;
    }

    function update(id, uMovie) {
        var movie = get(id);
        if (movie) {
            movie.title = uMovie.title;
            movie.director = uMovie.director;
            movie.img = uMovie.img;
            movie.year = uMovie.year;
            movie.duration = uMovie.duration;
        }
    }

    function del(id) {
        var movie = get(id);
        if (movie) {
            delete movie.id;
            delete movie.title;
            delete movie.director;
            delete movie.img;
            delete movie.year;
            delete movie.duration;
        }
        console.log(that.db);
    }

    that.save = save;
    that.get = get;
    that.update = update;
    that.del = del;
}