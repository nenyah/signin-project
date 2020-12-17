export const appConfig = {
  tokenKey: "Authorization",
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "http://192.168.0.175:8502/"
      : "http://dev.huadongbio.com:8502//",
  limitRange: 200,
  debug: false,
}
