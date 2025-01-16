import LoginRegisterApiPage from '../../support/pages/loginRegisterApiPage';
import UserApiPage from '../../support/pages/userApiPage';

const loginRegisterApiPage = new LoginRegisterApiPage();
const userApiPage = new UserApiPage();

describe('User API - Register, Login, Logout Flow', () => {
  const registerUserData = {
    email: 'eve.holt@reqres.in',
    password: 'pistol',
  };

  const loginUserData = {
    email: 'eve.holt@reqres.in',
    password: 'pistol',
  };

  let userId;

  it('should register a new user successfully', () => {
    loginRegisterApiPage.registerUser(registerUserData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('token');
      userId = response.body.id;
    });
  });

  it('should login with the registered user', () => {
    loginRegisterApiPage.loginUser(loginUserData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });

  it('should logout successfully', () => {
    userApiPage.logoutUser().then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
