// 회원가입 화면과 유효성 검사
import Header from '../components/Header.js';

export default function SignupPage() {
  const app = document.querySelector('.app');
  app.innerHTML = '';
  app.appendChild(Header());

  const section = document.createElement('section');
  section.className = 'signup-section';

  section.innerHTML = `
    <div class="signup-container">
      <div class="signup-tab">
        <button class="tab active" data-type="BUYER">구매회원가입</button>
        <button class="tab" data-type="SELLER">판매회원가입</button>
      </div>
      <form class="signup-form">
        <div class="form-row">
          <label>
            아이디
            <input type="text" name="username" required />
          </label>
          <button type="button" class="check-duplicate-btn">중복확인</button>
          <p class="id-message"></p>
        </div>

        <label>
          비밀번호
          <input type="password" name="password" required />
        </label>

        <label>
          비밀번호 재확인
          <input type="password" name="password2" required />
          <p class="pw-message"></p>
        </label>

        <label>
          이름
          <input type="text" name="name" required />
        </label>

        <div class="form-row phone">
          <label>휴대폰번호</label>
          <div class="phone-group">
            <select name="phone1">
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
            </select>
            <input type="text" name="phone2" maxlength="4" required />
            <input type="text" name="phone3" maxlength="4" required />
          </div>
        </div>

        <div class="terms">
          <label>
            <input type="checkbox" name="terms" />
            호두샵의 <a href="#">이용약관</a> 및 <a href="#">개인정보처리방침</a>에 동의합니다.
          </label>
        </div>

        <button type="submit" class="signup-btn" disabled>가입하기</button>
      </form>
    </div>
  `;

  app.appendChild(section);
}