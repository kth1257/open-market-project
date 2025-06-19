// 로그인 페이지 렌더링과 이벤트 처리

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

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const idInput = form.querySelector('[name="id]');
    const pwInput = form.querySelector('[name="pw]');
    const id = idInput.value.trim();
    const pw = pwInput.value.trim();

    // 🔹 Focus 처리
    if (!id) {
      errorMessage.textContent = '아이디를 입력해주세요.';
      errorMessage.style.display = 'block';
      idInput.focus();
      return;
    }
    if (!pw) {
      errorMessage.textContent = '비밀번호를 입력해주세요.';
      errorMessage.style.display = 'block';
      pwInput.focus();
      return;
    }

    // 🔹 가짜 로그인 처리 (API 연동 전)
    if (id === 'test' && pw === '1234') {
      // 로그인 성공 시 메인 페이지로 이동
      location.href = '#/';
    } else {
      errorMessage.textContent = '아이디 또는 비밀번호가 일치하지 않습니다.';
      errorMessage.style.display = 'block';
      pwInput.focus();
    }
  });
}
