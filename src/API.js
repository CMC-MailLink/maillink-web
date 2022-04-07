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
        console.log(response.data.data);
        return response.data.data;
      } else return false;
    } catch (e) {
      console.log(e);
    }
  },
  //유저 정보 조회
  memberInfo: async () => {
    console.log("유저정보조회");
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
    console.log("토큰 재발급");
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
      console.log(response);
      if (response.status === 200) {
        return response.data.data;
      } else return false;
      return null;
    } catch (e) {
      console.log(e);
    }
  },
  //작가 발행 메일 리스트 조회
  writerGetPublishing: async () => {
    console.log("작가 발행 메일 리스트 조회");
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
    console.log("작가 임시저장 리스트 조회");
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
    console.log("작가 발행 메일 리딩");
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
};
