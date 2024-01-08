const uniqid = require('uniqid')

let cubes = [
    {
        id:"1412raraw4f523523525afaw",
        name :"Rubic Cube",
        description :"Easy Cube",
        imageUrl:"https://static5.depositphotos.com/1033600/501/i/450/depositphotos_5016489-stock-photo-rubiks-cube.jpg",
        difficultyLevel: 1
    },
    {   id:"1412rar515152453aw4fafaw",
        name :"Wooden Cube",
        description :"wooden Cube",
        imageUrl:"https://bartlshop.de/userdata/dcshop/images/normal/111968_01.jpg",
        difficultyLevel: 5
    }

]



function createCube(cubeData) {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    }
    cubes.push(newCube)
    return newCube
}

function getAllCubes(search, from, to) {
    let result = cubes.slice()

    if (search) {
        result = result.filter(cubes => cubes.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

    }
    if (from) {
        result = result.filter(cubes => cubes.difficultyLevel >= from)
    }
    if (to) {
        result = result.filter(cubes => cubes.difficultyLevel <= to)
    }
    return result
}

function getOne(cubeId) {
    let cube = cubes.find(x => x.id === cubeId)
    return cube
}

module.exports = {
    createCube,
    getAllCubes,
    getOne
}
