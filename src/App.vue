<template>
  <div id="app">
  Parent counter : {{ getCounter }} <br>
  <button @click="addCounter">+</button>
  <button @click="subCounter">-</button>

  <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props 로 전달한다. -->
  <child></child>
</div>
</template>


<script>
import Child from './Child.vue'
import { mapGetters } from 'vuex'

export default {
  // action
  methods: {
    // 이벤트 추가
    addCounter() {
      this.$store.commit('addCounter', 10); // 상수 10 인자로 전달
    },
    subCounter() {
      this.$store.commit('subCounter'
        , {  // 객체를 인자로 전달
            value: 10,
            arr: ["a", "b", "c"]
          }
      );
    },
  },
  computed: {
    ...mapGetters([
      'getCounter'
    ]),
  },
  components: {
    // Child 컴포넌트를 하위 컴포넌트로 등록
    'child': Child
  }
}
</script>


<style>
</style>
