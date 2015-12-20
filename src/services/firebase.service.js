import Firebase from 'firebase';
import UserObject from './user.object';

class FirebaseService {
    constructor($firebaseAuth, $firebaseObject, $firebaseArray) {
        this.$firebaseAuth = $firebaseAuth;
        this.$firebaseObject = $firebaseObject;
        this.$firebaseArray = $firebaseArray;
        this.firebaseRef = new Firebase('https://thinker.firebaseio.com');
        this.gamesRef = this.firebaseRef.child('games');
        this.gameHistoryRef = this.firebaseRef.child('gameHistory');
        this.auth = $firebaseAuth(this.firebaseRef);
        this.timestamp = Firebase.ServerValue.TIMESTAMP;
    }

    logout() {
        this.auth.$unauth();
    }

    loginWithTwitter() {
        const service = this;
        return this.auth.$authWithOAuthPopup('twitter').then((authData) => {
            const user = service.createUserWithTwitterAuth(authData);
            return service.saveUser(user);
        }).catch((error) => {
            return Promise.reject('Authentication failed:' + error);
        });
    }

    createUserWithTwitterAuth(twitterAuth) {
        return this.createUser(twitterAuth.uid, twitterAuth.twitter.username, twitterAuth.twitter.profileImageURL);
    }

    createUser(userID, username, profileImage) {
        const user = new UserObject(userID, username, profileImage);
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

    checkStoredUser() {
        const attemptAuth = (resolve, reject) => {
            const authData = this.auth.$getAuth();
            if (authData) {
                const user = this.createUserWithTwitterAuth(authData);
                resolve(user);
            } else {
                reject(true);
            }
        };

        return new Promise(attemptAuth);
    }

    waitForAuth() {
        return this.auth.$waitForAuth();
    }

    createNewGame(game) {
        const games = this.$firebaseArray(this.gamesRef);
        return games.$add(game).then((gameRef) => {
            return this.loadGame(gameRef.key());
        });
    }

    loadGame(gameID) {
        const game = this.$firebaseObject(this.gamesRef.child(gameID));
        return game.$loaded();
    }

    guesserObject(game, guesserNumber) {
        const gameID = game.$id;
        const guesser = this.$firebaseObject(this.gamesRef.child(gameID).child('guessers').child(guesserNumber));
        return guesser.$loaded();
    }

    gameHistory(game) {
        const history = this.$firebaseArray(this.gameHistoryRef.child(game.$id));
        return history.$loaded();
    }
}

FirebaseService.$inject = ['$firebaseAuth', '$firebaseObject', '$firebaseArray'];

export default FirebaseService;
