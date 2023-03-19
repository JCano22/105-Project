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
    }
    if(aUser.password === ""){
        valid = false;
        $("#txtPassWord").addClass("error");
    }
    if(aUser.firstName ===""){
        valid = false;
        $("#txtFirstName").addClass("error");
    }
    if(aUser.lastName ===""){
        valid = false;
        $("#txtLastName").addClass("error");
    }
    return valid;
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
        saveUser(newUser); //function call for storeManager
        $("input").val("");
    }
    
}
    
function init(){
    console.log("init");
}

window.onload=init;