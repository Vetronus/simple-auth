_api = 'https://portfolioservicesapi.herokuapp.com/api/url/';
let final = "https://authdemonstrator.netlify.app/";
ajad("GET", "ping/it", {}, function(obj){});
_api = 'https://portfolioservicesapi.herokuapp.com/api/user/';


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

loginForm.addEventListener("submit", noSubmit);
signupForm.addEventListener("submit", noSubmit);
accountForm.addEventListener("submit", noSubmit);

function noSubmit(e){
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

loginBtn.addEventListener("click", login);
createBtn.addEventListener("click", signup);
deleteBtn.addEventListener("click", remove);
logoutBtn.addEventListener("click", logout);

function login() {
    spinSpan.classList.remove("hide");
    // send the request to authenticate user
    // show error if wrong id/pass or user doesn't exists
    // finally do this
    loginDiv.classList.add("hide");
    signupDiv.classList.add("hide");
    accountDiv.classList.remove("hide");
    spinSpan.classList.add("hide");
}

function signup(){
    spinSpan.classList.remove("hide");
    // send the request to create new user
    // show error if wrong id/pass or user doesn't exists
    // finally do this
    loginDiv.classList.add("hide");
    signupDiv.classList.add("hide");
    accountDiv.classList.remove("hide");
    spinSpan.classList.add("hide");
}

function logout(){
    spinSpan.classList.remove("hide");
    // remove jwt from localstorage
    // then do this
    signupDiv.classList.add("hide");
    accountDiv.classList.add("hide");
    loginDiv.classList.remove("hide");
    spinSpan.classList.add("hide");
}

function remove(){
    spinSpan.classList.remove("hide");
    // remove jwt from localstorage
    // send request to remove user from db
    // show error if encountered any
    // then do this
    signupDiv.classList.add("hide");
    accountDiv.classList.add("hide");
    loginDiv.classList.remove("hide");
    spinSpan.classList.add("hide");
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
