const BASE_URL = process.env.REACT_APP_BASE_URL;

//API
export const API = {
  //이미지 업로드
  imageEditing: async ({ image }) => {
    console.log("profileEditing api : ", image);
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/member/auth/signup/profile/img`,
        {
          method: "post",
          body: image,
          redirect: "follow",
        }
      );
      if (response.ok) {
        let json = await response.json();
        return json.data;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  },
};
