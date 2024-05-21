import axios from "axios";
import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      products: [],
      product: {},
    };
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products;
    },
    GET_PRODUCT(state, product) {
      state.product = product;
    },
    DELETE_PRODUCT(state, id) {
      state.products = state.products.filter((product) => product.id != id);
    },
  },
  actions: {
    GetProducts({ commit }) {
      axios
        .get("http://localhost:3000/products")
        .then((res) => commit("GET_PRODUCTS", res.data))
        .catch((err) => console.log(err));
    },
    GetProductById({ commit }, id) {
      axios
        .get(`http://localhost:3000/products/${id}`)
        .then((res) => commit("GET_PRODUCT", res.data)) // Set the selected product
        .catch((err) => console.log(err));
    },
    // eslint-disable-next-line no-unused-vars
    DeleteProduct({ commit }, id) {
      axios
        .delete(`http://localhost:3000/products/${id}`)
        .then(() => commit("DELETE_PRODUCT", id))
        .catch((err) => console.log(err));
    },
    // eslint-disable-next-line no-unused-vars
    AddProduct({ commit }, product) {
      const { title, price, stock } = product;
      axios
        .post("http://localhost:3000/products", {
          title,
          price,
          stock,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    // eslint-disable-next-line no-unused-vars
    UpdateProduct({ commit }, product) {
      axios
        .put(`http://localhost:3000/products/${product.id}`, product)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
  getters: {},
});

export default store;
