const user = "admin";
const password = "admin"

function login()
{
    let userInput   =   document.getElementById("user").value;
    let passwordInput   =   document.getElementById("password").value;

    if(userInput === user && passwordInput === password)
    {
        window.location.replace("home.html");
    }
    else
    {
        alert("Valores Incorrectos")
    }
    
}

function exit()
{
    window.location.replace("index.html");
}