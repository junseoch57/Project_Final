

//문서 완전히 로드된 후 초기화 함수 호출
document.addEventListener('DOMContentLoaded', () => {
  ButtonEvents();
  NextButtonEvents();
});

//함수1. 모든 버튼에 클릭 이벤트 설정
const ButtonEvents = () => {
  //페이지 내 모든 버튼 선택
  const buttons = document.querySelectorAll('button');

  //각 버튼에 클릭 이벤트 추가
  buttons.forEach((button) => {
    button.addEventListener('click', ButtonClick);
  });
};

//함수2. '다음' 버튼에 클릭 이벤트 설정
// >>  버튼 클릭 시 선택된 옵션에 따라 페이지 이동
const NextButtonEvents = () => {
  const nextButtons = document.querySelectorAll('.next-button');

  //'다음' 버튼에 클릭 이벤트 추가
  nextButtons.forEach((nextButton) => {
    nextButton.addEventListener('click', NextClick);
  });
};

//함수3. 버튼 클릭 시 호출
const ButtonClick = (event) => {
  const clickedButton = event.target;
  const group = clickedButton.getAttribute('data-group'); //클릭된 버튼의 그룹 정보
  console.log('ggg', group);

  //동일 그룹의 모든 버튼 선택
  document
    .querySelectorAll(`button[data-group="${group}"]`)
    .forEach((button) => {
      if (button === clickedButton) {
        button.classList.toggle('selected');
      } else {
        button.classList.remove('selected');
      }
    });
};

//함수4. '다음' 버튼 클릭 시 호출
//선택된 옵션에 따라 페이지 url 결정하고 페이지 이동
const NextClick = () => {
  const selectedTravelBtn = document.querySelector(
    'button[data-group="1"].selected'
  );
  const selectedDurationBtn = document.querySelector(
    'button[data-group="2"].selected'
  );

  //선택된 유형/기간 가져옴
  const travelType = selectedTravelBtn
    ? selectedTravelBtn.getAttribute('data-type')
    : null;
  const durationType = selectedDurationBtn
    ? selectedDurationBtn.getAttribute('data-type')
    : null;

  //선택된 옵션에 따라 이동할 페이지 결정
  const page = determinePage(travelType, durationType);

  if (page) {
    window.location.href = page;
  } else {
    alert('모든 옵션을 선택해 주세요.');
  }
};

const determinePage = (travelType, durationType) => {
  if (travelType === 'domestic' && durationType === 'short')
    return 'dom_short.html';
  if (travelType === 'domestic' && durationType === 'long')
    return 'dom_long.html';
  if (travelType === 'international' && durationType === 'short')
    return 'inter_short.html';
  if (travelType === 'international' && durationType === 'long')
    return 'inter_long.html';

  return '';
};
