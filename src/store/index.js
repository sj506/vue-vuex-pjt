import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      count: 0,
      Boolean: false,
      booleanNumber: 0,
      cart: [
        {
          product_id: 1,
          product_name: "아이폰 거치대",
          category: "A",
        },
      ],
    };
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    },
  },
  mutations: {
    increment(state) {
      this.state.count++;
    },
    changeBoolean(state) {
      // this.state.Boolean++;
      this.state.Boolean = !this.state.Boolean;
    },
    changeNumber(state) {
      // this.state.Boolean++;
      this.state.booleanNumber = Math.abs(this.state.booleanNumber - 1);
    },
    setCount(state, val) {
      state.count = val;
    },
  },
  actions: {},
  modules: {},
});
