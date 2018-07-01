<template>
  <div id="app">
  Parent counter : {{ this.$store.state.counter }} <br>
  <button @click="addCounter">+</button>
  <button @click="subCounter">-</button>

  <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props 로 전달한다. -->
  <child></child>
</div>
</template>

<script>
import Child from './Child.vue'

export default {
  // action
  methods: {
    // 이벤트 추가
    addCounter() {
      this.$store.state.counter++;
    },
    subCounter() {
      this.$store.state.counter--;
    }
  },
  components: {
    // Child 컴포넌트를 하위 컴포넌트로 등록
    'child': Child
  }
}
</script>

<style>

</style>
