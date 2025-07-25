const gastos = require('../models/gastos');
const Gasto = require('../models/gastos');
const gastosControllers = {};

//metodo GET
gastosControllers.getGastos = async(req, res)=>{
  const gastos= await Gasto.find();
  res.json(gastos);
}
gastosControllers.addGastos= async(req,res)=>{
const gasto=new Gasto({
tipo: req.body.tipo,
monto:req.body.monto,
descripcion:req.body.descripcion
});
console.log(gasto);
await gasto.save();
res.json('status: Gasto guardado');
}


gastosControllers.getGastos_x_id=async(req,res)=>{
 console.log(req.params.id);
 const gastos= await Gasto.findById(req.params.id);
 res.json(gastos);
}

gastosControllers.editGastos=async(req,res)=>{
 const {id}=req.params;
 const gasto={
 tipo: req.body.tipo,
 ruc: req.body.ruc,
 empresa: req.body.empresa,
 monto: req.body.monto
 };
 await Gasto.findByIdAndUpdate(id, {$set:gasto},{new: true});
 res.json('status: Gasto actualizado');
}

gastosControllers.deleteGastos = async(req, res) => {
 const { id } = req.params;
 await Gasto.findByIdAndDelete(id);
 res.json('status: Gasto eliminado');
}
/*
//metodo POST
gastosControllers.addGastos = async(req, res)=>{
    console.log(req.body);
    res.send("Nuego gasto registrado");
}
//metodo POST
gastosControllers.getGastos = async(req, res)=>{
    res.json(
    [
      {"tipo":"Salud",
        "monto":1000.0,
        "descripcion": "Consultas médicas"
      },
      {"tipo":"Vivienda",
        "monto":2000.0,
        "descripcion": "Consultas servicios basicos"
      }
    ]
  );
}
*/
module.exports = gastosControllers;
