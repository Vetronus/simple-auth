_api = 'https://portfolioservicesapi.herokuapp.com/api';
let final = "https://simpleauth.netlify.app/";
ajad("GET", "/url/ping/it", {}, function(obj){});


let usernameInput = document.getElementById("username-input");
let passInput = document.getElementById("pass-input");
let loginBtn = document.getElementById("login-btn");
let loginDivChanger = document.getElementById("div-changer-login");

let nameInput = document.getElementById("name-input");
let usernameInput2 = document.getElementById("signup-username-input");
let passInput2 = document.getElementById("signup-pass-input");
let createBtn = document.getElementById("create-btn");
let signupDivChanger = document.getElementById("div-changer-signup");

let namePara = document.getElementById("name-p");
let usernamePara = document.getElementById("username-p");
let logoutBtn = document.getElementById("logout-btn");
let deleteBtn = document.getElementById("delete-btn");

let loginDiv = document.getElementById("login-container");
let signupDiv = document.getElementById("signup-container");
let accountDiv = document.getElementById("account-container");

let loginForm = document.getElementById("login-form");
let signupForm = document.getElementById("signup-form");
let accountForm = document.getElementById("account-form");

let spinSpan = document.getElementById("spin-span");
// let errSpan = document.getElementById('err-span');


loginForm.addEventListener("submit", login);
signupForm.addEventListener("submit", signup);
accountForm.addEventListener("submit", noSubmit);

function noSubmit(e, x){
    e.preventDefault();
}



loginDivChanger.addEventListener('click', ()=>{
    loginDiv.classList.add("hide");
    signupDiv.classList.remove("hide");
})

signupDivChanger.addEventListener('click', ()=>{
    signupDiv.classList.add("hide");
    loginDiv.classList.remove("hide");
})

// still have to prevent default

// loginBtn.addEventListener("click", login);
// createBtn.addEventListener("click", signup);
deleteBtn.addEventListener("click", remove);
logoutBtn.addEventListener("click", logout);

function login(e) {
    e.preventDefault();
    spinSpan.classList.remove("hide");
    let data = {
        id: usernameInput.value,
        pass: passInput.value
    }

    ajad("POST", "/auth", data, function(obj, status){
        if(status < 400){
            _jwt = obj.obj;
            ajad("GET", "/user", {}, function(obj2, status2){
                if(status2 < 400){
                    // reset the form
                    usernameInput.value = "";
                    passInput.value = "";

                    // change the name and username of the accound div
                    namePara.innerText = "Hello, " + obj2.obj.name;
                    usernamePara.innerText = "@" + obj2.obj.id;

                    // handle what div will be visisble
                    loginDiv.classList.add("hide");
                    signupDiv.classList.add("hide");
                    accountDiv.classList.remove("hide");
                }
                else{
                    alert(obj.obj);
                }
                spinSpan.classList.add("hide");
            })
        }
        else{
            alert(obj.obj);
            spinSpan.classList.add("hide");
        }
    })
}

function signup(e){
    e.preventDefault();
    spinSpan.classList.remove("hide");
    let data = {
        name: nameInput.value,
        id: usernameInput2.value,
        pass: passInput2.value
    }

    ajad("POST", "/user", data, function(obj, status){
        if(status < 400){
            // reset the form value
            usernameInput.value = "";
            passInput.value = "";
            nameInput.value = "";
            usernameInput2.value = "";
            passInput2.value = "";

            // change the name and username of the accound div
            namePara.innerText = "Hello, " + obj.obj.name;
            usernamePara.innerText = "@" + obj.obj.id;

            // handle what div will be visisble
            loginDiv.classList.add("hide");
            signupDiv.classList.add("hide");
            accountDiv.classList.remove("hide");
        }
        else{
            alert(obj.obj);
        }
        spinSpan.classList.add("hide");
    })
}

function logout(){
    spinSpan.classList.remove("hide");
    _jwt = "";
    signupDiv.classList.add("hide");
    accountDiv.classList.add("hide");
    loginDiv.classList.remove("hide");
    spinSpan.classList.add("hide");
}

function remove(){
    spinSpan.classList.remove("hide");
    ajad("DELETE", "/user", {}, function(obj, status){
        if(status < 400){
            _jwt = "";
            signupDiv.classList.add("hide");
            accountDiv.classList.add("hide");
            loginDiv.classList.remove("hide");
        }
        else{
            alert(obj.obj);
        }
        spinSpan.classList.add("hide");
    })
}


// function createShortUrl()
// {
//     url = urlInput.value;
//     if(!isValidURL(url))
//     {
//         errSpan.classList.remove('hide');
//         return;
//     }

//     errSpan.classList.add('hide');
//     outputDiv.classList.add("hide");
//     spinSpan.classList.remove("hide");
    
//     ajad("POST", "", {url: url}, function(res){

//         short = final + res.obj.id;
//         shortA.innerText = short;
//         db.value = short;
//         spinSpan.classList.add("hide");
//         outputDiv.classList.remove("hide");
//     })
// }


// function copyShortUrl()
// {
//     console.log("Yo");
//     db.classList.remove("hide");
//     db.select();
//     db.setSelectionRange(0, 99999);
//     document.execCommand("copy");
//     db.classList.add("hide");
// }
