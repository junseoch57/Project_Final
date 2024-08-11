document.addEventListener('DOMContentLoaded', () => {
  const image = document.getElementById('loginImage');
  image.onload = () => {
      document.getElementById('imageSection').style.visibility = 'visible'; // 이미지 로드 후 섹션 표시
  };
});


document.addEventListener('DOMContentLoaded', () => {
  ButtonEvents();
  NextButtonEvents();
});

document.addEventListener('DOMContentLoaded', function() {
  var loginButton = document.getElementById('loginplz');
  if (loginButton) {
    loginButton.addEventListener('click', function(event) {
      event.preventDefault();
      alert('로그인 후 이용해주세요');
      window.location.href = 'login.html';
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

//section3 효과
document.addEventListener('DOMContentLoaded', function() {
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
  });