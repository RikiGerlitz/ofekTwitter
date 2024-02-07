export default class PostClass {
    public parent: string;
    public username: string;
    public text: string;

    constructor(parent: string, item: { username: string, text: string }) {
        this.parent = parent
        this.username = item.username;
        this.text = item.text;
    }
    

    render() {
        const postGallery = document.querySelector(this.parent);
        if (postGallery) {
            const userPost = document.createElement('div');
            userPost.className = 'user-post';
            userPost.innerHTML = `
        <div class="tweet-img">
            <i class="fa fa-user" aria-hidden="true"></i>
        </div>
        <div class="tweet-text">
            <div class="user-name">${this.username} says:</div>
            <div class="user-text">${this.text}</div>
        </div>
    `;

            postGallery.append(userPost);
        }
    }

}





