const fs = require('fs');

fs.readFile('./advent5-data', 'utf8', (err, data) => {

    [input, actions] = data.split("\n\n")

    input = input.split("\n").reverse()
    indexes = input.shift().split(" ").filter(Number)

    var table = {}
    start = 1
    indexes.forEach( index => {
        index = parseInt(index)
        table[index] = []
        input.forEach(elem => {
            if(elem[start].trim()){
                table[index].push(elem[start])
            }
        })
        start += 4
    })

    tablePart1 = JSON.parse(JSON.stringify(table))
    tablePart2 = JSON.parse(JSON.stringify(table))
    actions.split("\n").forEach(action => {

        var count = parseInt(action.substring(
            action.indexOf("move ") + 5, 
            action.lastIndexOf(" from")
        ))

        var from = parseInt(action.substring(
            action.indexOf("from ") + 5, 
            action.lastIndexOf(" to")
        ))

        var to = parseInt(action.slice(-1))

        // Part 2
        tablePart2[to] = tablePart2[to].concat(tablePart2[from].splice(tablePart2[from].length - count, count))    
        
        // Part 1
        while(count > 0){
            tablePart1[to].push(tablePart1[from].pop())
            count--
        }
    })

    console.log(tablePart1)
    console.log(tablePart2)

});