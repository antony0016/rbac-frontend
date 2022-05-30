import { defineStore } from "pinia";
import router from "../router";
import axios from "../axios";
import Vue from "vue";
import useViewControllerStore from "../store/ViewControllerStore";
import { useStorage } from '@vueuse/core'

const useLoginManagerStore = defineStore('LoginManagerStore', {
  state: () => ({
    user: {
      username: '',
      password: '',
    },
    token: {
      access: useStorage('access', ''),
      refresh: useStorage('refresh', ''),
    },
    address: {
      get_token: 'http://localhost:8000/token/',
      refresh_token: 'http://localhost:8000/token/refresh/',
    },
  }),
  getters: {
    loggedIn: function (state) {
      // use useViewControllerStore's data
      const viewControllerStore = useViewControllerStore();
      viewControllerStore.menuSwitch.isShow = true
      for (let val of viewControllerStore.topBarItems) {
        val['isShow'] = this.token.access != ''
      }
      return state.token.access.length > 0;
      // return true;
    }
  },
  actions: {
    login: function () {
      this.token = { access: "123", refresh: "456" }
      return true;
    }
  }
})

export default useLoginManagerStore;
