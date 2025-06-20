// 아이디 형식, 비밀번호 유효성 등 입력값 검증 기능
export function validatePasswordMatch(pw1, pw2) {
  return pw1 === pw2;
}

export function validateRequiredTerms(checkbox) {
  return checkbox.checked;
}

export function validateLoginInput(id, pw) {
  if (!id) return '아이디를 입력해주세요.';
  if (!pw) return '비밀번호를 입력해주세요.';
  return null;
}