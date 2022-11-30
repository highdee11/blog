<template>
    <!-- Single Blog -->
    <div class="card">
        <div class="card-img">
            <img class="" :src="item.jetpack_featured_media_url" alt="blog-image" />
        </div>
        <div class="card-body">
            <div class="crd-sub-head">
                <span class="mini-time crd-mt">{{item.primary_category.name}}</span>
                <span class="mini-time "> . </span>
                <span class="mini-time">{{item.date}} </span>
            </div>
            <h5 class="card-title" v-html="item.title.rendered"></h5>
            <p class="text" v-html="item.excerpt.rendered"></p>
        </div>
        <div class="card-footer read-full-wrap">
            <span class="rf-time">{{}}</span>
            <router-link :to="{name:'blog.view', params:{id:item.id}}">
                <span>Read Full</span>
                <img src="../../assets/images/arrow.svg" alt="read-more-arrow" />
            </router-link>
        </div>
    </div>
</template>
<script lang="ts">
import type Article from '@/core/models/Article';
import { computed, defineComponent, type PropType } from 'vue';

export default defineComponent({
    props:{
        item:{
            type: Object as PropType<Article>,
            required: true
        }
    },
    setup(props){
        const item = computed(()=>props.item);
        return {
            item
        }
    }

});
</script>

<style lang="scss" scoped>
.card {
    border: 1px solid #F5F5F5;
    padding: 10px;
    border-radius: 5px;
    max-width: 420px;

    .card-img {
        width: 100%;
        height: 230px;

        img{
            width: 100%;
            height: 100%;
        }
    }

    .card-body {
        height: 172px;
        overflow: hidden;
        text-overflow: ellipsis;
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .text {
        margin-top: 5px;
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