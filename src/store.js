import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.devtools = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  // Keeping it all together for now :)
  // https://vuex.vuejs.org/guide/structure.html

  state: {
    stupidButtonState : false,
    msg : 'Thanos did nothing wrong!',
    isCompactPostView : false
  },

  getters : {
    getStupidButtonState(state){
      return state.stupidButtonState
    },
    getMsg(state){
      return state.msg
    },
    getIsCompactPostView(state){
      return state.isCompactPostView
    }
  },

  // You don't access mutation directly.. use store.commit(type, payload)
  // https://vuex.vuejs.org/guide/mutations.html
  // mutations are synchronous transactions
  // To handle asynchronous operations, Actions are used..
  mutations: {
    changeStupidButtonState(state){
      state.stupidButtonState = !state.stupidButtonState
    },
    setMsg(state, payload){ // {msg: ' Sup ?'}
      state.msg = payload.msg
    },
    changePostView(state){
      state.isCompactPostView = !state.isCompactPostView
    }
  },
  
  // Actions are triggered with the store.dispatch method
  // https://vuex.vuejs.org/guide/actions.html
  actions: {

    changeStupidButtonState({commit}){
      commit("changeStupidButtonState"); // refers to mutation
    },

    setMsg({commit}, payload){ // we need payload.msg 
      commit('setMsg', payload)
    },
    // We use it like 
    // store.dispatch({
    //   type: 'setMsg',
    //   payload: {msg : ' This is new message' }
    // })

    changePostView({commit}){
      commit("changePostView")
    }
  }
})
