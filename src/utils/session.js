// localStorage에 데이터 저장/불러오기 기능
const USER_SESSION_KEY = 'hodu-user';

// 로그인 시 유저 정보를 저장
export function setUserSession(data) {
  localStorage.setItem(USER_SESSION_KEY, JSON.stringify(data));
}

// 저장된 유저 정보를 꺼내오기
export function getUserSession() {
  const json = localStorage.getItem(USER_SESSION_KEY);
  return json ? JSON.parse(json) : null;
}

// 로그아웃 시 세션 초기화
export function clearUserSession() {
  localStorage.removeItem(USER_SESSION_KEY);
}

// 로그인 상태 확인 (access 토큰 존재 여부로 판단)
export function isLoggedIn() {
  return !!getUserSession()?.access;
}