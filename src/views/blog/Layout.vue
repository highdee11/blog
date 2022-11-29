<template>
    <NavBar />
    <RouterView />
</template>
<script lang="ts">
import NavBar from '@/components/blog/NavBar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { NavBar }
})

</script>