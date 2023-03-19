const KEY_LS = "users";

function saveUser(user){
    console.log(user); //this is an object

    let val = JSON.stringify(user); //convert object to string
    console.log(val);
}