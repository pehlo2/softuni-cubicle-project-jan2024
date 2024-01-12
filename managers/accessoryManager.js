const Accessory = require('../models/Accessory.js')


async function createAccessory(data){
    const accessory = new Accessory(data)
   await accessory.save()
    //let cube = await Cube.create(cubeData)
   
    return accessory

}

module.exports= createAccessory