
import Vue from 'vue' ;
import Vuex from 'vuex';

Vue.use(Vuex);

const store=new Vuex.Store({
    state:{
        lang:'en'
    },
    getters:{
        getLang(state){
            return state.lang;
        },
    },
    mutations: {
        setLang(state,data){
            state.lang=data;
        }
    }

});

export default store ;