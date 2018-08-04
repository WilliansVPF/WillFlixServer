'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MovieRepository = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Movie = require('../models/Movie');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovieRepository = exports.MovieRepository = function () {
    function MovieRepository() {
        _classCallCheck(this, MovieRepository);
    }

    _createClass(MovieRepository, [{
        key: 'add',
        value: function add(title, director, img, year, duration) {
            var newMovie = new _Movie.Movie({ title: title, director: director, img: img, year: year, duration: duration });
            return newMovie.save();
        }
    }, {
        key: 'get',
        value: function get() {
            return _Movie.Movie.find();
        }
    }, {
        key: 'getId',
        value: function getId(id) {
            return _Movie.Movie.findById(id);
        }
    }, {
        key: 'del',
        value: function del(id) {
            return _Movie.Movie.deleteMany(id);
        }
    }]);

    return MovieRepository;
}();