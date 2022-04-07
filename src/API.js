const BASE_URL = process.env.REACT_APP_BASE_URL;

//API
export const API = {
  //로그인
  authLogin: async ({ socialType, socialId }) => {
    console.log("로그인");
    console.log(socialType, socialId);
    try {
      const response = await fetch(`${BASE_URL}/api/v1/member/auth/web/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          socialType: socialType,
          socialId: socialId,
        }),
      });
      let json = await response.json();
      if (response.status === 200) {
        return json.data;
      } else return false;
    } catch (e) {
      console.log(e);
    }
    return false;
  },
  //유저 정보 조회
  memberInfo: async ({ accessToken }) => {
    console.log("유저정보조회");
    try {
      const response = await fetch(`${BASE_URL}/api/v1/member/info`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      let json = await response.json();
      return json.data;
    } catch (e) {
      console.log(e);
    }
    return false;
  },
};
