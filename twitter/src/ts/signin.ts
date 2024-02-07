import userManager from './user-manager';

const signinForm = document.getElementById('signinForm') as HTMLFormElement;

signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleSignin();
});

function handleSignin() {
    const usernameInput = document.getElementById('username') as HTMLInputElement;
    const passwordInput = document.getElementById('pwd') as HTMLInputElement;

    const username = usernameInput.value;
    const password = passwordInput.value;

    const foundUser = userManager.findUser(username, password);
console.log(username);

    if (foundUser) {
        console.log('User successfully logged in.');
        localStorage.setItem('currentUser', JSON.stringify(username));
        window.location.href = 'users.html';

    } else {
        alert('Invalid username or password.');
    }
}
