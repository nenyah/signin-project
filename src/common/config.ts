export const appConfig = {
    tokenKey: 'Authorization',
    apiUrl:
        process.env.NODE_ENV === 'prod'
            ? 'http://192.168.0.175:10002/'
            : 'http://www1.huadongbio.com:10002/',
}
