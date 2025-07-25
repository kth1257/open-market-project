// 하단 정보, 고객센터, 회사정보 등 고정 UI
export default function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer-top">
      <div class="footer-links">
        <a href="#">호두샵 소개</a>
        <a href="#">이용약관</a>
        <a href="#"><strong>개인정보처리방침</strong></a>
        <a href="#">전자금융거래약관</a>
        <a href="#">청소년보호정책</a>
        <a href="#">제휴문의</a>
      </div>
      <div class="footer-sns">
        <button><img src="./src/assets/images/icon-insta.svg" alt="인스타그램" /></button>
        <button><img src="./src/assets/images/icon-fb.svg" alt="페이스북" /></button>
        <button><img src="./src/assets/images/icon-yt.svg" alt="유튜브" /></button>
      </div>
    </div>
    <hr />
    <div class="footer-bottom">
      <p><strong>(주)HODU SHOP</strong></p>
      <p>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</p>
      <p>사업자 번호 : 000-0000-0000 | 통신판매업</p>
      <p>대표 : 김호두</p>
    </div>
  `;
  return footer;
}