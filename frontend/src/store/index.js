import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const API_HOST = "http://localhost:3000"

export default new Vuex.Store({
  state: {
    token: '',
    id: '',
    role: '',
    notices:[],
    studyNotices:[],
    studyBoards:[]
  },
  getters:{
    id(state) {
      return state.id
    },
    
  },
  //setter
  mutations: {
    id: function (state, payload) {
      state.id = payload;
      console.log("(store/index.js)vuex의 id값:"+state.id)
    },
    logout: (state) => {
      if (state.id) {
        state.id = '';
        alert('로그아웃성공')
      }
    },
    logincheck: function (state) {
      if (state.id) {
        alert('로그인중')
        return true
      }
      else return false
    },
    updateList(state, notices) {
      state.notices = notices
    },
  },
  actions: {
    async fetchNotices({ commit }) {
      const res = await Vue.axios.get(API_HOST+'/notices/notice')
      if (res.data.success === true) commit('updateList', res.data.result)
      // return success/result to action caller
      return res.data
    },
    async appendNotice({}, data) {
      const res = await Vue.axios.post(API_HOST+'/notices/create', data)
      // return success/result to action caller
      return res.data
    },
    async fetchNotice({}, { id }) {
      const res = await Vue.axios.get(API_HOST+`/notices/${id}`)
      // return success/result to action caller
      return res.data
    },
    async updateNotice({}, { id, data }) {
      const res = await Vue.axios.put( API_HOST+`/notices/edit/${id}`, data)
      // return success/result to action caller
      return res.data
    },
    async deleteNotice({}, { id }) {
      const res = await Vue.axios.delete(API_HOST+`/notices/${id}`)
      // return success/result to action caller
      return res.data
    },

    async fetchStudyNotices({commit},{id}) {
      const res = await Vue.axios.get(API_HOST+`/notices/study/${id}/notice`)
      if (res.data.success === true) commit('updateList', res.data.result)
      // return success/result to action caller
      return res.data
    },
    async appendStudyNotice({}, {id,data}) {
      const res = await Vue.axios.post(API_HOST+`/notices/study/${id}/notice/create`, data)
      // return success/result to action caller
      return res.data
    },
    async fetchStudyNotice({}, { id,idx }) {
      const res = await Vue.axios.get(API_HOST+`/notices/study/${id}/notice/detail/${idx}`)
      // return success/result to action caller
      return res.data
    },
    async updateStudyNotice({}, { id, data,idx }) {
      const res = await Vue.axios.put( API_HOST+`/notices/study/${id}/notice/edit/${idx}`, data)
      // return success/result to action caller
      return res.data
    },
    async deleteStudyNotice({}, { id,idx }) {
      const res = await Vue.axios.delete(API_HOST+`/notices/study/${id}/notice/${idx}`)
      // return success/result to action caller
      return res.data
    },

    async fetchStudyBoards({commit},{id}) {
      const res = await Vue.axios.get(API_HOST+`/notices/study/${id}/board`)
      if (res.data.success === true) commit('updateList', res.data.result)
      // return success/result to action caller
      return res.data
    },
    async appendStudyBoard({}, {id,data}) {
      const res = await Vue.axios.post(API_HOST+`/notices/study/${id}/board/create`, data)
      // return success/result to action caller
      return res.data
    },
    async fetchStudyBoard({}, { id,idx }) {
      const res = await Vue.axios.get(API_HOST+`/notices/study/${id}/board/detail/${idx}`)
      // return success/result to action caller
      return res.data
    },
    async updateStudyBoard({}, { id, data,idx }) {
      const res = await Vue.axios.put( API_HOST+`/notices/study/${id}/board/edit/${idx}`, data)
      // return success/result to action caller
      return res.data
    },
    async deleteStudyBoard({}, { id,idx }) {
      const res = await Vue.axios.delete(API_HOST+`/notices/study/${id}/board/${idx}`)
      // return success/result to action caller
      return res.data
    }

  },
  modules: {
  }
})
