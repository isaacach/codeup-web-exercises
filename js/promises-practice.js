import {getGithubUsers, setGithubUser} from "./github.js";

(async ()=>{
    // get data
    let users = await getGithubUsers();
    console.log(users);

    // set / render data
    let usersParent = document.querySelector('#users');
    users.forEach(user => {
        setGithubUser(user, usersParent);

    })
})()

