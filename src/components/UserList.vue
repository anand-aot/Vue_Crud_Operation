<template>
    <div class="user-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Events</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td colspan="3">Loading...</td>
          </tr>
          <tr v-else-if="users.length === 0">
            <td colspan="3">No users found.</td>
          </tr>
          <tr v-else v-for="{ id, name, email } in users" :key="id">
            <td>{{ name }}</td>
            <td>{{ email }}</td>
            <td class="btn-list">
              <button class="btn" @click="editUser(id)">Edit</button>
              <button class="btn" @click="deleteUser(id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useLoadUsers, deleteUser as firebaseDeleteUser } from '@/firebase';
  import { useRouter } from 'vue-router';
  
  export default {
    setup() {
      const users = useLoadUsers();
      const loading = ref(false);
      const router = useRouter();
  
      const goToCreate = () => {
        router.push('/create');
      };
  
      const editUser = (id) => {
        router.push(`/update/${id}`);
      };
  
      const deleteUser = async (id) => {
        try {
          await firebaseDeleteUser(id);
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      };
  
      return { users, loading, goToCreate, editUser, deleteUser };
    },
  };
  </script>
  
  <style scoped>

    .user-list {
        margin: 30%;
        margin-top: 5%;
        margin-bottom: 50px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th, td {
        padding: 0.5rem;
        border: 2px solid #FF4E88;
        font-family: monospace;
    }

    button {
        margin-right: 0.5rem;
    }

    .btn-list {
        display: flex;
        flex-direction: column;
        gap:5px;
    }

    .btn {
        background-color: #FF8C9E;
    }

    .btn:hover {
        border: 1px solid #FF8225;
        color: #FF8225;
        font-weight: bolder;
    }

  </style>
  