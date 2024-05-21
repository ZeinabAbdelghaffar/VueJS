<template>
  <div class="user-table-container">
    <table class="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Role</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="u in admins" :key="u.id">
          <td>{{ u.name }}</td>
          <td>{{ u.age }}</td>
          <td>{{ u.role }}</td>
          <td>
            <button
              @click="$emit('deleteUser', u.id, u.role)"
              class="delete-button"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['admins']
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
  background-color: #e74c3c;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-right: 5px;
}

.user-table button:hover {
  background-color: #c0392b;
}
</style>