import BaseApiPage from './baseApiPage';

class UserApiPage extends BaseApiPage {
    createUser(userDetails) {
        return this.post('/api/users', userDetails);
    }

    logoutUser() {
        return this.post('/api/logout');
    }

    getUserById(userId) {
        return this.get(`/api/users/${userId}`);
    }

    updateUser(userId, userDetails) {
        return this.put(`/api/users/${userId}`, userDetails);
    }

    deleteUser(userId) {
        return this.delete(`/api/users/${userId}`);
    }
}

export default UserApiPage;
