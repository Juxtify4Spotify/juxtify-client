<template>
  <div class="hidden lg:flex p-2 h-screen">
    <Sidebar></Sidebar>
    <div class="flex flex-col flex-1">
      <Menu></Menu>

      <div class="w-full h-full rounded-md outline -outline-offset-1 outline-1 outline-tertiary"></div>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Menu,
    Sidebar
  },
};
</script>
