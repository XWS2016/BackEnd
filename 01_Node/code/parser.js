// Ucitvanje fs (filesystem) modulas.
var fs = require('fs');// 

// Ucitavanje sadrzaja fajla data.txt u memoriju.
fs.readFile('data.txt', function (err, logData) {
  
  if (err) throw err;
  
// logData je Buffer, konvertujemo ga u string.
  var text = logData.toString();
  
  var results = {};

// Deljenje teksta u linije.
  var lines = text.split('\n');
  
  lines.forEach(function(line) {
    var parts = line.split(' ');
    var letter = parts[1];
    var count = parseInt(parts[2]);
    
    if(!results[letter]) {
      results[letter] = 0;
    }
    
    results[letter] += parseInt(count);
  });
  
  console.log(results);
  // { A: 2, B: 14, C: 6 }
});