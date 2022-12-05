const fs = require('fs');

fs.readFile('./advent1-data', 'utf8', (err, data) => {
  calc = []
  tmp = 0
  data.split("\n").forEach(elem => {
    if(elem == ''){
        calc.push(tmp)
        tmp = 0;
        return
    }
    tmp += parseInt(elem)
  })
  calc.push(tmp)
  calc.sort(function(a,b){ 
    return b-a
  })
  console.log(calc[0]) // highest
  console.log(calc[0]+calc[1]+calc[2]) // top three highest
});