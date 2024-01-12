const Accessory = require('../models/Accessory.js')


async function createAccessory(data){
    const accessory = Accessory.create(data)
  // await accessory.save()
    //let cube = await Cube.create(cubeData)
   
    return accessory

}

module.exports = {createAccessory}