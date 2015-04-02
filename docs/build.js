// Build documentation site

var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var data = require('../package.json');

var tpl = _.template(fs.readFileSync(path.join(__dirname, './template.html'), 'utf8'));
data.content = fs.readFileSync(path.join(__dirname, './docs.html'), 'utf8');

var html = tpl(data);

fs.writeFileSync(path.join(__dirname, '../index.html'), html);

