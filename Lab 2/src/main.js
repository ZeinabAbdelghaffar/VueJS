import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./Components/Pages/HomePage.vue";
import ProductForm from "./Components/Pages/ProductForm.vue";
import ProductsPage from "./Components/Pages/ProductsPage.vue";
import store from "./Store";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/products",
    component: ProductsPage,
  },
  // {
  //   path:"/products/:id",
  //   component:ProductsPage
  // },
  {
    path: "/add",
    component: ProductForm,
  },
  {
    path: "/products/:id",
    component: ProductForm,
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(store).use(router).mount("#app");
