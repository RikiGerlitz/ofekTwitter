import userManager from './user-manager';
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    handleSignup();
});
function handleSignup() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('pwd');
    const confirmPasswordInput = document.getElementById('confirm-pwd');
    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return;
    }
    userManager.addUser(username, password);
    console.log(userManager.getAllUsers());
    console.log('User registered successfully.');
}
