document.addEventListener('DOMContentLoaded', () => {
    ButtonEvents();
    NextButtonEvents();
  });
  

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼의 기본 동작을 막음
    const userId = document.getElementById("username").value; // 사용자 아이디 가져오기
    localStorage.setItem("loginSuccess", "true");
    localStorage.setItem("userId", userId); // 사용자 아이디 저장
    window.location.href = "Main2.html"; // 메인 페이지로 이동
});