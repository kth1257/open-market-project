// 로그인, 회원가입, 유저 정보 불러오기 등 유저 관련 기능
export async function signupBuyer({ username, password, name, phone_number }) {
  const res = await fetch('https://api.wenivops.co.kr/accounts/buyer/signup/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, name, phone_number }),
  });

  const data = await res.json();
  
  if (!res.ok) throw data;
  return data;
}

export async function loginUser({ username, password }, userType = 'BUYER') {
  const url =
    userType === 'BUYER'
      ? 'https://api.wenivops.co.kr/accounts/login/'
      : 'https://api.wenivops.co.kr/accounts/seller/login/';

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();

  if (!res.ok) throw data;
  return data; // { user_type, access_token, ... }
}