const mongoose=require('mongoose');
mongoose.set('strictQuery', false); // Para evitar advertencias de Mongoose

//const URI='mongodb://localhost:27017/gastos';
const URI='mongodb+srv://jarbiman03:CtniyxOo4n7VqUO5@cluster0.krqifqh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(URI)
.then(db=> console.log('BD conectada'))
.catch(err => console.error(err));
module.exports=mongoose;