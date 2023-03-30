import {keys} from './keys.js'
// gets user information
export const getGithubUsers = async (since = 0, perPage = 30) => {
    try {
        let response = await fetch(`https://api.github.com/users?since=${since}&per_page=${perPage}`, {headers: {'Authorization': `token ${keys.github}`}});
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}
// gets the last commit of a username
export const getLastCommit = async (username, since = 0, perPage = 30) => {
    try {
        let response = await fetch(`https://api.github.com/users/${username}/events?since=${since}&per_page=${perPage}`, {headers: {'Authorization': `token ${keys.github}`}})
        let data = await response.json();
        let commit = data.find(element => element.type === 'PushEvent');
        return commit ? commit.created_at : 'No public commit events';
    } catch (error) {
        console.log(error);
    }
}
// sets github user info into a card
export const setGithubUser = async (user, parent) => {
    let userCommit = await getLastCommit(user.login, 50, 100);
    let element = document.createElement('div');
    element.classList.add('user-card');
    element.innerHTML = `<div class="img-wrapper">
                            <img src=${user.avatar_url} alt="avatar">
                         </div>
                         <h2>${user.login}</h2>
                         <p>Last Commit:<br>${userCommit}</p>                                           
                         <a href=${user.url} target="_blank">Go To Profile</a>
                         <button>Remove</button>`
    ;
    element.querySelector('button').addEventListener('click', () => {
        element.remove();
    });
    parent.appendChild(element);
}




