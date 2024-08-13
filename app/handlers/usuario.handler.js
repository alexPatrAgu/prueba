const Usuario = require('../models/Usuario'); //Tener conexion con el modelo Customer

//crear una funcion para llamado a select del modelo 
//envia paramatros req y res
//req significa request=peticion 
//res significa response=respuesta
const listUsuario = async (req, res) => {
    try{
        const usuario = await Usuario.getUsuarios(); //llamado a funcion de select
        res.json(usuario); //parsea a json y retorna la respuesta
    } catch (error){
        res.status(500).json( { error: error.message } ); //error 500 de servidor
    }
}

const insertUsuario = async(req,res) =>{
    try {
        const usuario = await Usuario.insert(req.body);
        res.status(201).json(usuario) //201 para crear 
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const updateUsuario = async(req,res) =>{
    try {
        const usuario = await Usuario.update(req.body, req.params.id);
        res.json(usuario) //200 por default
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}


const deleteUsuario = async(req,res) =>{
    try {
        const usuario = await Usuario.delete(req.params,id);
        res.json(usuario)
    } catch (error) {
        res.status(500).json( { error: error.message } );
    }
}

module.exports = {
    listUsuario,
    insertUsuario,
    updateUsuario,
    deleteUsuario,
};