<template>
    <div class="max-width">
        <BlogList :paginate="true" :per-page="10" :show-featured="true" />
        <FooterVue />
    </div>
  </template>
<script lang="ts">
import FooterVue from '@/components/blog/Footer.vue'; 
import { defineComponent, onMounted, reactive } from 'vue';
import BlogList from '@/components/blog/BlogList.vue';

  
export default defineComponent({
    components: { FooterVue, BlogList },
    setup() { 
        
        return {

        }
    }
});
</script>
<style lang="scss">

 </style>