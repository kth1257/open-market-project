export default function Header() {
  const header = document.createElement('header');
  header.className = 'gnb';

  header.innerHTML = `
    <div class="gnb-inner">
      <h1 class="logo">
        <a href="#/">
          <img src="../assets/images/Logo-hodu.png" alt="HODU 로고" class="logo-img" />
        </a>
      </h1>
      <div class="gnb-search">
        <input type="text" placeholder="상품을 검색해보세요" disabled />
        <button disabled>
          <img src="../assets/images/icon-search.svg" alt="검색" />
        </button>
      </div>
      <nav class="gnb-btns">
        <button class="btn-cart">
          <img src="../assets/images/icon-shopping-cart.svg" alt="장바구니" />
        </button>
        <button class="btn-mypage">
          <img src="../assets/images/icon-user.svg" alt="마이페이지" />
        </button>
      </nav>
    </div>
  `;

  return header;
}