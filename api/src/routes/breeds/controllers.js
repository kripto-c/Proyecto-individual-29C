const { Breeds, Temperament } = require("../../db");
const axios = require("axios");
// const { YOUR_API_KEY, api } = process.env;

/////////////////////////////////////////////
   // trae la info de la api
async function getInfoApi() {
  const ulr = await axios.get(`https://api.thedogapi.com/v1/breeds`);
  const dataApi = await ulr.data.map((e) => {
    let height_data = e.height.metric.split("-");
    let weight_space = e.weight.metric.replace(/ /g, '');
    let [wmin, wmax ] = weight_space.split("-");
    let life = e.life_span.replace("years", "");
    let life_span_min = life.split("-")[0]; 
   let life_span_max = life.split("-")[1]; 

    return {
      id: e.id,
      name: e.name,
      height:{min:height_data[0] , max:height_data[1]},
      weight:{min: !isNaN(wmin) ? wmin : 0, max:!isNaN(wmax) ? wmax : 0},
      temperament: e.temperament,
      life_span:{min: life_span_min, max: life_span_max},
      img: e.image.url,
    };
  });
  return dataApi;
}
   // trae la info de db
async function getDBInfo() {
  const data =  await Breeds.findAll({
    include: {
      model: Temperament,
      attibutes: ["name"],
      through:{
         attributes:[]
      }
    },
  });
   return data.map(e => {
       return{
          id:e.id,
          name:e.name,
          height:{min:e.height[0], max:e.height[1]},
          weight:{min:e.weight[0] , max:e.weight[1]},
          life_span:{min:e.life_span[0], max:e.life_span[1]},
          temperament:e.temperaments.map(e => e.name ),
          img:e.image,
          createdInDb:e.createdInDb

       }
   });
}
   //  junta las dos info para mostrar
async function getAllBreeds() {
      const apiInfo = await getInfoApi();
      const dbInfo = await getDBInfo();
      const responds = apiInfo.concat(dbInfo);

      return responds;
}

async function getBreeds(req, res) {
      const { name } = req.query;
   try {
      const breedsResponds = await getAllBreeds();
      // const dbInfo = await getDBInfo();
      if(name){
        const responds = breedsResponds.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
         responds.length > 0 ? res.send(responds) : res.status(404).send(`la raza ${name} no se existe`)
        }else res.send(breedsResponds.map(e=>{
          return{
             id:e.id,
             name:e.name,
             weight:e.weight,
             temperament:e.temperament ? e.temperament : "not temperament",
             img:e.img,
             createdInDb:e.createdInDb? e.createdInDb : false

          }
        }))
   } catch (error) {
      res.status(400).send({data:error + ""})
   }
}


///////////////search for id///////////////////
async function breedForId(req, res) {
  let { idRaza } = req.params;
  try {
    const dataApi = await getAllBreeds();
    const idBread = dataApi.filter((e) => e.id == idRaza);
    const responds = idBread.map(elem=>{
        return{
          id:elem.id,
          name:elem.name,
          height:elem.height,
          weight:elem.weight,
          life_span:elem.life_span,
          temperament:elem.temperament ? elem.temperament : "not temperament",
          img:elem.img
        }
      })  

   if (idRaza == 0 ) return res.send({})
  responds.length > 0 ?   res.send(responds) : res.status(404).send(`no found id ${idRaza}`) 

  } catch (error) {
    res.status(404).json({ data: error + "" });
  }
}

module.exports = {
  getBreeds,
  breedForId,
  getAllBreeds
};

// [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
// - [ ] Altura
// - [ ] Peso
// - [ ] Años de vida
// - [ ] __GET /dogs/{idRaza}__:
//   - Obtener el detalle de una raza de perro en particular
//   - Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
//   - Incluir los temperamentos asociados
