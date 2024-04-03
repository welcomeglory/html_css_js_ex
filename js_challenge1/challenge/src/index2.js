// JavaScript 코드 (src/index2.js)

// 크리스마스까지의 남은 시간을 계산하는 함수
function calculateTimeUntilChristmas() {
    // 현재 날짜와 시간 가져오기
    var currentDate = new Date();
    // 크리스마스 날짜 생성 (현재 연도의 12월 25일로 설정)
    var christmasDate = new Date(currentDate.getFullYear(), 11, 25); // 12월은 11로 표현됩니다. (인덱스는 0부터 시작하므로)
    
    // 만약 오늘이 12월 25일 이후라면, 내년의 크리스마스를 설정합니다.
    if (currentDate.getMonth() === 11 && currentDate.getDate() > 25) {
        christmasDate.setFullYear(christmasDate.getFullYear() + 1);
    }
    
    // 현재 시간과 크리스마스까지의 시간 차이 계산
    var timeDifference = christmasDate.getTime() - currentDate.getTime();

    // 시간 차이를 날짜, 시간, 분, 초로 변환
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // 결과 반환
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

// 시계 업데이트 함수
function updateClock() {
    // 크리스마스까지의 남은 시간 계산
    var timeUntilChristmas = calculateTimeUntilChristmas();
    // HTML 요소 찾기
    var clockElement = document.querySelector(".js-clock"); // 클래스로 요소를 찾습니다.
    // 시간을 HTML에 업데이트
    clockElement.innerHTML = "크리스마스까지 " + timeUntilChristmas.days + "일 " + timeUntilChristmas.hours + "시간 " + timeUntilChristmas.minutes + "분 " + timeUntilChristmas.seconds + "초 남았습니다.";
}

// 초기 실행
updateClock();
// 1초마다 시계 업데이트
setInterval(updateClock, 1000);
