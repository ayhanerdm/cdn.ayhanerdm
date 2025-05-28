import {fetchUserPosts, fetchUserPost, deleteUserPosts, deleteUserPost, createUserPost} from './userPosts.js';

    var user_id: string = '1';

    fetchUserPost(user_id, 6, true)
    .then((data: unknown) => {
        const userPostTemplate = document.getElementById('user-post-template') as HTMLTemplateElement

        if(!userPostTemplate) {
            console.error('Template not found');
            return;
        }

        const userPostTemplateContent = userPostTemplate.content.cloneNode(true) as DocumentFragment

        if (typeof data === 'object' && data !== null) {
            (userPostTemplateContent.querySelector('a.user-display_name__link') as HTMLImageElement)!.innerHTML = (data as { display_name: string }).display_name;
        } else {
            console.error('Invalid data format:', data);
        }

        const userPostContainer = document.getElementById('div.profile-content__user-posts') as HTMLDivElement;
        userPostContainer.appendChild(userPostTemplateContent);
    })
    .catch((error: unknown) => {
        console.error('Error fetching user posts:', error);
    })