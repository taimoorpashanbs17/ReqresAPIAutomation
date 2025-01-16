import UserApiPage from '../../support/pages/userApiPage';
import updateUserSchema from '../../schemas/updateUserSchema.json';
import Ajv from 'ajv';

const ajv = new Ajv({ strict: false, formats: { 'date-time': true } });

const userApiPage = new UserApiPage();

describe('Users API - PUT Requests', () => {
  it('should update user details successfully', () => {
    const updatedUser = {
      name: 'Jane Doe',
      job: 'Manager',
    };

    userApiPage.updateUser(2, updatedUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'Jane Doe');
      expect(response.body).to.have.property('job', 'Manager');
    });
  });

  it('should validate the schema for updating a user', () => {
    const updatedUser = { name: 'Jane Doe', job: 'Senior Developer' };

    userApiPage.updateUser(2, updatedUser).then((response) => {
      const validate = ajv.compile(updateUserSchema);
      const valid = validate(response.body);
      expect(valid, `Schema validation failed: ${ajv.errorsText(validate.errors)}`).to.be.true;
    });
  });
});
