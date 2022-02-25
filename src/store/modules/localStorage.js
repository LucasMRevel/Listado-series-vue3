
const state = {


}

const mutations = {

}

    
const actions = {
/*
    async tomarGetter({commit, getters, rootState, rootGetters}) {
      commit('TOMAR_SERIE', getters, rootGetters)
      console.info('esta llegando')
    }

    tomarGetter: ({ getters }, payload) => {
      let info = getters.getStateDef(payload)
      
      console.log(info)
    }
    
    tomarGetter: ({commit, getters, rootState, rootGetters}) => {
      commit.getStateDef(getters, rootState, rootGetters)
      console.log('tomarGetter')
    }

    async getCartItems({ commit, getters, rootGetters }) {
      const getStateDef = await getters.getStateDef
      commit('TOMAR_SERIE')
      

      async getCartItems({ commit, getters, rootState, rootGetters }) {

        rootGetters.getStateDef

        commit('TOMAR_SERIE')


      }*/

      /*async obtenerState ({ commit, rootGetters }) {
  
        rootGetters.getStateDef 

        commit('TOMAR_SERIES')
        console.log('llega?') 
      }*/
}

const getters = {
    
    getItem: () => (item) => {
      console.log('llega el item', item)
      const localItem = localStorage.getItem(item);
      if (!localItem) return;
      const data = JSON.parse(localItem);
      if(!data) return;
      return data;

    }
  }

  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }