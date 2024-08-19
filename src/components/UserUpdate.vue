<template>
    <div class="card card-body">
      <h1>Update User</h1>
      <form @submit.prevent="updateUser">
        <div class="form-group">
          <input class="form-control" type="text" v-model="selectedUser.name" placeholder="Enter Name" required />
        </div>
        <div class="form-group">
          <input class="form-control" type="email" v-model="selectedUser.email" placeholder="Enter Email" required />
        </div>
        <div class="flex-btn">
        <button class="btn btn-main" type="submit" :disabled="loading">Update</button>
        <button class="btn btn-home"><a href="/">Home</a></button>
        </div>
        <div v-if="loading" class="spinner"></div>
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getUser, updateUser as firebaseUpdateUser } from '@/firebase';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    setup() {
      const selectedUser = ref({ name: '', email: '' });
      const loading = ref(false);
      const error = ref('');
      const route = useRoute();
      const router = useRouter();
      
      const loadUser = async () => {
        loading.value = true;
        try {
          const user = await getUser(route.params.id);
          if (user) {
            selectedUser.value = { id: route.params.id, ...user };
          }
        } catch (err) {
          error.value = 'Error loading user data.';
          console.error('Error:', err);
        } finally {
          loading.value = false;
        }
      };
      
      onMounted(loadUser);
  
      const updateUser = async () => {
        loading.value = true;
        try {
          await firebaseUpdateUser(selectedUser.value.id, {
            name: selectedUser.value.name,
            email: selectedUser.value.email,
          });
          router.push('/');
        } catch (err) {
          error.value = 'Error updating user.';
          console.error('Error:', err);
        } finally {
          loading.value = false;
        }
      };
  
      return { selectedUser, updateUser, loading, error };
    }
  };
  </script>
  
  <style scoped>

        .card-body {
            margin: 30%;
            margin-top: 5%;
            margin-bottom: 50px;
        }
        
        h1 {
            text-align: center;
            font-weight: bolder;
            font-size: 40px;
            font-family: monospace;
            color: #FF4E81;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        button {
            width: 100%;
            font-family: monospace;
            font-weight: bolder;
        }

        .btn-main {
            background-color: #FF8C9E;
        }
        
        .card-body {
            background-color: #B4D6CD;
            filter: drop-shadow(2px 4px 8px #FF4E88);
            transition: background-color 0.3s ease, filter 0.3s ease;
            padding: 1rem;
            border-radius: 8px;
        }
        
        .card-body:hover {
            background-color: #d1ecf1;
            filter: drop-shadow(2px 4px 8px rgb(18, 164, 205));
        }

        .btn:hover {
            border: 1px solid #FF8225;
            color: #FF8225;
            font-weight: bolder;
        }
        
        .spinner {
            margin: 20px auto;
            width: 40px;
            height: 40px;
            border: 4px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
            border-top: 4px solid #007bff;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .error {
            color: red;
            text-align: center;
            margin-top: 10px;
        }

        a{
            text-decoration: none;
            color: black;
        }

        .flex-btn {
            display: flex;
            flex-direction: row;
            gap: 10px;
        }

        .btn-home {
            background-color: #FF8C9E;
        }

        .form-control:hover {
            filter: drop-shadow(2px 4px 8px grey);
        }

  </style>
  