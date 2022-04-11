import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

//API
export const API = {
  //로그인
  authLogin: async ({ socialType, socialId }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/member/auth/web/login`,
        JSON.stringify({
          socialType: socialType,
          socialId: socialId,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        return response.data.data;
      } else return false;
    } catch (e) {
      console.log(e);
    }
  },
  //유저 정보 조회
  memberInfo: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/member/info`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (response.status === 200) {
        return response.data.data;
      } else return false;
    } catch (e) {
      console.log(e);
    }
    return false;
  },
  //토큰 재발급
  getAccessUsingRefresh: async ({ accessToken, refreshToken }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/member/auth/reissue`,
        JSON.stringify({
          accessToken: accessToken,
          refreshToken: refreshToken,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        return response.data.data;
      } else return false;
    } catch (e) {
      console.log(e);
    }
  },
  //작가 발행 메일 리스트 조회
  writerGetPublishing: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/writer/publish`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (response.status === 200) {
        return response.data.data;
      } else return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  //작가 임시저장 리스트 조회
  writerGetSaving: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/writer/temp`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (response.status === 200) {
        return response.data.data;
      } else return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  //작가 메일 리딩
  mailReading: async ({ mailId }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/writer/publish/detail?mailId=${mailId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (response.status === 200) {
        return response.data.data;
      } else return false;
    } catch (e) {
      console.log(e);
    }
    return false;
  },
  //작가 메일 임시저장 리딩
  tempMailReading: async ({ tempMailId }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/writer/temp/${tempMailId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (response.status === 200) {
        return response.data.data;
      } else return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  //작가 임시저장
  writerPostSaving: async ({ title, content, preView }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/writer/temp`,
        JSON.stringify({
          title: title,
          content: content,
          preView: preView,
        }),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        return response.data;
      } else return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  writerPostSending: async ({ title, content, preView }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/writer/publish`,
        JSON.stringify({
          title: title,
          content: content,
          preView: preView,
        }),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        return true;
      } else return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  publishImage: async ({ image }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/writer/publish/img`,
        image,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        return response.data;
      } else return false;
    } catch (e) {
      console.log(e);
    }
    return false;
  },
  //작가 메일임시저장 수정
  writerTempSaving: async ({ mailId, title, content, preView }) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/api/v1/writer/temp`,
        JSON.stringify({
          mailId: mailId,
          title: title,
          content: content,
          preView: preView,
        }),
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        return true;
      } else return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
  //작가 메일 임시저장 발행
  writerTempSending: async ({ tempMailId }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/v1/writer/temp/publish?tempMailId=${tempMailId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (response.status !== 200) {
        return false;
      }
      let json = await response.json();
      return json.data;
    } catch (e) {
      console.log(e);
      return false;
    }
  },
};
