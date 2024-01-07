const uniqid = require('uniqid')

let cubes = []

function createCube(cubeData){
    const newCube = {
        id: uniqid(),
        ...cubeData,
    }
cubes.push(newCube)
return newCube
}

function getAllCubes(){
    return cubes.slice()
}

module.exports= {
    createCube,
    getAllCubes
}
