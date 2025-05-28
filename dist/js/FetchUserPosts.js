// A collection of urls for user post endpoints
const userPostsUrl = {
    fetchUserPosts: (user_id) => 'api.ayhanerdm.me/user/' + user_id + '/posts',
    fetchUserPost: (user_id, post_id) => 'api.ayhanerdm.me/user/' + user_id + '/posts/' + post_id,
    deleteUserPosts: (user_id) => 'api.ayhanerdm.me/user/' + user_id + '/posts',
    deleteUserPost: (user_id, post_id) => 'api.ayhanerdm.me/user/' + user_id + '/posts' + post_id,
    createUserPost: (user_id) => 'api.ayhanerdm.me/user/' + user_id + '/posts',
};
// Always check if https is true or false and always include credentials
// Prepend the url with https:// or http://
const fetchUserPosts = async (user_id, https) => {
    const url = userPostsUrl.fetchUserPosts(user_id);
    const protocol = https ? 'https://' : 'http://';
    const fullUrl = protocol + url;
    const response = await fetch(fullUrl, {
        method: 'GET',
        credentials: 'include',
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};
const fetchUserPost = async (user_id, https) => {
    const url = userPostsUrl.fetchUserPost(user_id, 1);
    const protocol = https ? 'https://' : 'http://';
    const fullUrl = protocol + url;
    const response = await fetch(fullUrl, {
        method: 'GET',
        credentials: 'include',
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
};
const deleteUserPosts = async (user_id, https) => {
};
const deleteUserPost = async (user_id, https) => {
};
const createUserPost = async (user_id, https) => {
};
export default fetchUserPosts;
export { fetchUserPost, deleteUserPosts, deleteUserPost, createUserPost };
//# sourceMappingURL=FetchUserPosts.js.map