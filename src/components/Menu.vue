<template>
    <div class="h-16 pb-2 flex justify-between gap-2">
        <div class="flex flex-grow">
            <div v-for="item in navItems" :key="item.label"
                :class="['flex h-full gap-2 rounded-md w-full min-w-44 max-w-72 items-center hover:text-foreground p-2', 
                        isRouteActive(item.path) ? 'bg-secondary' : 'text-secondary-foreground']"
                @click="navigate(item.path)">
                <component :is="getIconComponent(item)" />
                <p>{{ item.label }}</p>
            </div>
        </div>
        <div class="flex items-center gap-2 h-full">
            <News class="text-secondary-foreground"/>
            <Private class="text-secondary-foreground"/>
            <Friends class="text-secondary-foreground"/>
            <Settings class="text-secondary-foreground"/>
            <User class="text-secondary-foreground"/>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import Home from '/src/assets/icons/home.svg';
import HomeFilled from '/src/assets/icons/home-filled.svg';
import Discover from '/src/assets/icons/discover.svg';
import DiscoverFilled from '/src/assets/icons/discover-filled.svg';
import Search from '/src/assets/icons/search.svg';
import SearchFilled from '/src/assets/icons/search-filled.svg';
import News from '/src/assets/icons/news.svg';
import Private from '/src/assets/icons/private.svg';
import Friends from '/src/assets/icons/friends.svg';
import Settings from '/src/assets/icons/settings.svg';
import User from '/src/assets/icons/user.svg';

const route = useRoute();
const router = useRouter();

const navItems = [
    { path: '/', label: 'Home', icon: Home, iconFilled: HomeFilled },
    { path: '/discover', label: 'Discover', icon: Discover, iconFilled: DiscoverFilled },
    { path: '/search', label: 'Search', icon: Search, iconFilled: SearchFilled }
];

const isRouteActive = (path) => route.path === path;

const getIconComponent = (item) => isRouteActive(item.path) ? item.iconFilled : item.icon;

const navigate = (path) => {
    if (route.path !== path) {
        router.push(path);
    }
};
</script>
