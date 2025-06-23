export default function NotFoundPage() {
  const section = document.createElement('section');
  section.className = 'not-found-section';

  section.innerHTML = `
    <div class="not-found-container">
      <img src="./src/assets/images/icon-404.svg" alt="404 아이콘" class="not-found-icon" />

      <div class="not-found-text">
        <h2>페이지를 찾을 수 없습니다.</h2>
        <p>
          페이지가 존재하지 않거나 사용할 수 없는 페이지입니다. <br />
          웹 주소가 올바른지 확인해 주세요.
        </p>
        <div class="not-found-buttons">
          <a href="#/" class="btn btn-main">메인으로</a>
          <button class="btn btn-sub" onclick="history.back()">이전 페이지</button>
        </div>
      </div>
    </div>
  `;

  return section;
}