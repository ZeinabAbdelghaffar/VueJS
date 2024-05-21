import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async GetProducts() {
      return axios
        .get("http://localhost:3000/products")
        .then((res) => (this.products = res.data))
        .catch((err) => console.log(err));
    },
    async GetProductById(id) {
      return axios
        .get(`http://localhost:3000/products/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
    async DeleteProduct(id) {
      return axios
        .delete(`http://localhost:3000/products/${id}`)
        .then(() => {
          this.GetProducts();
        })
        .catch((err) => console.log(err));
    },
    async AddProduct(title, price, stock) {
      return axios
        .post("http://localhost:3000/products", {
          title,
          price,
          stock,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    async UpdateProduct(id, product) {
      return axios
        .put(`http://localhost:3000/products/${id}`, product)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
};
 