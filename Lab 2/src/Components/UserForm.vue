<template>
  <div class="container">
    <div class="form-title">Specify your role</div>
    <form @submit.prevent="$emit('addUser', name, age, role)" class="space-y-4">
      <div class="form-group">
        <label for="name">Name</label>
        <div>
          <input
            v-model.lazy.trim="name"
            type="text"
            class="rounded-lg"
            placeholder="Enter name"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <div>
          <input
            v-model.lazy.trim="age"
            type="number"
            class="rounded-lg"
            placeholder="Enter age"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="role">Role</label>
        <select
          v-model="role"
          name="role"
          id="role"
          class="rounded-lg"
        >
          <option value="">Please select</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>
      <div class="buttons">
        <button type="submit" class="rounded-lg">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: 0,
      role: "",
    }
  }, 
  emits:['addUser'],
  props: ["users", "admins"]
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

.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  margin-right: 10px;
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
</style>
