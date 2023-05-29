function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && password=="admin"){
        alert("Login Successfully");
        window.location.href = "AdminHome.html";
    }
    else if(username=="banker" && password=="banker"){
        alert("Login Successfully");
        window.location.href = "BankerHome.html";
    }
    else if(username=="client" && password=="client"){
        alert("Login Successfully");
        window.location.href = "home.html";
    }
    else{
        alert("Login Failed");
    }
    localStorage.setItem('userRole', username);
}