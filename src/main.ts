import Vue from "vue"
import App from "./App.vue"
import api from "@/api"

// #ifdef  MP-ALIPAY
my.getAuthCode({
    scopes: ["auth_user"],
    success: async (res) => {

        if (res.authCode) {
            // 认证成功
            // 调用自己的服务端接口，让服务端进行后端的授权认证，并且利用session，需要解决跨域问题
            const login = await api.user.ddLogin({authCode: res.authCode})
            console.log("login:::", login)
        }
    },
})
// #endif

Vue.config.productionTip = false

new App().$mount()
