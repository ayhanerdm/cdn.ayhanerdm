// A collection of urls for user post endpoints
const userPostUrls = {
    apiUrl: 'api.ayhanerdm.dynu.net',
    fetchUserPosts: function(user_id: number|string) { return this.apiUrl + '/user/' + user_id + '/posts'; },
    fetchUserPost: function(user_id: number|string, post_id: number) { return this.apiUrl + '/user/' + user_id + '/posts/' + post_id; },
    deleteUserPosts: function(user_id: number|string) { return this.apiUrl + '/user/' + user_id + '/posts'; },
    deleteUserPost: function(user_id: number|string, post_id: number) { return this.apiUrl + '/user/' + user_id + '/posts/' + post_id; },
    createUserPost: function(user_id: number|string) { return this.apiUrl + '/user/' + user_id + '/posts'; },
}

// Always check if https is true or false and always include credentials
// Prepend the url with https:// or http://

const fetchUserPosts = async (user_id: number|string, https: boolean) => {
    const url = userPostUrls.fetchUserPosts(user_id);
    const protocol = https ? 'https://' : 'http://'
    const fullUrl = protocol + url

    const response = await fetch(fullUrl, {
        method: 'GET',
        credentials: 'include',
    })

    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return await response.json()
}

const fetchUserPost = async (user_id: number|string, post_id: number, https: boolean) => {
    const url = userPostUrls.fetchUserPost(user_id, post_id)
    const protocol = https ? 'https://' : 'http://'
    const fullUrl = protocol + url

    const response = await fetch(fullUrl, {
        method: 'GET',
        credentials: 'include',
    })

    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return await response.json()
}

const deleteUserPosts = async (user_id: number|string, https: boolean) => {

}

const deleteUserPost = async (user_id: number|string, https: boolean) => {

}

const createUserPost = async (user_id: number|string, https: boolean) => {

}

export { fetchUserPosts, fetchUserPost, deleteUserPosts, deleteUserPost, createUserPost }