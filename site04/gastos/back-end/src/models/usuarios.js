const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    Nombre: {
        type: String,
        required: true,
        trim: true
    },
    Logo: {
        type: String,
        default: "###"
    },
    fecha_fundacion: {
        type: String,
        required: true
    },
    Jugadores: [{
        type: String,
        trim: true
    }]
}, {
    timestamps: true // Agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Usuario', UsuarioSchema);