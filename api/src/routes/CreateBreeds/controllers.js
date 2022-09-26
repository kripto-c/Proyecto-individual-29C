const { Breeds, Temperament} = require('../../db')
const {  getAllBreeds } = require('../breeds/controllers')

async function createBread(req, res) {
  const { name, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max, image, temperament, createInDb } = req.body;
    // if(!height||!weight||!life_span||!temperament) res.status(401).json({data:'missing data'});


    let height = []
    let weight =[]
    let life_span = [];

    height.push(height_min, height_max);
    weight.push(weight_min, weight_max);
    life_span.push(life_span_min, life_span_max)

    try {
//    vilidacionDeData
   if (typeof name !== "string"|| !name[name.length - 1] || typeof height !== "object" || typeof weight !== "object" || typeof life_span !== "object" || typeof temperament !== "object") throw Error('uno o varios de los datos ingresados no cumple con los requerimientos')

   const breads = await getAllBreeds();
        if (breads.find(e=> e.name == name )) throw Error(`La raza ${name} ya existe`);

        let breed = await Breeds.create({
            name,
            height,
            weight,
            life_span,
            image,
            createInDb
        }) 

    let associatedTemp = await Temperament.findAll({
        where:{ name: temperament }
    })
    
    breed.addTemperaments(associatedTemp);

    res.status(200).send(`la raza ${name} fue agregada correctamente`)
    } catch (error) {
        res.status(400).json({data: error + ""})
    }
}


module.exports ={
      createBread
}




