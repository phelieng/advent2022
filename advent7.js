const fs = require('fs');

fs.readFile('./advent7-data', 'utf8', (err, data) => {

    path = []
    filesystem = {
        "/" : {
            files : []
        }
    } 

    data.split("\n").forEach( line => {
        line = line.split(" ")
        if (line[0] == "$" && line[1] == 'cd'){
            switch(line[2]) {
                case ".." :
                    path.pop()
                    break
                case "/" : 
                    path = ['/']
                    break
                default :
                    path.push(line[2]) 
            }
        }
        if(line[0] == "dir") {
            folder = line[1]
            insertFolder(folder, [...path], filesystem)
        }
        if(!isNaN(line[0])){
            file = line[0]
            insertFile(file, [...path], filesystem)
        }
    })

    // Resolution
    totalFolderWeightBelow100k = 0
    allFoldersWeight = [] // P2
    totalFileSystemWeight = calculateFolderWeight(filesystem["/"])
    console.log(totalFolderWeightBelow100k) // P1

    allFoldersWeight.sort().forEach( folderWeight => {
        if(folderWeight >= 30000000 - (70000000 - totalFileSystemWeight)){ 
            console.log(folderWeight) // P2
            process.exit()
        }
    })
});

function calculateFolderWeight(folder){

    weight = folder.files.reduce((a, b) => a + b, 0)

    Object.keys(folder).forEach(subfolder => {
        if(subfolder != 'files'){
            weight += calculateFolderWeight(folder[subfolder])
        }
    })

    totalFolderWeightBelow100k += (weight <= 100000 ? weight : 0)
    allFoldersWeight.push(weight)

    return weight
}

function insertFolder(folder, path, filesystem){
    currentPath = path.shift() // Remove first path

    if(!path.length && !filesystem[currentPath][folder]){ // Reach end of path
        return filesystem[currentPath][folder] = {
            files : []
        } 
    } 
    return insertFolder(folder, path, filesystem[currentPath])
}

function insertFile(file, path, filesystem){

    currentPath = path.shift()

    if(!path.length){
        return filesystem[currentPath].files.push(parseInt(file)) 
    } 
    return insertFile(file, path, filesystem[currentPath])
}