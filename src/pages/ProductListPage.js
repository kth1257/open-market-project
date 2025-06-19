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

  fetch('https://api.wenivops.co.kr/services/open-market/')
  // 요청할 주소
  .then((response) => response.json())
  // 앞 과정이 끝나면 than하고 응답을 받아서 json형식으로 바꿈
  .then((data) => console.log(data));
  // 앞 과정(응답을 받아 json으로 바꿨)했으면


  app.append(header, carousel, section);
}