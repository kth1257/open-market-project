export default function createHeader() {
  const isLoggedIn = !!localStorage.getItem('token');
  // 로컬스토리지에 토큰 값이 있는지 체크하여 true/false값으로 반환
  const header = document.createElement('header');
  header.className = 'gnb';

  header.innerHTML = `
    <div class="gnb-wrap">
      <div class="gnb-left">
        <h1 class="gnb-logo">
          <a href="#/">
            <img class="logo-img" src="/open-market-project/src/assets/images/Logo-hodu.png" alt="HODU">
          </a>
        </h1>
        <form class="gnb-search" role="search">
        <input type="search" placeholder="상품을 검색해보세요" disabled />
        <button type="submit" disabled>
          <img src="/open-market-project/src/assets/images/icon-search.svg" alt="검색" />
        </button>
      </form>
      </div>
      <div class="gnb-right">
        <nav class="gnb-btns"  aria-label="사용자 메뉴">
        <button class="btn-cart">
          <img src="/open-market-project/src/assets/images/icon-shopping-cart.svg" alt="" />
          장바구니
        </button>
        <button class="btn-auth">
          <img src="/open-market-project/src/assets/images/icon-user.svg" alt="" />
          ${ isLoggedIn ? '마이페이지' : '로그인' }
        </button>
      </nav>
      </div>
    </div>
  `;

  const authBtn = header.querySelector('.btn-auth');
  authBtn.addEventListener('click', () => {
    if (isLoggedIn) {
      location.href = '#/mypage'
    } else {
      location.href = '#/login'
    }
  });

  return header;
}