import userManager from '../user-manager.js';
import PostClass from './postClass.js';
let post_ar;
const publishButton = document.querySelector('.publish-btn');
if (publishButton) {
    publishButton.addEventListener('click', addPost);
}
export const checkLocal = () => {
    return post_ar = JSON.parse(localStorage.getItem('posts') || '[]');
};
function addPost() {
    const tweetText = document.querySelector('textarea').value;
    const currentUser = userManager.getCurrentUser();
    console.log(currentUser);
    let temp_ar = checkLocal();
    if (typeof currentUser === 'string') {
        const newPost = new PostClass(".post-gallery", { username: currentUser, text: tweetText });
        temp_ar.push(newPost);
        newPost.render();
        localStorage.setItem('posts', JSON.stringify(temp_ar));
        console.log('Post added successfully:', newPost);
    }
    else {
        console.error('User not signed in. Cannot add a post.');
    }
}
