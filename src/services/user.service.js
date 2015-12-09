class UserService {
    constructor() {
        this.isLoggedIn = false;
        this.currentUser = {
            isLoggedIn: false,
            user: false,
        };
    }

    login(username) {
        const myUsername = username ? username : 'Username';
        const user = {
            userID: 'abc123',
            name: myUsername,
        };
        this.currentUser.user = user;
        this.currentUser.isLoggedIn = true;
        return Promise.resolve(this.currentUser);
    }

    logout() {
        this.currentUser.user = false;
        this.currentUser.isLoggedIn = false;
        return Promise.resolve(true);
    }
}

export default UserService;
