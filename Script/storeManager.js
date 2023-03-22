const KEY_LS = "users";

function saveUser(user){
    let oldUsers = readUsers();
    console.log(oldUsers); //this is an object
    oldUsers.push(user);

    let val = JSON.stringify(oldUsers); //convert object to string
    console.log(val);
    localStorage.setItem(KEY_LS, val);
}

function readUsers(){
    let users = localStorage.getItem(KEY_LS);

    if(!users){
        //here the LS is empty
        console.log("No users.");
        return []; //create the array
    }
    else{
        //if you get here the LS has users
        console.log("We have users.");
        let listUsers = JSON.parse(users); //parse users back into array
        return listUsers;
    }
    
}