const state = {
    all: {},
    currentUser: 'mr_a'
  }
  const mutations = {
  }
  const actions = {
    seed ({ rootState }) {
      let userRef = rootState.db.collection('users')
      userRef.doc('mr_a').set({
        firstName: 'Andy',
        lastName: 'Andyson'
      })
      userRef.doc('mr_b').set({
        firstName: 'Ben',
        lastName: 'Benson'
      })
      userRef.doc('mr_c').set({
        firstName: 'Cee',
        lastName: 'Ceeson'
      })
    }
  }
  export default { 
    namespaced: true, state, mutations, actions
  }