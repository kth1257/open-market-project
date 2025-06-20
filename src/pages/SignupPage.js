// 회원가입 화면과 유효성 검사

import { signupBuyer } from '../api/userApi.js';
import { validatePasswordMatch, validateTermsAgreement } from '../utils/validator.js';


export default function SignupPage() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const section = document.createElement('section');
  section.className = 'signup-section';

  section.innerHTML = `
  <h1 class="logo">
        <a href="#/">
          <img class="logo-img" src="./src/assets/images/Logo-hodu.png" alt="호두오픈마켓">
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
              <input type="text" name="username" id="username">
              <button type="button" class="check-duplicate-btn">중복확인</button>
            </div>
            <p class="id-message"></p>
          </div>

          <div class="form-block">
            <label class="field-label" for="password">비밀번호</label>
            <input type="password" name="password" id="password">
          </div>

          <div class="form-block">
            <label class="field-label" for="password2">비밀번호 재확인</label>
            <input type="password" name="password2" id="password2">
            <p class="pw-message"></p>
          </div>

          <div class="form-block">
            <label class="field-label" for="name">이름</label>
            <input type="text" name="name" id="name">
          </div>

          <div class="form-block">
            <label class="field-label">휴대폰번호</label>
            <div class="form-row phone-group">
              <select name="phone1">
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
              </select>
              <input type="text" name="phone2" maxlength="4" required >
              <input type="text" name="phone3" maxlength="4" required >
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

  const checkBtn = section.querySelector('.check-duplicate-btn');
  const idInput = section.querySelector('#username');
  const idMessage = section.querySelector('.id-message');

  // 임시 틀
  checkBtn.addEventListener('click', () => {
    const value = idInput.value.trim();
    if (!value) {
      idMessage.textContent = '아이디를 입력해주세요.';
      idMessage.style.color = 'red';
    } else {
      idMessage.textContent = '멋진 아이디네요 :)';
      idMessage.style.color = 'green';
    }
    idMessage.style.display = 'block';
  });

  const pw1 = section.querySelector('#password');
  const pw2 = section.querySelector('#password2');
  const pwMessage = section.querySelector('.pw-message');

  pw2.addEventListener('input', () => {
    if (pw1.value !== pw2.value) {
      
      pwMessage.textContent = '비밀번호가 일치하지 않습니다.'
      pwMessage.style.color = 'red';
    } else {
      pwMessage.textContent = '비밀번호가 일치합니다.';
      pwMessage.style.color = 'green';
    }
    pwMessage.style.display = 'block';
  });

  const form = section.querySelector('.signup-form');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validatePasswordMatch(pw1.value, pw2.value)) {
      alert('비밀번호가 일치하지 않습니다.');
      pw2.focus();
      return;
    }

    if (!validateTermsAgreement(section.querySelector('input[name="terms"]'))) {
      alert('약관에 동의해주세요.');
      return;
    }

    const username = idInput.value.trim();
    const password = pw1.value.trim();
    const name = section.querySelector('#name').value.trim();
    const phone1 = section.querySelector('select[name="phone1"]').value;
    const phone2 = section.querySelector('input[name="phone2"]').value.trim();
    const phone3 = section.querySelector('input[name="phone3"]').value.trim();
    const phone_number = phone1 + phone2 + phone3;

    try {
      const data = await signupBuyer({ username, password, name, phone_number });
      alert('🎉 회원가입이 완료되었습니다!');
      location.href = '#/login';
    } catch (err) {
      alert(`오류가 발생해 가입에 실패하였습니다.`);
      console.log(err);
    }
  });
}