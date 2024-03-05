var express = require('express');
let ejs = require('ejs');
var app = express();

app.engine('ejs', ejs.renderFile)
let html = ejs.renderFile('pages/ejstest.ejs')