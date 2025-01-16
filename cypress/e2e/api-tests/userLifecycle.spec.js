import UserApiPage from '../../support/pages/userApiPage';

const userApiPage = new UserApiPage();

describe('User API - Full Lifecycle', () => {
  let userId;
  const initialUserData = {
    name: 'John Doe',
    job: 'Engineer',
  };

  const updatedUserData = {
    name: 'Jane Doe',
    job: 'Manager',
  };

  it('should create a new user successfully', () => {
    userApiPage.createUser(initialUserData).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', initialUserData.name);
      expect(response.body).to.have.property('job', initialUserData.job);
      expect(response.body).to.have.property('id');
      userId = response.body.id;
    });
  });

  it('should verify the created user\'s information', () => {
    expect(userId, 'User ID should exist').to.not.be.undefined;

    userApiPage.getUserById(userId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property('id', parseInt(userId));
      expect(response.body.data).to.have.property('first_name');
    });
  });

  it('should update the user\'s information', () => {
    expect(userId, 'User ID should exist').to.not.be.undefined;

    userApiPage.updateUser(userId, updatedUserData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', updatedUserData.name);
      expect(response.body).to.have.property('job', updatedUserData.job);
    });
  });

  it('should verify the updated user\'s information', () => {
    expect(userId, 'User ID should exist').to.not.be.undefined;

    userApiPage.getUserById(userId).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property('id', parseInt(userId));
    });
  });

  it('should delete the user successfully', () => {
    expect(userId, 'User ID should exist').to.not.be.undefined;

    userApiPage.deleteUser(userId).then((response) => {
      expect(response.status).to.eq(204);
    });
  });
});
