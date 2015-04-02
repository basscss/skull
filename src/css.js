// Build CSS

var fs = require('fs');
var path = require('path');
var cssnext = require('cssnext');
var autogrid = require('autogrid');

var gridOpts = {
  customProperties: false,
  customMedia: false,
  columnName: 'BB-column-NN-MM',
  mixedColumns: true,
  breakpoints: [
    { value: '(min-width: 52em)' }
  ]
};

var grid = autogrid(gridOpts);
var base = fs.readFileSync(path.join(__dirname, './base.css'), 'utf8');

var css = cssnext(base + '\n' + grid);

fs.writeFileSync(path.join(__dirname, '../css/skull.css'), css);

