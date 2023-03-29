import {getLastCommit, getGithubUsers} from "./github.js";

( async ()=>{
    let user = await getGithubUsers()
    console.log(user);
    let commit = await getLastCommit('isaacach', 0, 100);
    console.log(commit[0].created_at);
})()