<template>
  <div class="user-table-container">
    <table class="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in users" :key="u.id">
          <td>{{ u.name }}</td>
          <td>{{ u.age }}</td>
          <td>{{ u.role }}</td>
          <td>
            <button @click="$emit('deleteUser', user.id, user.role)" class="delete-button">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['users'],
}
</script>

<style scoped>
.user-table-container {
  overflow-x: auto;
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
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 5px;
}

.delete-button {
  background-color: #e74c3c;
  color: #fff;
}

.delete-button:hover {
  background-color: #c0392b;
}

.edit-button {
  background-color: #3498db;
  color: #fff;
}

.edit-button:hover {
  background-color: #2980b9;
}
</style>