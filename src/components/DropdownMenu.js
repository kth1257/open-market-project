// 마이페이지 버튼 눌렀을 때 나오는 드롭다운
import { clearUserSession, getUserSession } from '../utils/session.js';

export default function createDropdownMenu() {
  const dropdown = document.createElement('ul');
  dropdown.className = 'dropdown-menu';

  const user = getUserSession();

  if (user && user.access) {
    dropdown.innerHTML = `
      <li><a href="#/mypage">마이페이지</a></li>
      <li><button class="btn-logout">로그아웃</button></li>
    `;

    dropdown.querySelector('.btn-logout').addEventListener('click', () => {
      clearUserSession();
      alert('로그아웃 되었습니다.');
      location.href = '#/login';
    });
  } else {
    dropdown.innerHTML = `
      <li><a href="#/mypage">마이페이지</a></li>
      <li><a href="#/login">로그인</a></li>
    `;
  }

  return dropdown;
}