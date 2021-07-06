import http from './libs/request/index'
import {BASE_URL} from "./base"
/* eslint-disable */
// 小程序开发api接口工具包，https://github.com/gooking/wxapi
var API_BASE_URL = 'http://hs.shihaifei.cn:8282/mock/16';
var API_BASE_URL = BASE_URL;



http.setConfig({
    baseUrl: API_BASE_URL,
    // 如果将此值设置为true，拦截回调中将会返回服务端返回的所有数据response，而不是response.data
    // 设置为true后，就需要在http.interceptor.response进行多一次的判断，请打印查看具体值
    // originalData: true, 
    // 设置自定义头部content-type
    header: {
    	'content-type': 'application/json'
    }
})

http.interceptor.request = (config) => {
    // config.header.Token = 'xxxxxx';

    // 方式一，如果token放在了globalData，通过getApp().globalData获取
    // config.header.token = getApp().globalData.username;

    // 方式二，如果token放在了Storage本地存储中，拦截是每次请求都执行的，所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
    const token = wx.getStorageSync('token');//改wx.getStorageSync
    config.header.Token = token;
    // 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
    if(config.url.indexOf('/front/upload')>=0){
        config.header['content-type'] = 'multipart/form-data'
    }
    return config;
}

http.interceptor.response = (res) => {
    //隐藏发起请求
    wx.hideLoading({//改wx.hideLoading
      complete: (res) => {},
    })
    // 如果把originalData设置为了true，这里得到将会是服务器返回的所有的原始数据
    // 判断可能变成了res.statueCode，或者res.data.code之类的，请打印查看结果
    if (res.code == 20000) {
        // 如果把originalData设置为了true，这里return回什么，then回调中就会得到什么
        return res.data;
    } else {
        return false;
    };
}

export default http