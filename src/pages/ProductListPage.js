import createHeader from '../components/Header.js';
import createCarousel from '../components/Carousel.js';

// 메인 상품 목록 페이지 (구매자가 보는 메인)
export default function ProductListPage() {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const header = createHeader();
  const carousel = createCarousel();

  const section = document.createElement('section');
  section.className = 'product-list-page';
  section.innerHTML = `
    <h2 class="visually-hidden">상품 목록</h2>
    <ul class="product-list"></ul>
  `;

  app.append(header, carousel, section);
}