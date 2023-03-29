
export const getGithubUsers = async (since = 0, perPage = 30) => {
    try {
        let response = await fetch(`https://api.github.com/users?since=${since}&per_page=${perPage}`);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const setGithubUser = (user, parent) => {
    let element = document.createElement('div');
    element.classList.add('user-card');
    element.innerHTML = `<div class="img-wrapper">
                            <img src=${user.avatar_url} alt="avatar">
                         </div>
                         <h2>${user.login}</h2>
                         <a href=${user.url} target="_blank">Go To Profile</a>
                         <button>Remove</button>`
    ;
    element.querySelector('button').addEventListener('click', () => {
        element.remove();
    });
    parent.appendChild(element);
}

export const getLastCommit = async (username, since = 0, perPage = 30) => {
    let response = await fetch(`https://api.github.com/users/${username}/events?since=${since}&per_page=${perPage}`, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
    return await response.json();
}


