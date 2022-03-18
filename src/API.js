const BASE_URL = "http://52.79.226.129:8080/";

//API
export const API = {
  //이미지 업로드
  imageEditing: async ({ image }) => {
    console.log("profileEditing api : ", image);
    try {
      const response = await fetch(
        `${BASE_URL}api/v1/member/auth/signup/profile/img`,
        {
          method: "post",
          body: image,
          headers: { "Content-Type": "multipart/form-data" },
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
