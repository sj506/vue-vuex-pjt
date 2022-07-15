<template>
  <div>
    <p>Count : {{ count }}</p>
    <button type="button" @click="increment">increment</button>
    <p>Boolean : {{ _Boolean }}</p>
    <button type="button" @click="changeBoolean">Boolean</button>
    <p>0 or 1 : {{ booleanNumber }}</p>
    <button type="button" @click="changeNumber">0 or 1</button>
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
    booleanNumber() {
      return this.$store.state.booleanNumber;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    changeBoolean() {
      this.$store.commit("changeBoolean");
    },
    changeNumber() {
      this.$store.commit("changeNumber");
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
