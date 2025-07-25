const userControllers = {};

userControllers.addUser = async (req , res) => {
    console.log(req.body);
    res.send("Nuevo usuario registrado");
}

userControllers.getUsers = async (req, res)=>{
    res.json([
        {"tipo":"Salud",
            "monto": 1000.0,
            "descripcion": "Consultas médicas"
        },
        {"tipo":"Educación",
            "monto": 1500.0,
            "descripcion": "Gastos en cursos y formación"
        },
        {"tipo":"Vivienda",
            "monto": 2000.0,
            "descripcion": "Consultas servicios basicos"
        }
    ]);
}
module.exports = userControllers;