<template>
    <div class="max-width">
        <BannerHeader />

        <div class="mty">
            <div class="articles">
                <div class="card-wrapper">
                    <BlogCard v-for="(blog, idx) in articles" :key="idx" :item="blog" />
                </div>
            </div>
        </div>

        <FooterVue />
    </div>
  </template>
<script lang="ts">
import BannerHeader from '@/components/blog/BannerHeader.vue';
import FooterVue from '@/components/blog/Footer.vue';
import BlogCard from '@/components/blog/Card.vue'
import { defineComponent, onMounted, reactive } from 'vue';
import { useBlog } from "@/composables/useBlog";
  
export default defineComponent({
    components: { FooterVue, BannerHeader, BlogCard },
    setup() { 
        const { articles, getArticles } = useBlog();
        
        onMounted(async ()=>{
            await getArticles();
            console.log(articles.value)
        })

        return {
            articles
        }
    }
});
</script>
<style lang="scss">

 </style>