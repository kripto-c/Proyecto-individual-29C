const { Breeds } = require('../../db')

async function deleteBreeds(req, res) {
    const { id } = req.params;
     try {
       await Breeds.destroy({where: {id}});
      res.send(`eliminado correctamente`);                     
     } catch (error) {
        res.status(400).json({data: error + ""})
     }
} 

module.exports={
    deleteBreeds
}