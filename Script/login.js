function login(){
    let usersList = readUsers();

     //get values from the input
     let uName = $('#txtEmail').val();
     let pass = $('#txtPassword').val();
     let valid = true;
    console.log(uName, pass);

     //travel the array
    for(let i = 0; i <  usersList.length; i++){
        let user = usersList[i];

        //compare the inputs values w/ values from usersList
        if(uName == user.email && pass == user.password){
            window.location="users.html";
            console.log('Welcome' + user.name);
            valid = true;
        }
        else{
            valid = false;
        }
    }
    if(!valid){
        //add other validation here!
        $("#form").append("<p class='invalid'>Invalid credentials</p>");
    }  
}

//event listener to call login function if enter key is pressed
//after filling in login info.
document.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        login();
    }
})

