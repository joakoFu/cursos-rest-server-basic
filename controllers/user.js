const {response} = require('express');

const usuariosGet = (req,res = response) => {
    const {q,nombre,apikey} = req.query;
    res.json({
        msg:'get Api-controlador',
        q,nombre,apikey
    });
}
const usuariosPut = (req,res = response) => {
    const {id} = req.params;
    res.json({
        msg:`put Api-controlador ${id}`,
        id
    });
}
const usuariosPost = (req,res = response) => {
    const {nombre,edad} = req.body;
    res.json({
        msg:'post Api-controlador',
        nombre,
        edad
    });
}
const usuariosDelete = (req,res = response) => {
    res.json({
        msg:'delete Api-controlador'
    });
}
const usuariosPatch = (req,res = response) => {
    const body = req.body;


    res.json({
        msg:'Patch Api-controlador',
        body
    });
}

module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch

}