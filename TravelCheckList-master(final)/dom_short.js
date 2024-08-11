document.addEventListener('DOMContentLoaded', () => {
    const clothesList = ['상의', '하의', '속옷', '양말', '모자', '신발(슬리퍼,운동화)'];
    const beautyList = ['치약,칫솔', '클렌징 용품', '샴푸,린스', '바디워시,샤워타월', '빗,머리끈', '면도기', '수건', '썬크림', '메이크업 화장품'];
    const electroList = ['카메라', '충전기', '에어팟,이어폰', '보조배터리', '헤어드라이기', '고데기'];
    const othersList = ['우산/우비', '휴지/물티슈'];

    const tooltipTexts = {
        '여권': '해외여행시 여권은 필수!!',
        '유심/포켓 와이파이': '해외에서 인터넷 사용을 위해 필요해요',
        '멀티 어댑터': '나라별로 콘센트 규격이 달라요'
    };

    /* 카테고리별 체크리스트 로드 */
    loadChecklist('clothes-list', clothesList);
    loadChecklist('beauty-list', beautyList);
    loadChecklist('electro-list', electroList);
    loadChecklist('others-list', othersList, tooltipTexts);

    // 항목 추가 
    const addButtonList = document.querySelectorAll(".btn-add");

    addButtonList.forEach(button => {
        button.addEventListener("click", function() {
            const section = button.closest('.checklist-section'); // 현재 버튼이 속한 체크리스트
            const listId = button.getAttribute('data-list'); // 체크리스트 id 가져옴
            const inputField = section.querySelector('.form-control');
            const list = document.getElementById(listId);

            const taskValue = inputField.value;
            if (taskValue === "")
                 return alert("항목을 입력해주세요!");
            
            // 체크리스트에 새 항목 추가
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `<input class="checkbox" type="checkbox" value=""> ${taskValue}`;
            if (tooltipTexts[taskValue]) {
                li.innerHTML += `<span class="info-icon-container"><img class="info-icon" src="images/icon-info.png"><span class="info-text">${tooltipTexts[taskValue]}</span></span>`;
            }
            list.appendChild(li);
            inputField.value = ""; 
        });
    });

    // 산 여행 클릭하면 산 여행 리스트 토글
    document.getElementById('mountain-box').addEventListener('click', (event) => {
        if (event.target.tagName !== 'INPUT') {
            toggleChecklist('mountain-list');
        }
    });
    // 바다 여행 클릭하면 바다 여행 리스트 토글
    document.getElementById('sea-box').addEventListener('click', (event) => {
        if (event.target.tagName !== 'INPUT') {
            toggleChecklist('sea-list');
        }
    });

    // 체크한 항목 modal로 표시
    document.getElementById('checked-list-id').addEventListener('click', () => {
        showCheckedItems();
    });

    document.querySelector('.close-button').addEventListener('click', closeModal);

    // info 아이콘 클릭 시 택스트 표시
    document.addEventListener('click', (event) => {
        const iconContainers = document.querySelectorAll('.info-icon-container');
        iconContainers.forEach(container => {
            if (container.contains(event.target)) {
                container.classList.toggle('active');
            } else {
                container.classList.remove('active');
            }
        });
    });
});

// 체크리스트 항목을 로드하는 함수
const loadChecklist = (listId, items, tooltipTexts = {}) => {
    const list = document.getElementById(listId);
    if (!list) {
        console.error(`리스트를 찾을 수 없습니다: ${listId}`);
        return;
    }
    
    if (!list.hasChildNodes()) {
        items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `<input class="checkbox" type="checkbox" value=""> ${item}`;
            if (tooltipTexts[item]) {
                li.innerHTML += `<span class="info-icon-container"><img class="info-icon" src="images/icon-info.png"><span class="info-text">${tooltipTexts[item]}</span></span>`;
            }
            list.appendChild(li);
        });
    }
}

// 체크리스트 가시성을 토글하는 함수
const toggleChecklist = (listId) => {
    const list = document.getElementById(listId);
    list.classList.toggle('d-none');
}

// 체크된 항목을 모달로 표시하는 함수
const showCheckedItems = () => {
    const modal = document.querySelector('.checked-list-modal');
    const container = document.querySelector('.container');
    const tipsContainer = document.querySelector('.tips-container');
    const categoryBoxes = document.querySelectorAll('.category-box');

    const allCheckboxes = document.querySelectorAll('.checkbox');
    const checkedItems = Array.from(allCheckboxes).filter(checkbox => checkbox.checked);
    const checkedList = checkedItems.map(item => item.parentElement.innerText.trim());

    const checkedItemsList = document.getElementById('checked-items-list');
    checkedItemsList.innerHTML = checkedList.map(item => `<li>${item}</li>`).join('');

    modal.style.display = 'block';
  
    container.style.filter = 'blur(3px)';  // 배경 흐리게
   
    categoryBoxes.forEach(box => box.style.filter = 'blur(3px)');
}

// modal 닫기
const closeModal = () => {
    const modal = document.querySelector('.checked-list-modal');
    const container = document.querySelector('.container');
    const tipsContainer = document.querySelector('.tips-container');
    const categoryBoxes = document.querySelectorAll('.category-box');

    modal.style.display = 'none';

    container.style.filter = 'none';
    tipsContainer.style.filter = 'none';
    categoryBoxes.forEach(box => box.style.filter = 'none');
}