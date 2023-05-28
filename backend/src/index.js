"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.listen(3333);
app.get('/', function (req, res) {
    return res.send('hello world');
});
