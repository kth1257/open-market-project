// 회원가입 화면과 유효성 검사

export default function SignupPage() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const section = document.createElement('section');
  section.className = 'signup-section';

  section.innerHTML = `
  <h1 class="logo">
        <a href="#/">
          <img class="logo-img" src="src/assets/images/Logo-hodu.png" alt="HODU">
        </a>
      </h1>
      <div class="signup-container">
        <div class="signup-tab">
          <button class="tab active" data-type="BUYER">구매회원가입</button>
          <button class="tab" data-type="SELLER">판매회원가입</button>
        </div>

        <form class="signup-form">

          <div class="form-block">
            <label class="field-label" for="username">아이디</label>
            <div class="form-row">
              <input type="text" name="username" id="username" required />
              <button type="button" class="check-duplicate-btn">중복확인</button>
            </div>
            <p class="id-message" style="display: none;">멋진 아이디네요 :)</p>
          </div>

          <div class="form-block">
            <label class="field-label" for="password">비밀번호</label>
            <input type="password" name="password" id="password" required />
          </div>

          <div class="form-block">
            <label class="field-label" for="password2">비밀번호 재확인</label>
            <input type="password" name="password2" id="password2" required />
            <p class="pw-message" style="display: none;">비밀번호가 일치하지 않습니다.</p>
          </div>

          <div class="form-block">
            <label class="field-label" for="name">이름</label>
            <input type="text" name="name" id="name" required />
          </div>

          <div class="form-block">
            <label class="field-label">휴대폰번호</label>
            <div class="form-row phone-group">
              <select name="phone1">
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
              </select>
              <input type="text" name="phone2" maxlength="4" required />
              <input type="text" name="phone3" maxlength="4" required />
            </div>
          </div>

          <div class="form-block terms">
            <label>
              <input type="checkbox" name="terms" />
              호두샵의 <a href="#">이용약관</a> 및 <a href="#">개인정보처리방침</a>에 동의합니다.
            </label>
          </div>

          <button type="submit" class="signup-btn">가입하기</button>
        </form>
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
  
}