<template>
  <div class="hidden lg:flex p-2 h-screen">
    <SidebarDesktop></SidebarDesktop>
    <div class="flex flex-col flex-1">
      <MenuDesktop></MenuDesktop>

      <div class="w-full h-full rounded-md outline -outline-offset-1 outline-1 outline-tertiary"></div>
    </div>
  </div>
  <div class="flex lg:hidden h-screen">
    <MenuMobile></MenuMobile>
  </div>
</template>

<script>
import MenuDesktop from './components/desktop/Menu.vue';
import SidebarDesktop from './components/desktop/Sidebar.vue';

import MenuMobile from './components/mobile/Menu.vue';

export default {
  components: {
    MenuDesktop,
    SidebarDesktop,
    MenuMobile
  },
};
</script>
