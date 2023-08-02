<template>
  <div>
    <h2>counter{{ this.$store.state.counter }}</h2>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {};
  },
  created() {

  },
  computed: {
    ...mapState(['counter']),
    ...mapState({
      count: state => state.counter
    })
  },
  methods: {

  },
};
</script>

<style scoped  lang="scss">

</style>
