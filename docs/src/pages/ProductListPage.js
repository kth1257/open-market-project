import createHeader from '../components/Header.js';

// 메인 상품 목록 페이지 (구매자가 보는 메인)
export default function ProductListPage() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const header = createHeader();
  const section = document.createElement('section');
  section.innerHTML = `
    
  `;

  app.appendChild(header);
  app.appendChild(section);
}