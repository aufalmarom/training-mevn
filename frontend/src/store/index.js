import { createStore } from 'vuex'
import axios from 'axios';
import router from '../router';

export default createStore({
  state: {
    breadcrumb:  [
      {
        text: 'Landing Page',
        disabled: true,
      }
    ],
    alertSuccess: {
      title: "Success",
      show: false
    },
    alertError: {
      title: "Error",
      show: false
    },
    project: null,
    projectEdit: null,
    page:0,
    totalPage:null,
    limit:10,
    searchTitle:'',
    token:null,
  },
  getters: {
    breadcrumb: (state) => {
      return state.breadcrumb;
    },
    alertSuccess: (state) => {
      return state.alertSuccess;
    },
    projectEdit: (state) => {
      return state.projectEdit;
    },
    alertError: (state) => {
      return state.alertError;
    },
    project:(state)=>{
      return state.project
    },
    token:(state)=>{
      return state.token
    },
    getTotalPage:(state)=>{
      return state.totalPage
    }
  },
  mutations: {
    setBreadCrumb: (state, breadcrumb) => {
      state.breadcrumb = breadcrumb;
    },
    setAlertSuccess: (state, data) => {
      state.alertSuccess = data;
    },
    setAlertError: (state, data) => {
      state.alertError = data;
    }, 
    setToken: (state, data) => {
      state.token = data;
    }, 
    setPage: (state, data) => {
      state.page = data;
    },
    setLimit: (state, data) => {
      state.limit = data;
    },
    setSearchTitle: (state, data) => {
      state.searchTitle = data;
    },
  },
  actions: {
    async DeleteProject({commit,state}, id){
      await axios.delete(`http://localhost:5000/v1/api/projects/${id}`,{
        headers:{
        'Authorization': `Bearer ${state.token}`
      }}).then((response)=>{
        state.project = response.data;
        commit("setAlertSuccess",{
          title: "Berhasil Menghapus Data",
          show: true
        })
      })
    },
    async UpdateProject({commit, state},data){
      await axios.patch(`http://localhost:5000/v1/api/projects/${data.id}`,data, {
        headers:{
        'Authorization': `Bearer ${state.token}`
      }}).then((response)=>{
        state.project = response.data.data
        state.totalPage = response.data.totalPage
        
        router.push('/project')
        commit("setAlertSuccess",{
          title: "Berhasil update data",
          show: true
        }).catch(err=> console.log(err))
      })
    },
    async GetProjectManagement({state}){
      await axios.get(`http://localhost:5000/v1/api/projects/management`,{
        headers:{
        'Authorization': `Bearer ${state.token}`
      }}).then((response)=>{
        state.project = response.data
      })
    },
    async GetProjectLanding({state}){
      await axios.get(`http://localhost:5000/v1/api/projects/landing`).then((response)=>{
        state.project = response.data
      })
    },
    async GetProjectById({state},id){
      await axios.get(`http://localhost:5000/v1/api/projects/${id}`,{
        headers:{
        'Authorization': `Bearer ${state.token}`
      }}).then((response)=>{
        state.projectEdit = response.data
      })
    },
    async Login({commit}, data) {
      await axios.post('http://localhost:5000/v1/api/login',data).then((response)=>{
          localStorage.setItem("user", response.data.token);
          commit("setToken",response.data.token)
          commit("setAlertSuccess",{
            title: "Berhasil login",
            show: true
          })
          router.push('/dashboard')
      })
      .catch((error) => {
        console.log(error);
      });
    },
    async Logout({commit}){
      await axios.post('http://localhost:5000/v1/api/logout',{
          token: localStorage.getItem("user")
        }).then(()=>{
          localStorage.removeItem("user");
          commit("setAlertSuccess",{
            title: "Berhasil Logout",
            show: true
          })
          commit("setToken",null)
          router.push('/')
      }).catch((error) => {
        console.log(error);
      })
    },
    async CreateProject({commit, state}, data){
      await axios.post('http://localhost:5000/v1/api/projects',data,{
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${state.token}`
        },
      }).then((response)=>{
        commit("setAlertSuccess",
          {
            title: 'Berhasil disimpan',
            show: true,
          },
        );
        state.project = response.data;
      })
    },
  },
  modules: {
  }
})
