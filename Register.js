function validate(){
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var cpassword=document.getElementById("cpassword").value;

    if(username=="admin" && password=="admin" && cpassword=="admin" && email=="admin@gmail.com"){
        alert("Register Successfully");
        window.location.href = "AdminHome.html";
    }
    else if(username=="banker" && password=="banker" && cpassword=="banker" && email=="banker@gmail.com"){
        alert("Register Successfully");
        window.location.href = "BankerHome.html";
    }
    else if(username=="client" && password=="client" && cpassword=="client" && email=="client@gmail.com"){
        alert("Register Successfully");
        window.location.href = "home.html";
    }
    else{
        alert("Register Failed");
    }
}