"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const filterInput = document.getElementById('filter-name');
    const users = document.querySelectorAll('.username p');
    filterInput.addEventListener('input', () => {
        const filterText = filterInput.value.toLowerCase();
        users.forEach(user => {
            var _a, _b;
            const username = ((_a = user.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase()) || '';
            const userParent = (_b = user.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
            if (username.includes(filterText)) {
                userParent.style.display = 'block';
            }
            else {
                userParent.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const followButtons = document.querySelectorAll('.user-btn button');
    followButtons.forEach(button => {
        button.addEventListener('click', () => {
            const userContainer = button.closest('.user');
            if (userContainer) {
                const usernameElement = userContainer.querySelector('.username p');
                if (usernameElement) {
                    const username = usernameElement.textContent;
                    console.log(username);
                    if (button.textContent === 'follow') {
                        console.log(`Followed ${username}`);
                        button.textContent = 'unfollow';
                        const followersSection = document.querySelector('.followers');
                        if (followersSection) {
                            const followerClone = userContainer.cloneNode(true);
                            followersSection.appendChild(followerClone);
                            const newbtn = followerClone.querySelector('.user-btn button');
                            if (newbtn) {
                                newbtn.addEventListener('click', () => {
                                    console.log(`Unfollowed ${username}`);
                                    newbtn.textContent = 'follow';
                                    const rowSection = document.querySelector('.users-gallery .row');
                                    if (rowSection) {
                                        const rowClone = followerClone.cloneNode(true);
                                        rowSection.appendChild(rowClone);
                                        followerClone.remove();
                                    }
                                });
                            }
                            userContainer.remove();
                        }
                    }
                }
            }
        });
    });
});
