<template>
  <div id="app">
    <UserCreate v-if="isCreatePage" />
    <UserUpdate v-if="isUpdatePage" />
    <UserList v-if="isListPage" />
  </div>
</template>

<script>
import UserCreate from './components/UserCreate.vue';
import UserList from './components/UserList.vue';
import UserUpdate from './components/UserUpdate.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    UserCreate,
    UserList,
    UserUpdate
  },
  setup() {
    const route = useRoute();

    const isCreatePage = computed(() => route.path === '/');
    const isUpdatePage = computed(() => route.path.startsWith('/update'));
    const isListPage = computed(() => route.path === '/');

    return { isCreatePage, isUpdatePage, isListPage };
  }
};
</script>

<style>
/* Global styles */
</style>
