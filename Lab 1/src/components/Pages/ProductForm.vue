<template>
  <div class="container">
    <h2 class="form-title">{{ this.id ? "Update" : "Add" }} Product</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" required />
      </div>

      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" id="price" v-model="price" required />
      </div>

      <div class="form-group">
        <label for="qty">Quantity</label>
        <input type="number" id="qty" v-model="qty" required />
      </div>

      <button type="submit">{{ this.id ? "Update" : "Add" }}</button>
    </form>
  </div>
</template>

<script>
import ProductsOperations from '../../../public/Mixins/ProductsOperations';

export default {
  data() {
    return {
      product: {},
      id: '',
      title: '',
      price: 0,
      qty: 0,
      productId: 50,
    };
  },
  mixins: [ProductsOperations],
  created() {
    this.id = this.$route.params.id;
    if (this.id) {
      this.GetProductById(this.id).then((res) => {
        this.product = res;
        this.title = res.title;
        this.price = res.price;
        this.qty = res.stock;
      });
    }
  },
  methods: {
    async handleSubmit() {
      if (this.id) {
        this.handleUpdateProduct();
      } else {
        this.handleAddProduct(); 
      }
    },
    async handleAddProduct() {
      try {
        // Add the product
        const response = await this.AddProduct(this.title, this.price, this.qty);
        // Check if product is added successfully
        if (response.status === 201) {
          // Fetch products again after adding
          await this.GetProducts();
          console.log('Product added successfully!');
        } else {
          console.error('Failed to add product:', response.data);
        }
      } catch (error) {
        console.error(error);
      }
    },
    async handleUpdateProduct() {
      this.product.title = this.title;
      this.product.stock = this.qty;
      this.product.price = this.price;
      try {
        await this.UpdateProduct(this.product.id, this.product);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
  border-bottom: 2px solid #41b883; 
  padding-bottom: 10px; 
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #41b883;
  outline: none;
}

button {
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #41b883;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #35495e;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.user-table th,
.user-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.user-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.user-table button {
  background-color: #41b883;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 5px;
}

.user-table button:hover {
  background-color: #35495e;
}

.user-table .delete-button {
  background-color: #e74c3c;
}

.user-table .delete-button:hover {
  background-color: #c0392b;
}
</style>