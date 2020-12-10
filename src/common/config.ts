export const appConfig = {
    tokenKey: "Authorization",
    apiUrl:
        process.env.NODE_ENV === "production"
            ? "http://192.168.0.175:10002/"
            : "http://www1.huadongbio.com:10002/",
    limitRange: 200,
    debug:  false,
}
