import { createStore } from 'vuex'

export default createStore({
  state: {
    leuser : ''
  },
  getters: {
    getLeUser(state){
      return state.leuser;
    }
  },
  mutations: {
    setLeUser(state, nom){
      state.leuser = nom
    }
  },
  actions: {
  },
  modules: {
  }
})


//utiliser dans un script avec this.$store (puis acceder aux etters, setters, etc)

