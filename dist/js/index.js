import { fetchUserPost } from './userPosts.js';
var user_id = '1';
fetchUserPost(user_id, 6, true)
    .then((data) => {
    const userPostTemplate = document.getElementById('user-post-template');
    if (!userPostTemplate) {
        console.error('Template not found');
        return;
    }
    const userPostTemplateContent = userPostTemplate.content.cloneNode(true);
    if (typeof data === 'object' && data !== null) {
        userPostTemplateContent.querySelector('a.user-display_name__link').innerHTML = data.display_name;
    }
    else {
        console.error('Invalid data format:', data);
    }
    const userPostContainer = document.getElementById('div.profile-content__user-posts');
    userPostContainer.appendChild(userPostTemplateContent);
})
    .catch((error) => {
    console.error('Error fetching user posts:', error);
});
//# sourceMappingURL=index.js.map