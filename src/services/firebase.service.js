import Firebase from 'firebase';

class FirebaseService {
    constructor($firebaseAuth, $firebaseObject) {
        this.$firebaseAuth = $firebaseAuth;
        this.$firebaseObject = $firebaseObject;
        this.firebaseRef = new Firebase('https://thinker.firebaseio.com');
        this.auth = $firebaseAuth(this.firebaseRef);
    }

    loginWithTwitter() {
        const service = this;
        return this.auth.$authWithOAuthPopup('twitter').then((authData) => {
            const user = service.createUser(authData.uid, authData.twitter.username, authData.twitter.profileImageURL);
            return service.saveUser(user);
        }).catch((error) => {
            return Promise.reject('Authentication failed:' + error);
        });
    }

    createUser(userID, username, profileImage) {
        const user = {
            userID: userID,
            username: username,
            profileImage: profileImage,
        };
        return user;
    }

    saveUser(user) {
        const userRef = this.$firebaseObject(this.firebaseRef.child('users').child(user.userID));
        const saveComplete = () => {
            return user;
        };
        const loadComplete = () => {
            userRef.user = user;
            return userRef.$save().then(saveComplete);
        };
        return userRef.$loaded().then(loadComplete);
    }
}

FirebaseService.$inject = ['$firebaseAuth', '$firebaseObject'];

export default FirebaseService;
