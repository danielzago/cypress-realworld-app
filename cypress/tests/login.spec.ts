import { first } from 'lodash';
import loginPage from '../Pages/loginPage'
const loginPages = new loginPage()

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPages.acessLoginPage()
    loginPages.loginwithAnyUser('testess', 'teste12344')
    loginPages.checkAcessInvalid()
  });
});

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginPages.acessLoginPage()
    loginPages.loginwithAnyUser('jorginho123ss', '123456aas')
    loginPages.validLogin()
  });
});


