const fs = require('fs');

fs.readFile('./advent4-data', 'utf8', (err, data) => {

    contains = 0
    overlaps = 0

    data.split("\n").forEach(row => {
    
        [assignement1, assignement2] = row.split(",")

        // P1
        if(
            parseInt(assignement1.split("-")[0]) >= parseInt(assignement2.split("-")[0]) && 
            parseInt(assignement1.split("-")[1]) <= parseInt(assignement2.split("-")[1]) ||
            parseInt(assignement2.split("-")[0]) >= parseInt(assignement1.split("-")[0]) && 
            parseInt(assignement2.split("-")[1]) <= parseInt(assignement1.split("-")[1])
        ) {
            contains++
        }

        // P2
        if(parseInt(assignement1.split("-")[1]) >= parseInt(assignement2.split("-")[0]) &&
            parseInt(assignement2.split("-")[1]) >= parseInt(assignement1.split("-")[0])
        ) {
            overlaps++
        }
    })

    console.log(contains)
    console.log(overlaps)
});