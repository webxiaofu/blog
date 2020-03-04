import axios from 'axios';
import store from '../store/store'
const http = axios.create();

http.interceptors.request.use(request => {
  const token = window.localStorage.getItem('token');
  if (token && store.state.personalInfo.islogin) {
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
        return Promise.reject(errRes); // 返回接口返回的错误信息
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
    },
    toGetUserInfo(data1){
        return gethttp(`/v1/users/findAllUsers?id=${data1}`)
    },
    toCreateArticles(params){
        return posthttp('/v1/articles/createArticle',params)
    },
    toGetArticleInfo(params){
        return gethttp(`/v1/articles/getArticleInfoById?id=${params}`)
    },
    toAddComments(params){ //提交评论
        return posthttp('/v1/comments/addComments',params)
    },
    /* toAddComments(params){ //提交评论
        return axios({
            url: '/v1/comments/addComments',
            method: 'post',
            data: params
        })
    }, */
    
    togetComments(data1,data2,data3){ //获取评论
        return gethttp(`/v1/comments/getCommentsById?id=${data1}&page=${data2}&pagesize=${data3}`)
    },
    todeleteComments(params){ //删除评论
        return posthttp('/v1/comments/deleteComments',params)
    },
    toaddReadCount(data1){ //监听文章阅读数的接口
        return gethttp(`/v1/articles/addReadCount?id=${data1}`)
    },
    togetUserArticles(data1,data2,data3){ //获取用户 发布的文章信息
        return gethttp(`/v1/articles/findArticleByUid?uid=${data1}&page=${data2}&pagesize=${data3}`)
    },
    todeleteArticles(data1,data2){ //删除文章
        return gethttp(`/v1/users/deleteArticle?uid=${data1}&aid=${data2}`)
    },
    tofocusonOther(params){ //关注他人接口
        return posthttp('/v1/users/FocusOnOthers',params)
    },
    toupdateUserInfo(params){ //修改个人信息
        return posthttp('/v1/users/updateUserInfo',params)
    }
}