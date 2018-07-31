'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Movie = function Movie(title, director, img, year, duration) {
    _classCallCheck(this, Movie);

    this.id = (0, _v2.default)();
    this.title = title;
    this.director = director;
    this.img = img;
    this.year = year;
    this.duration = duration;
};

exports.default = Movie;