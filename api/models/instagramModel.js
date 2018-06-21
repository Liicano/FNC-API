'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//MODELO DOCUMENTO
var InstagramSchema = new Schema({
  id_publicacion: {type: String},
  titulo: {type: String},
  cuerpo: {type: String},
  fecha: {type: Date, default: new Date()},
  me_gusta: {type: String},
  comentarios: {type: String},
});

module.exports = mongoose.model('Instagram', InstagramSchema);
