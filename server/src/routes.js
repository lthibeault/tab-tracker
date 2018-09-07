const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
  //Start Register Route
  app.post('/register',
  AuthenticationControllerPolicy.register,
  AuthenticationController.register)
  //end Register Route

  //Start Login Route
  app.post('/login', AuthenticationController.login)
  //end Login Route

  //Start Songs Routes
  app.get('/songs', SongsController.index)
  app.post('/songs', SongsController.post)
  //end Songs Routes
}
