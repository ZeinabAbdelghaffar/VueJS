<template>
  <div class="container">
    <h2 class="form-title">Register Form</h2>
    <form @submit.prevent="addUser" v-if="!isEditing">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" id="age" v-model="age" required />
      </div>

      <div class="form-group">
        <label for="role">Role</label>
        <select id="role" v-model="role" required>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button type="submit">Add</button>
    </form>

    <form @submit.prevent="updateUser" v-else>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" id="age" v-model="age" required />
      </div>

      <div class="form-group">
        <label for="role">Role</label>
        <select id="role" v-model="role" required>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button type="submit">Update</button>
      <button @click="cancelEdit">Cancel</button>
    </form>

    <div class="buttons">
      <button @click="filterRole('admin')">List Admins</button>
      <button @click="clearFilter">List All</button>
      <button @click="filterRole('user')">List Users</button>
    </div>

    <table class="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in filteredUsers" :key="index">
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
          <td>{{ person.role }}</td>
          <td>
            <button @click="editUser(index)">Edit</button>
            <button @click="deleteUser(index)" class="delete-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      role: 'user',
      users: [],
      filteredUsers: [],
      filter: '',
      isEditing: false,
      currentIndex: -1,
    };
  },
  methods: {
    addUser() {
      const newUser = {
        name: this.name,
        age: this.age,
        role: this.role,
      };
      this.users.push(newUser);
      this.resetForm();
      this.applyFilter();
    },
    editUser(index) {
      const user = this.users[index];
      this.name = user.name;
      this.age = user.age;
      this.role = user.role;
      this.isEditing = true;
      this.currentIndex = index;
    },
    updateUser() {
      const updatedUser = {
        name: this.name,
        age: this.age,
        role: this.role,
      };
      this.users.splice(this.currentIndex, 1, updatedUser);
      this.resetForm();
      this.isEditing = false;
      this.currentIndex = -1;
      this.applyFilter();
    },
    cancelEdit() {
      this.resetForm();
      this.isEditing = false;
      this.currentIndex = -1;
    },
    deleteUser(index) {
      this.users.splice(index, 1);
      this.applyFilter();
    },
    filterRole(role) {
      this.filter = role;
      this.applyFilter();
    },
    clearFilter() {
      this.filter = '';
      this.applyFilter();
    },
    applyFilter() {
      if (this.filter) {
        this.filteredUsers = this.users.filter(user => user.role === this.filter);
      } else {
        this.filteredUsers = this.users;
      }
    },
    resetForm() {
      this.name = '';
      this.age = '';
      this.role = 'user';
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