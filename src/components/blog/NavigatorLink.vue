<template>
    <router-link :to="{name:'blog.view', params:{id:$props.id, title: $props.slug}}">
        <span>Read Full</span>
        <img src="../../assets/images/arrow.svg" alt="read-more-arrow" />
    </router-link>
</template>
<script lang="ts">
import type Article from '@/core/models/Article';
import { computed, defineComponent, type PropType } from 'vue';
import { dateTimeDiff } from "@/core/helpers/date";

export default defineComponent({
    props:{
        id:{
            type: Number,
            required: true
        },
        slug:{
            type: String,
            required: true
        },
    }

});
</script>