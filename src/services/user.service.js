class UserService {
    constructor(FirebaseService, $rootScope) {
        this.FirebaseService = FirebaseService;
        this.$rootScope = $rootScope;
        this.isLoggedIn = false;
        this.hasCheckedLogin = false;
        this.currentUser = {
            isLoggedIn: false,
            user: false,
        };
        this.broadcast = 'USER_STATE_CHANGED';
    }

    userLoggedIn(user) {
        this.isLoggedIn = true;
        this.currentUser.user = user;
        this.currentUser.isLoggedIn = true;
        this.$rootScope.$broadcast(this.broadcast);
    }

    userLoggedOut() {
        this.isLoggedIn = false;
        this.currentUser.user = false;
        this.currentUser.isLoggedIn = false;
        this.$rootScope.$broadcast(this.broadcast);
    }

    login() {
        return this.FirebaseService.loginWithTwitter().then((user) => {
            this.userLoggedIn(user);
        });
    }

    logout() {
        this.userLoggedOut();
        this.FirebaseService.logout();
    }

    checkStoredUser() {
        const loggedIn = (user) => {
            this.userLoggedIn(user);
            this.hasCheckedLogin = true;
        };

        const loggedOut = () => {
            this.userLoggedOut();
            this.hasCheckedLogin = true;
        };

        if (!this.hasCheckedLogin) {
            this.FirebaseService.checkStoredUser().then(loggedIn).catch(loggedOut);
        }
    }
}

UserService.$inject = ['FirebaseService', '$rootScope'];

export default UserService;
