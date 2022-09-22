const { default: axios } = require('axios');
const { Op } = require('sequelize');
const { Temperament } = require('../../db');
// const { YOUR_API_KEY, api } = process.env;

async function getTemperaments(req, res) {
    const dbTemperament = await Temperament.findAll();
    if (dbTemperament.length <= 0 ) {
        const  temperamentApi = await axios.get(`https://api.thedogapi.com/v1/breeds`);
        const temperaments = temperamentApi.data.map(elem => elem.temperament);
        const temps = temperaments.toString().split(",");
        const responds = temps.filter(e=>  e !== "")         
        responds.forEach(e => {
            let i = e.trim();
            Temperament.findOrCreate({
              where: {name: i}
            })
        });
        res.send(dbTemperament)        
    }else{
        res.send(dbTemperament)
    } 
}


module.exports ={
    getTemperaments
}