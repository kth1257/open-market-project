import createHeader from '../components/Header.js';
import createCarousel from '../components/Carousel.js';
import createProductCard from '../components/ProductCard.js';
import { fetchProductList } from '../api/productApi.js';
import createFooter from '../components/Footer.js';

// 메인 상품 목록 페이지 (구매자가 보는 메인)
export default async function ProductListPage() {
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

  const productList = section.querySelector('.product-list');

  try {
    const products = await fetchProductList();
    products.forEach(product => {
      const card = createProductCard(product);
      productList.appendChild(card);
    });
  } catch (err) {
    console.error('상품 불러오기 실패:', err);
    productList.innerHTML = `<li>상품을 불러오지 못했습니다 😥</li>`;
  }

  app.append(header, carousel, section, createFooter());
}