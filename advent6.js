const fs = require('fs');

fs.readFile('./advent6-data', 'utf8', (err, data) => {

    // P1
    for(i = 4; i <= data.length; i++){
        if(!/(.).*\1/.test(data.substring(i - 4,i))) {
            console.log(i)
            break
        }
    }

    // P2
    for(j = 14; j <= data.length; j++){
        if(!/(.).*\1/.test(data.substring(j - 14,j))) {
            console.log(j)
            break
        }
    }
});