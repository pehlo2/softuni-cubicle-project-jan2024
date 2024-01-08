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

function getOne(cubeId){
    let cube = cubes.find(x=>x.id === cubeId)

    return cube
}

module.exports= {
    createCube,
    getAllCubes,
    getOne
}
