// URL의 hash값(#login, #/products/1)을 읽고,거기에 맞는 페이지 컴포넌트를 불러와 app에 렌더링함
// hashchange, load 이벤트를 사용

import LoginPage from '../pages/LoginPage.js';
import SignupPage from '../pages/SignupPage.js';
import ProductsListPage from '../pages/ProductListPage.js';

const routes = {
  '/' : ProductsListPage,
  '/login' : LoginPage,
  '/signup' : SignupPage,
};

export default async function router() {
  const app = document.querySelector('.app');
  const path = location.hash.replace('#', '') || '/';
  const renderPage = routes[path];

   if (renderPage) {
    app.innerHTML = '';
    await renderPage();
  } else {
    app.innerHTML = '<h1>404 - 페이지를 찾을 수 없습니다</h1>';
  }
}