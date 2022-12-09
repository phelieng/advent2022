const fs = require('fs');

fs.readFile('./advent8-data', 'utf8', (err, data) => {

    data = data.split("\n").map( row => {
        return row.split("").map( tree => {
            return parseInt(tree)
        })
    })

    // P1
    visibleTrees = 0

    for(i = 0; i < data.length; i++){
        for(j = 0; j < data[i].length; j++){

            treeHeight = data[i][j]

            // Visible from edges
            if(i == 0 || j == 0 || i == data.length - 1 || j == data[i].length - 1){
                visibleTrees++
                continue
            }
            // Is visible from left
            if (!data[i].slice(0,j).some((tree) => tree >= treeHeight)){
                
                visibleTrees++
                continue
            }
            // Is visible from right
            if (!data[i].slice(j + 1,data[i].length).some((tree) => tree >= treeHeight)){
                visibleTrees++
                continue
            }
            //Is visible from top
            visibleFromTop = true
            for(ii = 0; ii < i; ii++){
                if(data[ii][j] >= treeHeight){
                    visibleFromTop = false
                }
            }
            if(visibleFromTop){
                visibleTrees++
                continue
            }
            // Is visible from below
            visibleFromBelow = true
            for(iii = i+1; iii < data[i].length; iii++){
                if(data[iii][j] >= treeHeight){
                    visibleFromBelow = false
                }
            }
            if(visibleFromBelow){
                visibleTrees++
                continue
            }
        }
    }

    console.log(visibleTrees)

    // P2
    topScore = 0

    for(i = 0; i < data.length; i++){
        for(j = 0; j < data[i].length; j++){

            treeHeight = data[i][j]
            scoreLeft = scoreRight = scoreTop = scoreBottom = 0 

            for(k = i - 1; k >= 0; k--){ 
                if(data[k][j] <= treeHeight){
                    scoreLeft++
                }
                if(data[k][j] >= treeHeight){
                    break
                }
            }

            for(k = i + 1; k < data[i].length; k++){ 
                if(data[k][j] <= treeHeight){
                    scoreRight++
                }
                if(data[k][j] >= treeHeight){
                    break
                }
            }

            for(k = j - 1; k >= 0; k--){ 
                if(data[i][k] <= treeHeight){
                    scoreTop++
                }
                if(data[i][k] >= treeHeight){
                    break
                }
            }

            for(k = j + 1; k < data[j].length; k++){ 
                if(data[i][k] <= treeHeight){
                    scoreBottom++
                }
                if(data[i][k] >= treeHeight){
                    break
                }
            }
            
            score = scoreLeft * scoreRight * scoreTop * scoreBottom

            if(score > topScore){
                topScore = score
            }
        }
    }

    console.log(topScore)
});
