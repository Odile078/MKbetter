function validate(){	
    var w = form.email.value;
    var m = form.password.value;
    if(w == "")
    {
    alert("email field can not be empty");
    form.email.focus();
    return false;
    }
    if( m == "" )
    {
    alert("Password field can not be empty");
    form.password.focus();
    return false;
    }
};
function signup(){	
    var a = form.Firstname.value;
    var b = form.Lastname.value;
    var c = form.NewPassword.value;
    var d = form.password.value;
    if(a == "")
    {
    alert("firstname field can not be empty");
    form.firstname.focus();
    return false;
    }
    if( b == "" )
    {
    alert("Lastname field can not be empty");
    form.Lastname.focus();
    return false;
    }
    if( c == "" )
    {
    alert("NewPassword field can not be empty");
    form.NewPassword.focus();
    return false;
    }
    if( d == "" )
    {
    alert("Password field can not be empty");
    form.password.focus();
    return false;
    }
};