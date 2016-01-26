import UserObject from './user.object';

describe('User Object tests', () => {
    it('should create a new user object', () => {
        let userID = '123';
        let username = 'username';
        let profileImage = 'http://img.whatever.net/pic.png';
        let userObject = new UserObject(userID, username, profileImage);

        expect(userObject.userID).toBe(userID);
        expect(userObject.username).toBe(username);
        expect(userObject.profileImage).toBe(profileImage);
    });
});
