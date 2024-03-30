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
const USERNAME_KEY = "username";

//form이 submit되면 우리는 input으로부터 유저정보를 받고,
function onLoginSubmit(event){
    //event가 원래하는 행동을 멈춤.(부라우저의 기본 동작을 막아줌. 그동작은 페이지 새로고침임.)
    event.preventDefault();//기본 동작이 실행방지.
    //form을 다시 숨김.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //loginInput.value를 username이라는 변수로 저장.
    const username = loginInput.value;
    //username값을 username이라는 key와 함께 local storage에 저장.
    localStorage.setItem(USERNAME_KEY,username);
    //form안에 있는 input에 입력한 유저명을 받고 paintGreetings를 호출.
    paintGreetings(username);
}

//greeting에 텍스트 `Hello ${username}`을 추가 후 HIDDEN_CLASS명을 지워주는 일을 함.
function paintGreetings(username){
    //아래 두 방법 다 String이랑 변수를 하나로 합쳐주고 있음.
    // greeting.innerText = "Hello " + username;
    //백틱(`)사용으로 띄어쓰기를 편하게 쓸수 있음.
    //비어 있는 h1 요소 안에 `Hello ${username}`이라는 텍스트를 추가.
    greeting.innerText = `Hello ${username}`;
    //h1요소로부터 "hidden"이라는 클래스명을 제거.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
//js가 USERNAME_KEY를 가지고 local storage를 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    //loginForm으로부터 HIDDEN_CLASSNAME를 제거
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //loginForm에 addEventListener를 더하고, submit을 기다림.
    //submit event가 발생하면 onLoginSubmit함수가 실행.
    loginForm.addEventListener("submit",onLoginSubmit);

}else{
    //show the greetings
    //유저정보가 local storge에서 옴.
    paintGreetings(savedUsername);
} 







