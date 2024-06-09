<template>
    <div class="h-16 pb-2 flex justify-between gap-2">
        <div class="flex flex-grow">
            <div :class="['flex h-full gap-2 rounded-md w-full select-none min-w-30 max-w-72 hover:cursor-pointer items-center hover:text-foreground p-2', route.path === '/' ? 'bg-secondary' : 'text-secondary-foreground']"
                @click="navigate('/')">
                <component :is="route.path === '/' ? 'HomeFilledIcon' : 'HomeIcon'" />
                <p>Home</p>
            </div>
            <div :class="['flex h-full gap-2 rounded-md w-full select-none min-w-30 max-w-72 hover:cursor-pointer items-center hover:text-foreground p-2', route.path === '/discover' ? 'bg-secondary' : 'text-secondary-foreground']"
                @click="navigate('/discover')">
                <component :is="route.path === '/discover' ? 'DiscoverFilledIcon' : 'DiscoverIcon'" />
                <p>Discover</p>
            </div>
            <div class="group flex h-full rounded-md w-full select-none min-w-56 max-w-72 hover:cursor-pointer items-center hover:text-foreground p-2"
                :class="route.path === '/search' ? 'bg-secondary' : 'text-secondary-foreground'"
                @click="handleSearchClick">
                <component :is="route.path === '/search' ? 'SearchFilledIcon' : 'SearchIcon'" />
                <input ref="searchInput" type="text"
                    :placeholder="route.path === '/search' ? 'Search...' : 'Search'"
                    :aria-readonly="route.path !== '/search' ? true : false"
                    class="flex-grow min-w-0 ml-2 bg-transparent border-none outline-none text-foreground group-hover:placeholder-foreground placeholder-secondary-foreground"
                    :class="{'cursor-text': route.path === '/search', 'cursor-default': route.path !== '/search'}">
            </div>
        </div>
        <div class="flex items-center gap-2 h-full">
            <component is="NewsIcon" class="text-secondary-foreground"/>
            <component is="PrivateIcon" class="text-secondary-foreground"/>
            <component is="FriendsIcon" class="text-secondary-foreground"/>
            <component is="SettingsIcon" class="text-secondary-foreground"/>
            <component is="UserIcon" class="text-secondary-foreground"/>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, nextTick } from 'vue';

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
