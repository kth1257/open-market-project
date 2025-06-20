// 상품 목록 불러오기, 상품 상세 정보 가져오기, 상품 등록 등의 기능
export async function fetchProductList() {
  const res = await fetch('https://api.wenivops.co.kr/services/open-market/products/');
  const data = await res.json();
  if (!res.ok) throw new Error(data?.detail || '상품 목록 불러오기 실패');
  return data.results;
}