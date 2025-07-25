const gastosControllers = {};
//metodo POST
gastosControllers.addGastos = async(req, res)=>{
    console.log(req.body);
    res.send("Nuego gasto registrado");
}
//metodo GET
gastosControllers.getGastos = async(req, res)=>{
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
}

module.exports = gastosControllers;
