// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//   console.log("hello", loginInput.value);
// }

// loginButton.addEventListener("click", onLoginBtnClick);

//querySelector() classname, tagname 모두 검색가능

// const loginForm2 = document.getElementById("login-form");

// const loginForm = document.querySelector("#login-form input");

// const loginButton = document.querySelector("#login-form button");

// function onhtnClick(){
//     //유효성 검사
//     const username = loginInput.value;
//     if(username === ""){
//         alert("Please write your name.");
//     }else if(username.length > 15){
//         alert("Your name is too long.");
//     }
// }

// loginButton.addEventListener("click",onhtnClick );

const loginForm = document.querySelector("#login-form");

const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");


function onLoginSubmit(event){

    event.preventDefault();//기본 동작이 실행방지.
    console.log(loginInput.value);

}

function handleLinkClick(event){
    event.preventDefault();//기본 동작이 실행방지.
    console.dir(event);
}



loginForm.addEventListener("submit",onLoginSubmit);
link.addEventListener("click",handleLinkClick)





