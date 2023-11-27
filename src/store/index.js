import Vue from 'vue'
import Vuex from 'vuex'
import {getLoginUserAllInfo} from '~/utils/api'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: null,
        context: 'jgpt',
        title: '主页'
    },
    mutations: {
        saveUser(state, data) {
            // 变更状态
            console.log(data);
            state.user = data
        },
        saveContext(state, data) {
            // 变更状态
            state.context = data
        },
        saveTitle(state, data) {
            state.title = data
        }
    },
    getters: {
        getName: state => {
            return state.user.fullname;
        },
        getUserId: state => {
            return state.user.user_id;
        },
        getContext: state => {
            return state.context;
        } ,
        getTitle: state => {
            return state.title;
        }
    },
    actions: {
        async setUser({commit}, param) {
            const data = await getLoginUserAllInfo();
            console.log(data);
            commit('saveUser', data.data[0]);
        },
    }
});

export default store;

