import UserApiPage from '../../support/pages/userApiPage';
import deleteUserSchema from '../../schemas/deleteUserSchema.json';

import Ajv from 'ajv';
const ajv = new Ajv();

const userApiPage = new UserApiPage();

describe('Users API - DELETE Requests', () => {
  it('should delete a user successfully', () => {
    userApiPage.deleteUser(2).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  it('should return 404 for deleting a non-existent user', () => {
    userApiPage.deleteUser(9999).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('should validate the schema for deleting a user', () => {
    userApiPage.deleteUser(2).then((response) => {
      const validate = ajv.compile(deleteUserSchema);
      const valid = validate(response.body);
      expect(valid, `Schema validation failed: ${ajv.errorsText(validate.errors)}`).to.be.true;
    });
  });
});
