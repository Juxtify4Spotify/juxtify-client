<template>
    <div class="absolute bottom-0 w-full h-32 bg-gradient-to-t from-secondary to-secondary/0">
        <div class="flex text-secondary-foreground px-4 gap-2 w-full h-full items-center">
            <div v-for="item in navItems" :key="item.name"
                class="flex flex-grow select-none hover:cursor-pointer flex-col justify-center items-center"
                @click="navigate(item.route)">
                <component :is="route.path === item.route ? item.iconFilled : item.icon" />
                <p>{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

import Home from '/src/assets/icons/home.svg';
import HomeFilled from '/src/assets/icons/home-filled.svg';
import Discover from '/src/assets/icons/discover.svg';
import DiscoverFilled from '/src/assets/icons/discover-filled.svg';
import Search from '/src/assets/icons/search.svg';
import SearchFilled from '/src/assets/icons/search-filled.svg';
import Library from '/src/assets/icons/library.svg';
import LibraryFilled from '/src/assets/icons/library-filled.svg';
import User from '/src/assets/icons/user.svg';
import UserFilled from '/src/assets/icons/user-filled.svg';

const route = useRoute();
const router = useRouter();

const navItems = [
    { name: 'Home', icon: Home, iconFilled: HomeFilled, route: '/' },
    { name: 'Discover', icon: Discover, iconFilled: DiscoverFilled, route: '/discover' },
    { name: 'Search', icon: Search, iconFilled: SearchFilled, route: '/search' },
    { name: 'Library', icon: Library, iconFilled: LibraryFilled, route: '/library' },
    { name: 'Profile', icon: User, iconFilled: UserFilled, route: '/profile' }
];

const navigate = (path) => {
    if (route.path !== path) {
        router.push(path);
    }
};
</script>
