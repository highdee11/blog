<template>
    <div id="banner">
        <div class="banner-inner">
            <div class="orange-bg">
                <img :src="item.jetpack_featured_media_url" alt="image" />
            </div>
            <div class="text-wrapper"> 
                <div>
                    <span class="mini-text" v-html="item.primary_category?.name"></span>
                    <span class="mini-time "> . </span>
                    <span class="mini-time">{{ dateTimeDiff(item.date) }}</span>
                </div>
                <div class="content">
                    <h1 v-html="item.title.rendered"></h1>
                    <p class="text" v-html="item.excerpt.rendered"> </p>
                </div>
                <div class="read-full-wrap">
                    <span class="rf-time">3 Min Read</span>
                    <NavigatorLink :id="item.id" :slug="item.slug"/>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue';
import { dateTimeDiff } from "@/core/helpers/date";
import type Article from '@/core/models/Article';
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
    #banner {
        margin-bottom: 70px;
        animation: adjust .2s linear;

        @keyframes adjust {
            0% { transform: scale(1.2) }
            100% { transform: scale(1); }
        }

        .banner-inner{
            border: 1px solid #F5F5F5;
            padding: 10px;
            border-radius: 5px;
            display: grid;
            column-gap: 20px;
            grid-template-columns: 40% auto;
          
            .orange-bg { 
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        

            .text-wrapper{
                padding: 8px 0px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .content {
                    height: 200px;
                    overflow: hidden;
                }
                .mini-text{
                    font-family: sf-pro-semiBold;
                    color: #4B4B4B;
                }

                h1{
                    font-family: sf-pro-bold;
                    font-size: 30px;
                    margin: 12px 0px;
                    color: #2C2C2C;
                }

                .text{
                    margin-bottom: 30px;
                }

                .read-full-wrap{
                    padding-top: 20px;
                }
            }
        }

        @media (max-width: 1280px) {
            .banner-inner{
                grid-template-columns: 45% auto;
            }
            br{
                display: none;
            }
        }

        @media (max-width: 1000px) {
            .banner-inner{
                grid-template-columns: auto;
            
            }
        }
        @media (max-width: 500px) {
            .banner-inner {
                .text-wrapper {
                    h1 {
                        font-size: 24px !important;
                    }
                }
            }
            .orange-bg {
                div {
                    height: 236px !important;
                    width: 258px !important;
                }
            } 
        }
    }
</style>