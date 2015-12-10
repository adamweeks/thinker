class UserService {
    constructor(FirebaseService) {
        this.FirebaseService = FirebaseService;
        this.isLoggedIn = false;
        this.currentUser = {
            isLoggedIn: false,
            user: false,
        };
    }

    login() {
        return this.FirebaseService.loginWithTwitter().then((user) => {
            this.currentUser.user = user;
            this.currentUser.isLoggedIn = true;
        });
    }

    logout() {
        this.currentUser.user = false;
        this.currentUser.isLoggedIn = false;
        return Promise.resolve(true);
    }
}

export default UserService;
