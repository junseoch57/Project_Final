document.addEventListener('DOMContentLoaded', function() {
    const message = localStorage.getItem('loginSuccess');
    if (message === "true") {
        alert("로그인 되었습니다");
        localStorage.removeItem('loginSuccess');
    }

    // 로그아웃 버튼 -> 바로 index.html로 이동
    const logoutButton = document.getElementById('logoutButton'); 
    if (logoutButton) {
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            window.location.href = 'index.html'; // 바로 index.html로 이동
        });
    }
});
//section2 효과
document.addEventListener('scroll', function() {
  const section2Box = document.querySelector('.section2box');
  const boxTop = section2Box.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (boxTop < windowHeight - 100) { 
      section2Box.classList.add('visible');
  } else {
      section2Box.classList.remove('visible');
  }
});
  // section3 애니메이션 
  const elements = document.querySelectorAll('.title-box');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
          } else {
              entry.target.classList.remove('animate');
          }
      });
  }, { threshold: 0.1 });

  elements.forEach(element => {
      observer.observe(element);
  });


  