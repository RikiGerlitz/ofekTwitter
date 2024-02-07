class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
class UserManager {
    constructor() {
        this.users = [];
        this.users = JSON.parse(localStorage.getItem('users') || '[]');
    }
    saveUsersToLocalStorage() {
        const userStorage = JSON.stringify(this.users);
        localStorage.setItem('users', userStorage);
    }
    addUser(username, password) {
        const userExist = this.users.some(user => user.username == username && user.password == password);
        if (!userExist) {
            const newUser = new User(username, password);
            this.users.push(newUser);
            this.saveUsersToLocalStorage();
            window.location.href = 'signin.html';
        }
        else {
            alert("User already exists");
        }
    }
    findUser(username, password) {
        return this.users.find(user => user.username === username && user.password === password);
    }
    getAllUsers() {
        return this.users;
    }
    getCurrentUser() {
        const currentUserJSON = localStorage.getItem('currentUser');
        if (currentUserJSON) {
            return JSON.parse(currentUserJSON);
        }
        else {
            return null;
        }
    }
}
const userManager = new UserManager();
export default userManager;
