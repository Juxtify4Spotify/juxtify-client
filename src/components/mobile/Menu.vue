<template>
    <div class="absolute bottom-0 w-full h-32 bg-gradient-to-t from-secondary to-secondary/0">
        <div class="flex text-secondary-foreground px-4 gap-2 w-full h-full items-center">
            <div v-for="item in navItems" :key="item.name"
                class="flex flex-grow select-none transition-all flex-col justify-center items-center"
                :class="{ 'text-foreground': route.path === item.route }" @click="navigate(item.route)"
                @mouseenter="addScale" @touchstart="addScale" @mouseleave="removeScale" @touchend="removeScale"
                @touchcancel="removeScale" :data-navigating="true" :data-path="item.route">
                <component :is="route.path === item.route ? item.iconFilled : item.icon" />
                <p>{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const addScale = (event) => {
    if (event.currentTarget.getAttribute('data-path') !== route.path) {
        event.currentTarget.classList.add('scale-95');
    }
};

const removeScale = (event) => {
    event.currentTarget.classList.remove('scale-95');
};

const navItems = [
    { name: 'Home', icon: 'HomeIcon', iconFilled: 'HomeFilledIcon', route: '/' },
    { name: 'Discover', icon: 'DiscoverIcon', iconFilled: 'DiscoverFilledIcon', route: '/discover' },
    { name: 'Search', icon: 'SearchIcon', iconFilled: 'SearchFilledIcon', route: '/search' },
    { name: 'Library', icon: 'LibraryIcon', iconFilled: 'LibraryFilledIcon', route: '/library' },
    { name: 'Profile', icon: 'UserIcon', iconFilled: 'UserFilledIcon', route: '/profile' }
];

const navigate = (path) => {
    if (route.path !== path) {
        router.push(path);
    }
};
</script>
