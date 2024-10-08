<template>
    <ErrorMessage 
        v-if="hasError"
        :message="errorMessage ?? ''"
    />
    <div v-else class="mty"> 
        <BannerHeader 
            v-if="$props.showFeatured && featured" 
            :item="featured"
        />

        <div  class="articles">
            <div class="card-wrapper">
                    <BlogCard  v-for="(blog, idx) in items" :key="idx" :item="blog" />
            </div>
        </div>

        <div v-if="isLoading" class="articles">
            <div class="card-wrapper">
                <ArticleLoader v-for="(_, index) in $props.perPage" :key="index"/>
            </div>
        </div>

        <div v-if="items.length > 0 && !isLoading" >
            <button :disabled="isLoading" @click="loadMore" v-if="paginate" class="btn">Load More</button>
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted, defineComponent, computed } from 'vue';
import { useBlog } from "@/composables/useBlog";
import BlogCard from '@/components/blog/Card.vue';
import ErrorMessage from './ErrorMessage.vue';
import BannerHeader from './BannerHeader.vue';
import ArticleLoader from '../loaders/ArticleLoader.vue';

export default defineComponent({
    props: {
        paginate: {type: Boolean, required: true},
        showFeatured:{type: Boolean, default: false},
        perPage: {type: Number, default: 9},
        exclude: {type: Number, required: false},
    },
    setup(props) {
        const { 
            articles, getArticles,
            currentPage, isLoading,
            hasError, errorMessage } = useBlog();
 
        const featured = computed(()=>  articles.value[0]?? null);
        const items = computed(()=> articles.value.slice(props.showFeatured ? 1:0))

        onMounted(() => {
            const perPage = props.perPage + (props.showFeatured ? 1:0)
            getArticles(perPage, 1, props.exclude);
        });


        const loadMore = ()=>{
            getArticles(props.perPage, currentPage.value+1);
        }

        return {
            featured,
            items,
            isLoading,
            hasError, 
            errorMessage,
            loadMore
        };
    },
    components: { BlogCard, ErrorMessage, BannerHeader, ArticleLoader }
})
</script>

<style lang="scss">

</style>