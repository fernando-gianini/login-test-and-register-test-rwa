import loginPage from "../../pages/loginPage.js"
import registerUser from "../../pages/registerUserPage.js"     

const Chance = require('chance');

const chance = new Chance();
const RegisterUser = new registerUser ()
const LoginPage = new loginPage ()

describe ('Register User Sucess', () => {
  
    it('Register-User', () => {
        LoginPage.accessLoginPage()
        RegisterUser.registerRandomUserData(chance.first(), chance.last(), 'Admin','admin','admin')
        RegisterUser.signUpCadButton()
      
     
    })
})