import Vue from 'vue'
import uuidv4 from 'uuid/v4'
const state = {
  all: {},
  allIds: [],
  allMsgIds: []
}
const mutations = {
  
}
const actions = { 
  seed ({ rootState }) {
    let convoRef = rootState.db.collection('conversations')
    convoRef.add({
      created: Date.now(),
      users: ['mr_a', 'mr_b'],
      messages: [
        { id: uuidv4(), text: 'Hi there', sender: 'mr_a', created: Date.now() },
        { id: uuidv4(), text: 'Hi to you too!', sender: 'mr_b', created: Date.now() }
      ]
    })
    convoRef.add({
      created: Date.now(),
      users: ['mr_a', 'mr_c'],
      messages: []
    })
  }
}
export default { namespaced: true, state, mutations, actions }