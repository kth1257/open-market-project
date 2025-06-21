// 로그인 페이지 렌더링과 이벤트 처리

import { loginUser } from '../api/userApi.js';
import { validateLoginInput } from '../utils/validator.js';
import { setUserSession } from '../utils/session.js';

export default function LoginPage() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const section = document.createElement('section');
  section.className = 'login-section';

  section.innerHTML = `
    <h1 class="logo">
          <a href="#/">
            <img class="logo-img" src="./src/assets/images/Logo-hodu.png" alt="호두오픈마켓">
          </a>
    </h1>
    <div class="login-container">
      <div class="login-tab">
        <button class="tab active" data-type="BUYER">구매회원 로그인</button>
        <button class="tab" data-type="SELLER">판매회원 로그인</button>
      </div>
      <form class="login-form">
        <label>
          <input type="text" name="id" placeholder = "아이디" required />
        </label>
        <label>
          <input type="password" name="pw" placeholder = "비밀번호" required />
        </label>
        <p class="error-message" style="display: none;">아이디 또는 비밀번호가 일치하지 않습니다.</p>
        <button type="submit" class="login-btn">로그인</button>
      </form>
      <div class="login-footer">
        <a href="#/signup">회원가입</a>
        <span class="divider">|</span>
        <a href="#">비밀번호 찾기</a>
      </div>
    </div>
  `;

  app.appendChild(section);

  const tabs = section.querySelectorAll('.tab');
  let userType = 'BUYER';

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      userType = tab.dataset.type;
    });
  });

  const form = section.querySelector('.login-form');
  const errorMessage = section.querySelector('.error-message');
  const idInput = form.querySelector('[name="id"]');
  const pwInput = form.querySelector('[name="pw"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = idInput.value.trim();
    const pw = pwInput.value.trim();
    const error = validateLoginInput(id, pw);

    if (error) {
      errorMessage.textContent = error;
      errorMessage.style.display = 'block';
      (id ? pwInput : idInput).focus();
      return;
    }

    try {
      const data = await loginUser({ username: id, password: pw }, userType);

      setUserSession({
        username: data.user.username,
        access: data.access,
        refresh: data.refresh,
        user_type: data.user.user_type
      });

      location.href = '#/';
    } catch (err) {
      errorMessage.textContent =
        err?.detail || '아이디 또는 비밀번호가 일치하지 않습니다.';
      errorMessage.style.display = 'block';
    }
  });
}
