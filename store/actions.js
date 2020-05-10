
import api from '../api/api'
export default {
    getNewVuexUserData({commit},data){
        api.toGetUserInfo(data).then((result) => {
            if(result.data.status == '1'){
                commit('SET_PERSONAL_INFO',result.data.users[0])
            }
        });
    }
        
}