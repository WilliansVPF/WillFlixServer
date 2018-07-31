'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = _mongoose2.default.connect('mongodb://WilliansVpf:jiromba10@ds259711.mlab.com:59711/express-server-db');

exports.default = connection;