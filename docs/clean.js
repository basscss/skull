// Build boilerplate page

var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var data = {
  name: '',
  description: '',
  author: '',
  content: '<!-- Add content here -->',
};

var tpl = _.template(fs.readFileSync(path.join(__dirname, './template.html'), 'utf8'));

var html = tpl(data);

fs.writeFileSync(path.join(__dirname, '../index.html'), html);

