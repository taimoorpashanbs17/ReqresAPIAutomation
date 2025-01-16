import UserApiPage from '../../support/pages/userApiPage';
import Ajv from 'ajv';

const ajv = new Ajv();

const userApiPage = new UserApiPage();

describe('Users API - GET Requests', () => {
  it('Fetch user details for a valid user ID and verify Information', () => {
    userApiPage.getUserById(2).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property('id', 2);
      expect(response.body.data).to.have.property('email');
    });
  });

  it('Enter invalid user ID and make sure that status code is 404', () => {
    userApiPage.getUserById(9999).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
