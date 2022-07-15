<template>
  <div>
    <p>Count : {{ count }}</p>
    <button type="button" @click="increment">increment</button>
    <p>cartCount : {{ cartCount }}</p>
    <p>itemNm : {{ cart[0].product_name }}</p>
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
    cart() {
      return this.$store.state.cart;
    },
    cartCount() {
      return this.$store.getters.cartCount;
    },
  },
  methods: {
    increment() {
      // this.$store.state.count = 100;
      this.$store.commit("setCount", 200);
      // this.$store.commit("increment");
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
