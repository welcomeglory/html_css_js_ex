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
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();//기본 동작이 실행방지.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //아래 두 방법 다 String이랑 변수를 하나로 합쳐주고 있음.
    greeting.innerText = "Hello " + username;
    //백틱(`)사용으로 띄어쓰기를 편하게 쓸수 있음.
    // greeting.innerText = `Hello ${username}`;

    greeting.classList.remove(HIDDEN_CLASSNAME);
}



loginForm.addEventListener("submit",onLoginSubmit);





