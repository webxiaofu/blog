import axios from 'axios';
const http = axios.create();

http.interceptors.request.use(request => {
  const token = window.localStorage.getItem('token');
  if (token) {
    // 此处有坑，下方记录
    request.headers['Authorization'] = `Bearer ${token}`;
  }
    return request;
});

// 拦截响应，遇到token不合法则报错
http.interceptors.response.use(
    response => {
        if (response.data.token) {
            window.localStorage.setItem('token', response.data.token);
        }
        return response;
    },
    error => {
        const errRes = error.response;
        if (errRes.status === 401) {

        }
        return Promise.reject(error.message); // 返回接口返回的错误信息
    });
export function gethttp(url, params) {
    return new Promise((resolve, reject) => {
        http.get(url).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    });
}

//封装http的post请求
export function posthttp(url, params) {
    return new Promise((resolve, reject) => {
        http.post(url, params)
            .then(res => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            })
    })
}
export default {
    sendEmailCode(params){
        return posthttp('/v1/users/login/sendcode',params)
    },
    toRegister(params){
        return posthttp('/v1/users/register',params)
    },
    toLogin(params){
        return posthttp('/v1/users/login',params)
    },
    toGetArticles(data1,data2,data3){
        return gethttp(`/v1/articles/getArticles?page=${data1}&pagesize=${data2}&sortId=${data3}`)
    }
}