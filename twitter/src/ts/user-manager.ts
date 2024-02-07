class User {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}

class UserManager {

    private users: User[] = [];
    constructor() {
        this.users=JSON.parse(localStorage.getItem('users')||'[]')
    }
    
    saveUsersToLocalStorage(): void {
        const userStorage = JSON.stringify(this.users)
        localStorage.setItem('users', userStorage)
    }

    addUser(username: string, password: string): void {
        const userExist = this.users.some(user => user.username == username && user.password == password);
        if (!userExist) {
            const newUser = new User(username, password);
            this.users.push(newUser);
            this.saveUsersToLocalStorage();
            window.location.href = 'signin.html';

        } else {
            alert("User already exists")
        }
    }

    
    findUser(username: string, password: string): User | undefined {
        return this.users.find(user => user.username === username && user.password === password);
    }

    getAllUsers(): User[] {
        return this.users;
    }

    getCurrentUser(): User | null {
        const currentUserJSON = localStorage.getItem('currentUser');
        if (currentUserJSON) {
            return JSON.parse(currentUserJSON);
        } else {
            return null;
        }
    }
}


const userManager = new UserManager();


export default userManager;


