export default function createProductCard(product) {
  const li = document.createElement('li');
  li.className = 'product-card';
  li.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-card-info">
      <p>${product.seller.store_name}</p>
      <h3>${product.name}</h3>
      <p>${product.price.toLocaleString()}원</p>
    </div>
`;

  li.addEventListener('click', () => {
      location.href = `#/product/${product.id}`;
  });

  return li;
}