var util = require('util')
var execFile = require('child_process').execFile;

var path = '~/pokemonGo-Bot/zkl/PokemonGo-Bot/pokecli.py'
// var path = 'test/date.py'
var oneHour = 60 * 60 * 1000;
var restartTime = 70 * 60 * 1000;
var start = () => {
  console.log('start')

  var child = execFile('python', [path], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });
  setTimeout(stop, oneHour, child)
}

var stop = (child) => {
  console.log('stop')
  child.kill()
}
start()
setInterval(start, restartTime)
