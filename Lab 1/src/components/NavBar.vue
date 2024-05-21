<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img :src="logo" alt="Logo" class="navbar-logo">
          Product Control Panel
        </router-link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link">Add Product</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import logo from '@/assets/logo.png';

export default {
  name: 'NavBar',
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: #343a40; 
  padding: 15px 20px;
  position: sticky; 
  top: 0;
  z-index: 1000; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #ffffff; 
  display: flex;
  align-items: center;
}

.navbar-logo {
  height: 40px; /* Adjust the height as needed */
  margin-right: 10px; /* Space between the logo and the text */
}

.navbar-nav {
  display: flex;
  list-style: none;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.nav-item {
  padding: 5px;
}

.nav-link {
  text-decoration: none;
  color: #ffffff; 
  font-size: 18px;
  transition: color 0.3s ease; 
}

.nav-link:hover {
  color: #41b883; 
}
</style>