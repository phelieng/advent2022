const fs = require('fs');
const priority = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" 

fs.readFile('./advent3-data', 'utf8', (err, data) => {
    
    score = 0;
    data.split("\n").forEach(elem => {
        stringLen = elem.length
        elem.substring(stringLen/2).split("").forEach(letter => {
            if(elem.substring(0, stringLen/2).includes(letter)){
                duplicateLetter = letter
            }
        })
        score += priority.indexOf(duplicateLetter)
    })

    console.log(score)
});

// part 2
fs.readFile('./advent3-data', 'utf8', (err, data) => {
    
    score = 0;
    group = []
    data.split("\n").forEach(elem => {
        
        group.push(elem)
        if(group.length == 3){
            key = ''
            group[0].split("").forEach(letter => {
                if(group[1].includes(letter) && group[2].includes(letter)){
                    key = letter
                }
            })
            score += priority.indexOf(key)
            group = []
        }
    })

    console.log(score)
});

