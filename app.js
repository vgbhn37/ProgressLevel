// alert('테스트');

//진행바 , 이전 버튼, 다음 버튼 , 원 4개
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// 다음 버튼 클릭 시
next.addEventListener('click', () => {
  currentActive++
  update();
})

// 이전 버튼 클릭 시
prev.addEventListener('click', () => {
  currentActive--
  update();
})


// 버튼 클릭 시 progress 바와 circle의 상태 변화
function update() {
  circles.forEach((circle,idx) => {
    if(idx < currentActive) {
      circle.classList.add('active')
    }
    else {circle.classList.remove('active')}
  });

  const actives = document.querySelectorAll('.active');
  
  progress.style.width = (actives.length - 1 ) / (circles.length - 1) * 100 + '%';

  if(currentActive == 1 ) {
    prev.disabled = true;
  }
  else if(currentActive == circles.length){
    next.disabled = true;
  }
  else {
    prev.disabled = false;
    next.disabled = false;
  }
}