'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    var app = (0, _express2.default)();
    _mongoose2.default.connect('mongodb://WilliansVpf:jiromba10@ds259711.mlab.com:59711/express-server-db');
    app.use(_bodyParser2.default.json());
    var movieRepository = new _MovieRepository.MovieRepository();

    app.get('/movie', function (req, res) {
        movieRepository.get().then(function (movie) {
            console.log(movie);
            res.send(movie);
        }).catch(function (error) {
            console.log(error);
            res.status(500);
            res.send(error);
        });
    });

    app.get('/movie/:id', function (req, res) {
        movieRepository.getId(req.params.id).then(function (movie) {
            console.log(movie);
            res.send(movie);
        }).catch(function (error) {
            console.log(error);
            res.status(500);
            res.send(error);
        });
    });

    app.post('/movie', function (req, res) {
        movieRepository.add(req.body.title, req.body.director, req.body.img, req.body.year, req.body.duration).then(function (movie) {
            console.log(movie);
            res.send(movie);
        }).catch(function (error) {
            console.log(error);
            res.status(500);
            res.send(error);
        });
    });

    app.delete('/movie/:id', function (req, res) {
        movieRepository.del(req.params.id).then(function (movie) {
            console.log(movie);
            res.send(movie);
        }).catch(function (error) {
            console.log(error);
            res.status(500);
            res.send(error);
        });
    });

    app.put('/movie/:id', function (req, res) {
        movieRepository.update(req.params.id, req.body.director, req.body.img, req.body.year, req.body.duration).then(function (movie) {
            console.log(movie);
            res.send(movie);
        }).catch(function (error) {
            console.log(error);
            res.status(500);
            res.send(error);
        });
    });

    app.listen(port, function () {
        console.log('example server running on port ' + port);
    });
};

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _MovieRepository = require('./repositories/MovieRepository');

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;