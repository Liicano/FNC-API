'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//MODELO DOCUMENTO
var EncuestaSchema = new Schema({
  id_publicacion: {type: String},
  titulo: {type: String},
  cuerpo: {type: String},
  fecha: {type: Date, default: new Date()},
  tipo_publicacion: {type: String},
  me_gusta: {type: String},
  me_encanta: {type: String},
  me_entristesce: {type: String},
  comentarios: {type: String},
  compartir: {type: String},
});

module.exports = mongoose.model('Encuesta', EncuestaSchema);
