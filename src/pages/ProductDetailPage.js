// 상품을 클릭했을 때 상세 정보가 나오는 페이지
export default async function ProductDetailPage(id) {
  const app = document.querySelector('.app');
  app.innerHTML = `
    <section class="product-detail-page">
      <h2>상품 상세 페이지</h2>
      <p>상품 ID: ${id}</p>
    </section>
  `;
}