<template>
  <div>
    <hr>
    Child counter : {{ getCounter }} <br>
    <button>+</button>
    <button>-</button>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getCounter'
    ]),
  }
}
</script>


<style>
</style>
