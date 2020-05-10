export default {
    SET_PERSONAL_INFO (state,data){
        state.personalInfo.user = null
        state.personalInfo.user = data
        state.personalInfo.islogin = true
    },
    SET_LOGIN_OUT (state,data){
        state.personalInfo.user = '',
        state.personalInfo.islogin = false
    }

}