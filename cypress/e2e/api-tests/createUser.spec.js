import UserApiPage from '../../support/pages/userApiPage';
import createUserSchema from '../../schemas/createUserSchema.json';
import Ajv from 'ajv';

const userApiPage = new UserApiPage();
const ajv = new Ajv({ strict: false, formats: { 'date-time': true } });

describe('Users API - POST Requests', () => {
    let formattedDateTime;
    before(() => {
        cy.getFormattedDateTime().then((dateTime) => {
            formattedDateTime = dateTime;
        });
    });

    it('Create User Successfully', () => {
        const newUser = {
            name: `Testing_user_${formattedDateTime}`,
            job: 'Developer',
        };

        userApiPage.createUser(newUser).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', `Testing_user_${formattedDateTime}`);
            expect(response.body).to.have.property('job', 'Developer');
            expect(response.body).to.have.property('id');
        });
    });

    it('Return an error when mandatory fields are missing', () => {
        const incompleteUser = {
            name: '',
            job: 'Tester',
        };

        userApiPage.createUser(incompleteUser).then((response) => {
            expect(response.status).to.eq(400);
        });
    });

    it('should validate the schema for creating a user', () => {
        const newUser = {
            name: `John Doe_${formattedDateTime}`,
            job: 'Developer',
        };

        userApiPage.createUser(newUser).then((response) => {
            const validate = ajv.compile(createUserSchema);
            const valid = validate(response.body);
            expect(valid, `Schema validation failed: ${ajv.errorsText(validate.errors)}`).to.be.true;
        });
    });
});
