import router from './router/router.js';

document.addEventListener('DOMContentLoaded' ,() => {
  router();
})

window.addEventListener('hashchange', router);      // 주소가 바뀔 때마다 실행
window.addEventListener('DOMContentLoaded', router); // 페이지 처음 로딩 시 실행