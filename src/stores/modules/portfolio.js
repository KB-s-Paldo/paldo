// import { loginUser, 
//     updateMyInfo } from '@/api/user.js'


const state = {
    isPort:false
};

const mutations = {
    setPortStatus(state,newValue){
        // console.log('포폴유무 업데이트 전',state.isPort, newValue)
        state.isPort = newValue;
        // console.log('포폴유무 업데이트 후',state.isPort)
    }
}

const actions = {

    // async PASSWORDCONFIRM({ commit }, userData) {
    //     const response = await loginUser(userData)
    //     if (response.data['auth-token']) {
    //         commit('confirmComplete')
    //         commit('setToken', response.data['auth-token'])
    //     } else {
    //         commit('loginError')
    //     }
    //     return response
    // },


};

const getters = {
    
    // fetchedUserInfo(state) {
    //     return state.userInfo
    // },
}

export default {
    state,
    mutations,
    getters,
    actions
}
