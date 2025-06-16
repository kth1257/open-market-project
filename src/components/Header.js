// GNB(Global Navigation Bar), 로그인/장바구니/마이페이지 버튼 포함

export default function Header() {
  const header = document.createElement('header');
  header.className = 'gnb';

  header.innerHTML = `
    <div class="gnb-inner">
      <h1 class="logo">
        <a href="#/">🛒 오픈마켓</a>
      </h1>
      <nav class="nav">
        <button class="btn-cart">장바구니</button>
        <button class="btn-mypage">마이페이지</button>
      </nav>
    </div>
  `;

  return header;
}