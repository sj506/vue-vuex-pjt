<template>
  <div>
    <h1>HelloWorld</h1>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  computed: {
    count() {
      return this.$store.state.count;
    },
    _Boolean() {
      return this.$store.state.Boolean;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    changeBoolean() {
      this.$store.commit("changeBoolean");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
