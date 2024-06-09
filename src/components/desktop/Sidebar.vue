<template>
  <div ref="sidebar" class="relative overflow-hidden" :style="{ width: sidebarWidth + 'px' }">
    <div class="flex justify-between h-full">
      <div class="pr-2 flex-grow">
        <div :class="['h-full w-full rounded-md', isLibraryRoute ? 'bg-secondary' : 'text-secondary-foreground']">
          <div @click="navigateToLibrary" class="group flex justify-between items-center select-none hover:text-foreground p-2 cursor-pointer">
            <div class="flex gap-2 items-center">
              <component :is="currentIcon" />
              <p>My Library</p>
            </div>
            <div class="hidden group-hover:flex text-secondary-foreground gap-2">
              <component :is="'MoreIcon'" />
              <component :is="'AddSimpleIcon'" />
            </div>
          </div>
          <component :is="'Move2Icon'" class="cursor-ew-resize text-tertiary absolute top-[50%] right-0" @mousedown.prevent="startResize"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const sidebarWidth = ref(300);
const minSidebarWidth = 250;
const maxSidebarWidth = 500;

const isLibraryRoute = computed(() => route.path === '/library');
const currentIcon = computed(() => isLibraryRoute.value ? 'LibraryFilledIcon' : 'LibraryIcon');

const navigateToLibrary = () => {
  if (!isLibraryRoute.value) {
    router.push('/library');
  }
};

const startResize = (event) => {
  document.body.classList.add('select-none');
  const initialWidth = sidebarWidth.value;
  const startX = event.clientX;

  const doResize = (moveEvent) => {
    moveEvent.preventDefault();
    const currentX = moveEvent.clientX;
    const offset = currentX - startX;
    let newWidth = initialWidth + offset;

    if (newWidth < minSidebarWidth) {
      newWidth = minSidebarWidth;
    } else if (newWidth > maxSidebarWidth) {
      newWidth = maxSidebarWidth;
    }

    sidebarWidth.value = newWidth;
  };

  const stopResize = () => {
    document.body.classList.remove('select-none');
    window.removeEventListener('mousemove', doResize);
    window.removeEventListener('mouseup', stopResize);
  };

  window.addEventListener('mousemove', doResize);
  window.addEventListener('mouseup', stopResize);
};
</script>
