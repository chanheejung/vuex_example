<template>
  <div>
    <hr>
    Child counter : {{ passedCounter }} <br>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
export default {
  // Parent 에서 넘겨준 counter 속성을 passedCounter 로 받음
  props: ['passedCounter']
}
</script>

<style>

</style>
