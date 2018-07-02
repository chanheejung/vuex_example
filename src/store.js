// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  // counter 라는 state 속성을 추가
  state: {
    counter: 0
  },
  getters: {
    getCounter: function (state) {
      return state.counter;
    }
  },
  mutations: {
    addCounter: function (state, payload) {
      console.log("parameter is" + payload);
      return state.counter++;
    },
    subCounter: function (state, payload) {
      console.log("parameter is " + payload.value + " & " + payload.arr);
      return state.counter--;
    }
  },
  actions: {
    addCounter: function (context, payload) {
      // commit 의 대상인 addCounter 는 mutations 의 메서드를 의미한다.
      return context.commit('addCounter', payload);
    },
    subCounter: function (context, payload) {
      // commit 의 대상인 addCounter 는 mutations 의 메서드를 의미한다.
      return context.commit('subCounter', payload);
    },
    /* 아래 로직은 본 기능과 관련 없다.
      단지, Actions의 비동기 HTTP 처리와 setTimeout과
      같은 비동기 처리 로직을 보여 준다. */
    getServerData: function (context) {
      return axios.get("sample.json").then(function() {
        // 비동기 처리 로직 ...
      });
    },
    delayFewMinutes: function (context) {
      return setTimeout(function () {
        commit('addCounter');
      }, 1000);
    }
  }
});
