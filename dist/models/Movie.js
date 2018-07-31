'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Movie = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var movie = new Schema({
    title: String,
    director: String,
    img: String,
    year: Date,
    duration: Number
});

var Movie = exports.Movie = _mongoose2.default.model('Movie', movie);