const BASE_URL = process.env.REACT_APP_BASE_URL;

//API
export const API = {
  authLogin: async ({ socialType, socialId }) => {
    console.log("로그인");
    console.log(socialType, socialId);
    try {
      const response = await fetch(`${BASE_URL}/api/v1/member/auth/login`, {
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
      if (json.errorCode === 400) {
        return false;
      }
      if (json.data) {
        async function addToken() {
          try {
            // await AsyncStorage.setItem(
            //   "keys",
            //   JSON.stringify({
            //     access: json.data.accessToken,
            //     refresh: json.data.refreshToken,
            //   })
            // );
          } catch (e) {
            console.log(e);
          }
        }
        addToken();
        return true;
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  },
};
