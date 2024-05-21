<template>
  <div class="container">
    <h2 class="form-title">{{ id ? "Update" : "Add" }} Product</h2>
    <form action="#" @submit.prevent="id ? HandleUpdateProduct() : HandleAddProduct()" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
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

      <div class="flex items-center justify-between">
        <button type="submit" class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
          {{ id ? "Update" : "Add" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const route = useRoute();
    const id = route.params.id;
    const store = useStore();
    const product = computed(() => store.state.product);
    const title = ref("");
    const price = ref(0);
    const qty = ref(0);
    const productId = ref(50);

    watch(product, (newValue) => {
      title.value = newValue.title;
      price.value = newValue.price;
      qty.value = newValue.stock;
    }, { deep: true });
      
    if (id) {
      onMounted(() => {
        store.dispatch('GetProductById', id);
      });
    }
      
    const HandleAddProduct = () => {
      const newProduct = {
        title: title.value,
        price: price.value,
        stock: qty.value
      };
      store.dispatch("AddProduct", newProduct);
    };
      
    const HandleUpdateProduct = () => {
      product.value.title = title.value;
      product.value.stock = qty.value;
      product.value.price = price.value;
      store.dispatch("UpdateProduct", product.value);
    };
    
    return {
      product,
      id,
      title,
      price,
      qty,
      productId,
      HandleAddProduct,
      HandleUpdateProduct 
    };
  },
}
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
