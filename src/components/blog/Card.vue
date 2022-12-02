<template>
    <!-- Single Blog -->
    <div class="card">
        <img class="card-img" :src="item.jetpack_featured_media_url" alt="blog-image" />
        <div class="card-body">
            <div class="crd-sub-head">
                <span class="mini-time crd-mt" v-html="item.primary_category.name"></span>
                <span class="mini-time "> . </span>
                <span class="mini-time">{{ dateTimeDiff(item.date) }} </span>
            </div>
            <h5 class="card-title" v-html="item.title.rendered"></h5>
            <p class="text" v-html="item.excerpt.rendered"></p>
        </div>
        <div class="card-footer read-full-wrap">
            <span class="rf-time">{{5}} mins</span>
            <NavigatorLink :id="item.id" :slug="item.slug"/>
        </div>
    </div>
</template>
<script lang="ts">
import type Article from '@/core/models/Article';
import { computed, defineComponent, type PropType } from 'vue';
import { dateTimeDiff } from "@/core/helpers/date";
import type NavigatorVue from './NavigatorLink.vue';
import NavigatorLink from './NavigatorLink.vue';

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<Article>,
            required: true
        }
    },
    setup(props) {
        const item = computed(() => props.item);
        return {
            item,
            dateTimeDiff
        };
    },
    components: { NavigatorLink }
});
</script>

<style lang="scss" scoped>
.card {
    border: 1px solid #F5F5F5;
    padding: 10px;
    border-radius: 5px;
    max-width: 400px;

    .card-img {
        width: 100%;
        height: 230px;
        object-fit: cover;
        object-position: center;
        background-color: #00000014;
        
        img{
            width: 100%;
            height: 100%;
            
        }
    }

    .card-body {
        height: 172px;
        overflow: hidden;
    }

    .crd-sub-head {
        padding: 8px 0px 0px;
    }

    .crd-mt {
        color: #4B4B4B;
    }

    .card-title {
        font-family: sf-pro-semiBold;
        color: #2c2c2c;
        margin: 10px 0 0;
        font-size: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
    }

    .text {
        margin-top: 0px;
    }

    .card-footer {
        padding: 20px 0 4px;
    }

    @media (max-width: 1300px) {
        #blogs {
            .card-wrapper {
                gap: 30px;
            }

        }
    }

    @media (max-width: 1000px) {
        #blogs {
            .card-wrapper {
                gap: 30px;
                grid-template-columns: auto auto;
            }

        }
    }

    @media (max-width: 600px) {
        #blogs {
            .card-wrapper {
                display: block;
            }

            .card {
                margin: auto;
                margin-bottom: 20px;
            }
        }
    }
}
</style>