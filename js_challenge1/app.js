// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//   console.log("hello", loginInput.value);
// }

// loginButton.addEventListener("click", onLoginBtnClick);

//querySelector() classname, tagname 모두 검색가능

// const loginForm2 = document.getElementById("login-form");

const loginInput = document.querySelector("#login-form input");

const loginButton = document.querySelector("#login-form button");

function onhtnClick(){
    console.dir(loginInput.value);
    console.log("click");
}


loginButton.addEventListener("click",onhtnClick );




