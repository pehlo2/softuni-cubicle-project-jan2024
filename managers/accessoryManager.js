const Accessory = require('../models/Accessory.js')


function createAccessory(data){
    const accessory = Accessory.create(data)
  // await accessory.save()
    //let cube = await Cube.create(cubeData)
   
    return accessory

}
function getAllAccessories(){
  const accessories = Accessory.find()
  return accessories
}

module.exports = {createAccessory ,getAllAccessories}