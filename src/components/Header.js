import { isLoggedIn } from "../utils/session.js";
import createDropdownMenu from "./DropdownMenu.js";
export default function createHeader() {
  const loggedIn = isLoggedIn();
  // 로컬스토리지에 토큰 값이 있는지 체크하여 true/false값으로 반환
  const header = document.createElement('header');
  header.className = 'gnb';

  header.innerHTML = `
    <div class="gnb-wrap">
      <div class="gnb-left">
        <h1 class="gnb-logo">
          <a href="#/">
            <img class="logo-img" src="./src/assets/images/Logo-hodu.png" alt="HODU">
          </a>
        </h1>
        <form class="gnb-search" role="search">
        <input type="search" placeholder="상품을 검색해보세요" disabled />
        <button type="submit" disabled>
          <img src="./src/assets/images/icon-search.svg" alt="검색" />
        </button>
      </form>
      </div>
      <div class="gnb-right">
        <nav class="gnb-btns"  aria-label="사용자 메뉴">
        <button class="btn-cart">
          <img src="./src/assets/images/icon-shopping-cart.svg" alt="" />
          장바구니
        </button>
        <div class="dropdown-wrap">
          <button class="btn-auth">
            <img src="./src/assets/images/icon-user.svg" alt="" />
            마이페이지
          </button>
        </div>
      </nav>
      </div>
    </div>
  `;

  const dropdownWrap = header.querySelector('.dropdown-wrap');
  const authBtn = header.querySelector('.btn-auth');

  authBtn.addEventListener('click', () => {
    const existingMenu = dropdownWrap.querySelector('.dropdown-menu');
    if (existingMenu) {
      existingMenu.remove(); // 이미 있으면 제거 (toggle)
      return;
    }

    const menu = createDropdownMenu(); // 새 메뉴 생성
    dropdownWrap.appendChild(menu);
  });


  // const authBtn = header.querySelector('.btn-auth');
  // authBtn.addEventListener('click', () => {
  //   if (loggedIn) {
  //     location.href = '#/mypage'
  //   } else {
  //     location.href = '#/login'
  //   }
  // });

  return header;
}