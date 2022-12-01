<template>
    <div class="max-width">
        <BlogList :paginate="true" :per-page="9" :show-featured="true" />
        <JoinUs />
    </div>
  </template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import BlogList from '@/components/blog/BlogList.vue';
import JoinUs from '@/components/blog/JoinUs.vue';

  
export default defineComponent({
    components: { BlogList, JoinUs  },
    setup() { 
        
        return {

        }
    }
});
</script>
<style lang="scss">

 </style>