// 로그인 페이지 렌더링과 이벤트 처리
import Header from '../components/Header.js';

export default function LoginPage() {
  const app = document.querySelector('.app');
  app.innerHTML = '';
  app.appendChild(Header());

  const section = document.createElement('section');
  section.className = 'login-section';

  section.innerHTML = `
    <div class="login-container">
      <div class="login-tab">
        <button class="tab active" data-type="BUYER">구매회원 로그인</button>
        <button class="tab" data-type="SELLER">판매회원 로그인</button>
      </div>
      <form class="login-form">
        <label>
          <span class="input-label">아이디</span>
          <input type="text" name="id" required />
        </label>
        <label>
          <span class="input-label">비밀번호</span>
          <input type="password" name="pw" required />
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

  // 탭 클릭 이벤트
  const tabs = section.querySelectorAll('.tab');
  let userType = 'BUYER'; // 기본값

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      userType = tab.dataset.type;
      console.log('현재 선택된 유형:', userType);
    });
  });

  // 로그인 폼 이벤트
  const form = section.querySelector('.login-form');
  const errorMessage = section.querySelector('.error-message');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = form.id.value.trim();
    const pw = form.pw.value.trim();

    if (!id || !pw) {
      errorMessage.textContent = '아이디와 비밀번호를 모두 입력해주세요.';
      errorMessage.style.display = 'block';
      return;
    }

    // TODO: 여기서 로그인 API 요청
    // 예시 출력
    console.log('로그인 시도:', { id, pw, user_type: userType });
  });
}