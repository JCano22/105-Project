//User constructor
function User(e, p, f, l, a, ad, ph, pay, c){
    this.email = e;
    this.password = p;
    this.firstName = f;
    this.lastName = l;
    this.age = a;
    this.address = ad;
    this.phoneNum = ph;
    this.paymentMethod = pay;
    this.color = c;
}

function isValid(aUser) {
    let valid = true;

    //reset HTML Style
    $("#txtEmail").removeClass("error");
    $("#txtPassWord").removeClass("error");
    $("#txtFirstName").removeClass("error");
    $("#txtLastName").removeClass("error");

    //validation if stmnts
    if(aUser.email === ""){
        valid = false;
        $("#txtEmail").addClass("error");
        displayNotification("Please fill out the required field(s)", "error")
    }
    if(aUser.password === ""){
        valid = false;
        $("#txtPassWord").addClass("error");
        displayNotification("Please fill out the required field(s)", "error")
    }
    if(aUser.firstName ===""){
        valid = false;
        $("#txtFirstName").addClass("error");
        displayNotification("Please fill out the required field(s)", "error")
    }
    if(aUser.lastName ===""){
        valid = false;
        $("#txtLastName").addClass("error");
        displayNotification("Please fill out the required field(s)", "error")
    }
    return valid;
}

function displayNotification(msg, notificationType){
    let DIV = $("#notifications");
    DIV.removeClass("hide error success");
    DIV.addClass(notificationType).text(msg);
    
}
function hideNotification(){
    let DIV = $("#notifications");
    DIV.addClass("hide");
}

function register(){
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassWord").val();
    let inputFirstName = $("#txtFirstName").val();
    let inputLastName = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputAddress = $("#txtAddress").val();
    let inputPhone = $("#txtPhone").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#txtColor").val();

    let newUser = new User(inputEmail, inputPassword, inputFirstName,inputLastName, inputAge, inputAddress, inputPhone, inputPayment, inputColor);

    if(isValid(newUser))
    {
        displayNotification("Succcessful registration", "success");

        setTimeout(function(){
            hideNotification();
        }, 2000);

        saveUser(newUser); //function call for storeManager
        $("input").val("");
    }
    
}
document.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        register();
    }
})
    
function init(){
    console.log("init");
}

window.onload=init;