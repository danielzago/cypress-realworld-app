import { first } from 'lodash';
import loginPage from '../Pages/loginPage'

import registerPage from '../Pages/registerPage'


const loginPages = new loginPage()
const registerPages = new registerPage()





describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginPages.acessLoginPage()
    loginPages.loginwithAnyUser('jorginho123ss', '123456aas')
    
  });
});

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginPages.acessLoginPage()
    loginPages.loginwithAnyUser('testess', 'teste12344')
    loginPages.checkAcessInvalid()
  });
});


describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    registerPages.acessRegisterPage()
    registerPages.registerNewUser('Jorginho007', 'bob', 'jorgedobob', '123456aas')
    loginPages.loginwithAnyUser('jorgedobob', '123456aas')
    registerPages.registerInseideUser('bradesco', '123456445', '123456445')
  });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it.only('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    registerPages.acessRegisterPage()
    registerPages.registerNewUserBlanck('meia noite', 'duas noite', '123456aas')
  });//OBS: como o site empede de registrar faltando um campo o teste falha na hora do submit.
});