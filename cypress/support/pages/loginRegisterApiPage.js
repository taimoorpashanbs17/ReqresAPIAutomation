import BaseApiPage from './baseApiPage';

class LoginRegisterApiPage extends BaseApiPage {


  registerUser(userDetails) {
    return this.post('/api/register', userDetails);
  }

  loginUser(userDetails) {
    return this.post('/api/login', userDetails);
  }
}

export default LoginRegisterApiPage;
