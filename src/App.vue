<template>
  <div>{{ count }}</div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  // action
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>

<style>

</style>
