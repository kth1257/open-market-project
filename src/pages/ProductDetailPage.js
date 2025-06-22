// 상품을 클릭했을 때 상세 정보가 나오는 페이지
import createHeader from '../components/Header.js';
import { fetchProductDetail } from '../api/productApi.js';
import { isLoggedIn } from '../utils/session.js';
import createModal from '../components/Modal.js';

export default async function ProductDetailPage(id) {
  const app = document.querySelector('.app');
  app.innerHTML = '';

  const header = createHeader();
  const product = await fetchProductDetail(id); // 상품 데이터 불러오기

  const section = document.createElement('section');
  section.className = 'product-detail-page';
  section.innerHTML = `
  <h2 class="visually-hidden">상품 상세 정보</h2>
    <div class="detail-container">
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <div class="product-detail-info">
        <p class="seller-name">${product.seller.store_name}</p>
        <h2 class="product-name">${product.name}</h2>
        <p class="product-price">${product.price.toLocaleString()}원</p>
        <p class="delivery-info">택배배송 / 무료배송</p>

        <div class="quantity">
          <button class="btn-qty minus">-</button>
          <span class="qty-value">1</span>
          <button class="btn-qty plus">+</button>
        </div>

        <div class="summary">
          <span class="summary-title">총 상품 금액</span>
          <span class="summary-right">
            총 수량 <strong class="summary-quantity">1</strong>개 |
            <strong class="total-price">
            ${product.price.toLocaleString()}원
            </strong>
          </span>
        </div>

        <div class="button-group">
          <button class="btn-buy">바로 구매</button>
          <button class="btn-cart">장바구니</button>
        </div>
      </div>
    </div>
    <div class="tab-menu">
      <button class="tab active">버튼</button>
      <button class="tab">리뷰</button>
      <button class="tab">Q&A</button>
      <button class="tab">반품/교환정보</button>
    </div>
  `;

  app.appendChild(header);
  app.appendChild(section);

  const tabButtons = section.querySelectorAll('.tab');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active')); // 모든 탭에서 active 제거
      button.classList.add('active'); // 클릭한 탭에 active 추가
    });
  });

  // 수량 제어
  const qtyValue = section.querySelector('.qty-value');
  const quantityDisplay = section.querySelector('.summary-quantity');
  const totalPrice = section.querySelector('.total-price');
  let quantity = 1;

  function updateTotal() {
    totalPrice.textContent = (product.price * quantity).toLocaleString() + '원';
    qtyValue.textContent = quantity;
    quantityDisplay.textContent = quantity;
  }

  section.querySelector('.minus').addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      updateTotal();
    }
  });

  section.querySelector('.plus').addEventListener('click', () => {
    quantity++;
    updateTotal();
  });

  // 로그인 여부 확인
  const requireLoginAction = () => {
    if (!isLoggedIn()) {
      const modal = createModal({
        message: '로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?',
        onConfirm: () => location.href = '#/login',
      });
      document.body.appendChild(modal);
      return false;
    }
    return true;
  };

  section.querySelector('.btn-buy').addEventListener('click', () => {
    if (!requireLoginAction()) return;
    alert('구매 진행!');
  });

  section.querySelector('.btn-cart').addEventListener('click', () => {
    if (!requireLoginAction()) return;
    alert('장바구니에 담김!');
  });
}

