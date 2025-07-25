const userControllers = {};

userControllers.addUser = async (req , res) => {
    console.log(req.body);
    res.send("Nuevo usuario registrado");
}

userControllers.getUsers = async (req, res)=>{
    res.json([
        {"Usuario":"Salud",
            "monto": 1000.0,
            "Informacion": "Consultas médicas"
        },
        {"Usuario":"Educación",
            "monto": 1500.0,
            "Informacion": "Gastos en cursos y formación"
        },
        {"Usuario":"Vivienda",
            "monto": 2000.0,
            "Informacion": "Consultas servicios basicos"
        }
    ]);
}
module.exports = userControllers;