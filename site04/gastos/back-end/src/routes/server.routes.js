const express = require('express');
const router = express.Router();

const gastos = require('../controllers/gastos.controller.js');
const usuarios = require('../controllers/usuarios.controllers.js');

router.get('/site04/gastos',gastos.getGastos);
router.post('/site04/gastos',gastos.addGastos);
router.get('/site04/gastos/:id',gastos.getGastos_x_id);
router.put('/site04/gastos/:id',gastos.editGastos);
router.delete('/site04/gastos/:id',gastos.deleteGastos);

// Rutas CRUD para usuarios
router.get('/site04/usuarios', usuarios.getUsers);
//router.get('/site04/usuarios/:id', usuarios.getUserById);
router.post('/site04/usuarios', usuarios.addUser);
//router.put('/site04/usuarios/:id', usuarios.updateUser);
//router.delete('/site04/usuarios/:id', usuarios.deleteUser);

router.get('/site04', (req,res)=>{
 res.send('<h1>Hola mi sitio </h1>'+
  '<a href="/site04/about">acerca de nosotross</a>' +
  '<a href="/site04/contacto">contacto</a>' +
  '<a href="/site04/gastos">json</a>' 
);
});
router.get('/site04/about', (req,res)=>{
 res.send('<h1>Acerca de nosotros</h1>');
});
router.get('/site04/contacto', (req,res)=>{
  res.sendFile('./contacto.png',{root:__dirname});
});

router.use((req, res, next) => {
  res.status(404).send('<h1>Error 404 - Lo sentimos, no encontramos la página que buscas.</h1>')
});

module.exports = router;
/*
router.get('/site04/gastos', (req,res)=>{
 res.json(
    [
      {"gasto":"Salud",
        "monto":1000.0,
        "Informacion": "Consultas médicas"
      },
      {"gasto":"Vivienda",
        "monto":2000.0,
        "Informacion": "Consultas servicios basicos"
      }
    ]
  );
});

router.post('/site04/gastos', (req,res)=>{
 res.send('Registro Gastos');
});
router.put('/site04/gastos', (req,res)=>{
 res.send('Actualización Gastos');
});
router.delete('/site04/gastos', (req,res)=>{
 res.send('Eliminación Gastos');
});
*/


