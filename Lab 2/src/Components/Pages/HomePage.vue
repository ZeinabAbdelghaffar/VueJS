<template>
  <user-form @addUser="addUser"></user-form>
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="hidden sm:block">
      <div class="flex gap-6" aria-label="Tabs">
        <button
          @click="toggle('UsersTable')"
          :class=" flag == 'UsersTable'?'bg-gray-300 text-gray-700': ''"
          class="shrink-0 rounded-lg p-5 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700"
        >User</button>
        <button
          @click="toggle('AdminTable')"
          :class=" flag == 'AdminTable'?'bg-gray-300 text-gray-700': ''"
          class="shrink-0 rounded-lg p-5 text-sm font-medium text-gray-500 hover:bg-gray-300 hover:text-gray-700"
        >Admin</button>
      </div>
    </div>
    <div class="mb-24">
      <component :is="flag" @deleteUser="deleteUser" :users="users" :admins="admins"/>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AdminTable from '../Slots/AdminTable.vue';
import UsersTable from '../Slots/UsersTable.vue';
import UserForm from "../UserForm.vue";
import { users } from "./usersData.js"; 
import { admins } from "./adminsData.js"; 

  export default {
    components: {
      UserForm,
      UsersTable,
      AdminTable
    },
    setup() {
      let id = 11;
      let flag = ref("UsersTable");
      let deleteUser = (id, role) => {
        if(role == "user") {
          users.value = users.value.filter(u => u.id !== id);
        } else if(role == "admin") {
          users.value = users.value.filter(u => u.id !== id);
        }
      }
      let addUser = (name, age, role) => {
        const newUser = {
            id: id++,
            name,
            age,
            role,
          }
        if(role == "admin") {
          admins.value.push(newUser)
        } else if (role == "user") {
          users.value.push(newUser)
        }
      }
      let toggle = (name) => {
        flag.value = name
      }
      return {
        id, flag, users, admins, deleteUser, addUser, toggle
      }
  }
}
</script>