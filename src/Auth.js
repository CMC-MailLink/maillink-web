import Cookies from "universal-cookie";
const cookies = new Cookies();

export function setRefreshTokenToCookie(refreshToken) {
  const today = new Date();

  const expireDate = today.setDate(today.getDate() + 7);

  cookies.set("refreshToken", refreshToken, {
    sameSite: "strict",
    expires: new Date(expireDate),
    httpOnly: false,
  });
}

export function logout() {
  console.log("localStorage set logout!");
  window.localStorage.setItem("logout", Date.now());
  cookies.remove("refreshToken");
}

export const getCookieToken = () => {
  return cookies.get("refreshToken");
};

export const removeCookieToken = () => {
  return cookies.remove("refreshToken", { sameSite: "strict" });
};
