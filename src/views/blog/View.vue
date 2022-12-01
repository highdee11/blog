<template>
    <div id="details" class="max-width">
        <ErrorMessage 
            v-if="hasError"
            :message="errorMessage ?? ''"
        />
        <div v-else> 
            <ArticleDetailsLoader v-if="isLoading" />
            <div v-else class="details-wrapper">
                <div class="author">
                    <span v-html="article?.primary_category.name"></span> - 
                    <span class="textlight"> {{ dateTimeDiff(article?.date) }} </span>
                </div>
                <h2 class="details-title" v-html="article?.title.rendered"></h2>
                <p class="text" v-html="article?.excerpt.rendered"></p>
                <img :src="article?.jetpack_featured_media_url" alt="blog-image" />
                <p class="text" v-html="article?.content.rendered"></p>
            </div>
        </div>
        <!-- Articles -->
        <h2 class="details-title">More Articles</h2>
        <BlogList :paginate="false" :per-page="3" :exclude="articleId"/>
    </div>
</template>
<script lang="ts"> 

import { defineComponent, onMounted, reactive } from 'vue';
import BlogCard from '@/components/blog/Card.vue';
import { useBlog } from "@/composables/useBlog"
import { useRoute } from "vue-router"
import { dateTimeDiff } from '@/core/helpers/date';
import BlogList from '@/components/blog/BlogList.vue';
import ErrorMessage from '@/components/blog/ErrorMessage.vue';
import ArticleDetailsLoader from '@/components/loaders/ArticleDetailsLoader.vue';

export default defineComponent({
    components: { BlogCard, BlogList, ErrorMessage, ArticleDetailsLoader },
    setup() {

        const route = useRoute();
        const articleId: number = route.params.id as unknown as number;
        const { article, getArticle, hasError, errorMessage, isLoading  }  = useBlog();
        

        onMounted(()=>{
            getArticle( articleId )
        });
        

        return {
            article,
            hasError,
            isLoading,
            errorMessage,
            articleId,
            dateTimeDiff
        }
    }
});
</script>

<style lang="scss" scoped>
#details {
    .details-wrapper {
        width: 850px;
        margin: auto;

        .details-title {
            font-family: sf-pro-bold;
            font-size: 32px;
        }

        .text {
            line-height: 24px;
            overflow-x: hidden;
        }

        img {
            width: 650px;
            margin: 50px auto;
            display: block;
        }

        .author {
            font-size: 14px;
        }

         
    }

    @media (max-width: 700px) {
        .details-wrapper {
            width: 100%;
        }

        img {
            width: 100% !important;
        }
    }


}
</style>