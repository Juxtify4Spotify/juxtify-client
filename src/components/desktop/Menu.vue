<template>
    <div class="h-16 pb-2 flex justify-between gap-2">
        <div class="flex flex-grow">
            <div :class="['flex h-full gap-2 rounded-md w-full select-none min-w-30 max-w-72 hover:cursor-pointer items-center hover:text-foreground p-2', route.path === '/' ? 'bg-secondary' : 'text-secondary-foreground']"
                @click="navigate('/')">
                <component :is="route.path === '/' ? HomeFilled : Home" />
                <p>Home</p>
            </div>
            <div :class="['flex h-full gap-2 rounded-md w-full select-none min-w-30 max-w-72 hover:cursor-pointer items-center hover:text-foreground p-2', route.path === '/discover' ? 'bg-secondary' : 'text-secondary-foreground']"
                @click="navigate('/discover')">
                <component :is="route.path === '/discover' ? DiscoverFilled : Discover" />
                <p>Discover</p>
            </div>
            <div class="group flex h-full rounded-md w-full select-none min-w-56 max-w-72 hover:cursor-pointer items-center hover:text-foreground p-2"
                :class="route.path === '/search' ? 'bg-secondary' : 'text-secondary-foreground'"
                @click="handleSearchClick">
                <component :is="route.path === '/search' ? SearchFilled : Search" />
                <input ref="searchInput" type="text"
                    :placeholder="route.path === '/search' ? 'Search...' : 'Search'"
                    :aria-readonly="route.path !== '/search' ? true : false"
                    class="flex-grow min-w-0 ml-2 bg-transparent border-none outline-none text-foreground group-hover:placeholder-foreground placeholder-secondary-foreground"
                    :class="{'cursor-text': route.path === '/search', 'cursor-default': route.path !== '/search'}">
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
import { useRoute, useRouter } from 'vue-router';
import { ref, nextTick } from 'vue';

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
const searchInput = ref(null);

const navigate = (path) => {
    if (route.path !== path) {
        router.push(path);
    }
};

const handleSearchClick = async () => {
    await navigate('/search');
    nextTick(() => {
        if (searchInput.value) {
            searchInput.value.focus();
        }
    });
};

</script>
