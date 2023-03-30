import {getLastCommit, getGithubUsers, setGithubUser} from "./github.js";

( async ()=>{
    // getting users
    let users = await getGithubUsers(2000, 100);
    console.log(users);

    // setting users into a card
    let usersParent = document.querySelector('#users');
    users.forEach(user => {
        setGithubUser(user, usersParent);
    })
    // checking getLastCommit data
    let commit = await getLastCommit('isaacach');
    console.log(commit);

})()

