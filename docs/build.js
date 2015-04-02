// Build documentation site

var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var cssstats = require('cssstats');
var colors = require('colors.css');
var data = require('../package.json');

data.filesize = require('filesize');

var css = fs.readFileSync(path.join(__dirname, '../css/skull.min.css'), 'utf8');
data.stats = cssstats(css);
data.colors = Object.keys(colors).filter(function(color) {
  return color !== 'white';
});

var tpl = _.template(fs.readFileSync(path.join(__dirname, './template.html'), 'utf8'));
data.content = _.template(fs.readFileSync(path.join(__dirname, './docs.html'), 'utf8'))(data);

var html = tpl(data);

fs.writeFileSync(path.join(__dirname, '../index.html'), html);

