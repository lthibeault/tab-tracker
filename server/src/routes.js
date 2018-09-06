const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {
  //Start Register Route
  app.post('/register',
  AuthenticationControllerPolicy.register,
  AuthenticationController.register)
  //end Register Route

  //Start Login Route
  app.post('/login',
//  AuthenticationControllerPolicy.login,
  AuthenticationController.login)
  //end Login Route
}
