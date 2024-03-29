const title = document.querySelector("body");

function handleWindowResize() {
  // 화면 사이즈에 따라 배경색이 바뀌도록 설정
  if (window.innerWidth >= 768) {
    title.style.backgroundColor = "#FFDB58";
  } 
  else if(window.innerWidth <768 && window.innerWidth > 400){
    title.style.backgroundColor = "purple";
  }
  else{
    title.style.backgroundColor = "blue";
  }
}

window.addEventListener("resize", handleWindowResize);
