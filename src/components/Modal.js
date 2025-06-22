// 로그인 요청, 에러 안내 등 팝업 형태 UI
export default function createModal({ message, onConfirm }) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'modal';

  modal.innerHTML = `
    <button class="modal-close">&times;</button>
    <p class="modal-message">${message}</p>
    <div class="modal-actions">
      <button class="modal-cancel">아니요</button>
      <button class="modal-confirm">예</button>
    </div>
  `;

  overlay.appendChild(modal);

  // 닫기 함수
  const closeModal = () => {
    overlay.remove();
  };

  // 이벤트 등록
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.querySelector('.modal-cancel').addEventListener('click', closeModal);
  modal.querySelector('.modal-confirm').addEventListener('click', () => {
    onConfirm();
    closeModal();
  });

  // 바깥 영역 클릭 시 닫기
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  return overlay;
}