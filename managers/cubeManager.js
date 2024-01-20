const uniqid = require('uniqid')
const Cube = require('../models/Cube')
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



async function createCube(cubeData) {
   const cube = new Cube(cubeData)
   await cube.save()
    //let cube = await Cube.create(cubeData)
   
    return cube
}

async function getAllCubes(search, from, to) {
    let result = await Cube.find().lean()

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
   let cube = Cube.findById(cubeId)  //popualte da smetnq ot masive s ObjectiD - NA OBIKNOVEN MASIV OT
   return cube
    
}
function getOneWithAccesories(cubeId) {
    return this.getOne(cubeId).populate('accessories')
     
 }

async function attachAccessory(cubeId , accesoryId){
   // return Cube.findByIdAndUpdate(cubeId,{$push: {accessories :accesoryId}})
   let cube = await Cube.findById(cubeId)
   cube.accessories.push(accesoryId);
   return cube.save()

   
}

module.exports = {
    createCube,
    getAllCubes,
    getOne,attachAccessory,
    getOneWithAccesories
}
