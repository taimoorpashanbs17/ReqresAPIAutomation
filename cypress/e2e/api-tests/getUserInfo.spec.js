import UserApiPage from '../../support/pages/userApiPage';
import Ajv from 'ajv';
import userSchema from '../../schemas/userSchema.json';

const userApiPage = new UserApiPage();
const ajv = new Ajv();

describe('User API - Get User Info Flow', () => {
    let userId = 2;
    it('should validate that the response body matches the expected JSON Schema', () => {
        userApiPage.getUserById(userId).then((response) => {
            const validate = ajv.compile(userSchema);
            const valid = validate(response.body);
            expect(valid, `Response body does not match the expected schema: ${ajv.errorsText(validate.errors)}`).to.be.true;
        });
    });

    it('should validate specific data properties in the response', () => {
        userApiPage.getUserById(userId).then((response) => {
            expect(response.status).to.eq(200);

            expect(response.body.data).to.have.property('id', userId);
            expect(response.body.data).to.have.property('email').that.is.a('string');
            expect(response.body.data).to.have.property('first_name').that.is.a('string');
            expect(response.body.data).to.have.property('last_name').that.is.a('string');
            expect(response.body.data).to.have.property('avatar').that.is.a('string');

            expect(response.body.data.email).to.eq('janet.weaver@reqres.in');
            expect(response.body.data.first_name).to.eq('Janet');
        });
    });

    it('should return a 404 for a non-existent user', () => {
        userApiPage.getUserById(9999).then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});
