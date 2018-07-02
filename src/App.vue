<template>
  <div id="app">
  Parent counter : {{ getCounter }} <br>
  <button @click="addCounter(getCounter)">+</button>
  <button @click="subCounter(getObjectValue())">-</button>

  <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props 로 전달한다. -->
  <child></child>
</div>
</template>


<script>
import Child from './Child.vue'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex';

export default {

  // action
  methods: {
    ...mapActions([
      'addCounter'
      , 'subCounter'
    ]),
    getObjectValue: function () {
      var obj = {  // 객체를 인자로 전달
        value: 10,
        arr: ["a", "b", "c"]
      }
      return obj;
    }
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
