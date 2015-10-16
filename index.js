var path = require('path');
var fs = require('fs');

module.exports = function(source, map) {

  var ui = {};

  var lineArray = getByLine(source);
  lineArray.forEach(function(line) {
    var lineObj = handleLine(line);
    if (lineObj) {
      var key = Object.keys(lineObj)[0];
      ui[key] = lineObj[key];
    };
  });

  var parsedPath = path.parse(path.resolve(__dirname, this.resourcePath));
  var uiKitString = exportString(ui);
  var stylePath = '%dir%/%name%.%ext%'
    .replace('%dir%', parsedPath.dir)
    .replace('%name%', parsedPath.name)
    .replace('%ext%', 'js');
  var stringObj =
    fs.writeFile(stylePath,uiKitString, function(err) {
      if(err) {
          return console.log(err);
      }
  });
  this.cacheable();
  return uiKitString;
}

function getByLine(file) {
  return file.split(/[\n\r]/g);
}

function handleLine(line) {

  var obj = {};

  // Remove space
  line = line.replace(/\s/g, '');

  // Contain space
  if (/=/.test(line)) {
    obj[line.substr(0, line.indexOf('='))]=line.substr(line.indexOf('=') + 1);
    return obj;
  } else {
    return null;
  }
}

function exportString(obj) {
  return "module.exports = " + JSON.stringify(obj, undefined, "\t") + ";";
}
