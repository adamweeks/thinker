class UserService {
    constructor() {
        this.isLoggedIn = false;
        this.currentUser = false;
    }

    login() {
        this.currentUser = {
            userID: 'abc123',
            name: 'Username',
        };
        this.isLoggedIn = true;
        return Promise.resolve(this.currentUser);
    }

    logout() {
        this.isLoggedIn = false;
        this.currentUser = false;
        return Promise.resolve(true);
    }
}

export default UserService;
