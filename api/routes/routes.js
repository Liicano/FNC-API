'use strict';
var authController = require('../middlewares/passport');
module.exports = function(app) {
var controller = require('../controllers/controllers');

//----------------------------------
//RUTA GENERAL
//----------------------------------
app.route('/').get(controller.index);

app.route('/login').post(controller.CheckLogin);
//----------------------------------
//RUTAS PARA - FACEBOOK -
//----------------------------------
    app.route('/facebook/posts')
      .get(/*authController.isAuthenticated,*/ controller.facebook_ver_post)
      .post(/*authController.isAuthenticated,*/ controller.Ingresar_post);

    app.route('/facebook/post/:fecha')
      .get(/*authController.isAuthenticated,*/ controller.ver_post);
      // .put(/*authController.isAuthenticated,*/ controller.Modificar_Documento)
      // .delete(/*authController.isAuthenticated,*/ controller.Eliminar_Documento);
      

//----------------------------------
//RUTAS PARA - USUARIOS -
//----------------------------------
  
    app.route('/usuarios')
      .get(/*authController.isAuthenticated,*/ controller.Ver_Usuarios)
      .post(/*authController.isAuthenticated,*/ controller.Ingresar_Usuario);

      //findByEmail
    app.route('/usuarioEmail/:email')
      .get(controller.findByEmail);

    app.route('/usuario/:cedula')
      .get(/*authController.isAuthenticated,*/ controller.Ver_Usuario)
      .put(/*authController.isAuthenticated,*/ controller.Modificar_Usuario)
      .delete(/*authController.isAuthenticated,*/ controller.Eliminar_Usuario);

       app.route('/usuarioID/:id')
       .delete(/*authController.isAuthenticated,*/ controller.Eliminar_Usuario_id);

       //ENVIAR EMAIL DE RECUPERACION
      app.route('/recover/:email/:password')
      .post(controller.sendEmail);
};
