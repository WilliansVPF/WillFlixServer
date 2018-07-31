'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    var app = (0, _express2.default)();
    app.use(_bodyParser2.default.json());
    var movieRepository = new _MovieRepository2.default();

    movieRepository.save(new _Movie2.default('Filme 1', 'Willians', 'img.png', 1994, 180));
    movieRepository.save(new _Movie2.default('Filme 2', 'Bruno', 'img2.png', 1990, 140));

    app.get('/movie', function (req, res) {
        res.send(movieRepository.db);
    });

    app.get('/movie/:id', function (req, res) {
        var movie = movieRepository.get(req.params.id);
        res.send(movie);
    });

    app.put('/movie/:id', function (req, res) {
        var movie = movieRepository.update(req.params.id, new _Movie2.default(req.body.title, req.body.director, req.body.img, req.body.year, req.body.duration));
        res.send(movie);
    });

    app.post('/movie', function (req, res) {
        var movie = new _Movie2.default(req.body.title, req.body.director, req.body.img, req.body.year, req.body.duration);
        movieRepository.save(movie);
        res.send(movie);
    });

    app.delete('/movie/:id', function (req, res) {
        var movie = movieRepository.del(req.params.id);
        res.send(movie);
    });

    app.listen(port, function () {
        console.log('example server running on port ' + port);
    });
};

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _Movie = require('./models/Movie');

var _Movie2 = _interopRequireDefault(_Movie);

var _MovieRepository = require('./repositories/MovieRepository');

var _MovieRepository2 = _interopRequireDefault(_MovieRepository);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = proces.env.PORT || 3000;