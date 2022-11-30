<template>
    <div class="skeleton-card">
        <div class="inner-content">
            <div class="line-content"> </div>
            <div class="line-content"> </div>
            <div class="line-content"> </div>
            <div class="line-content"> </div>
            <div class="line-content"> </div>
            <div class="line-content"> </div>
        </div>
        <div class="img-content">

        </div>
        <div class="inner-content">
            <div class="line-content"> </div>
            <div class="line-content"> </div>
            <div class="line-content"> </div>
            <div class="line-content"> </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {

        }
    },
})
</script>
<style lang="scss" scoped>
.skeleton-card {
    display: block;
    background: #fbfbfb;
    height: 900px;
    width: 70%;
    border-radius: 5px;
    padding: 20px;
    margin: 20px auto;

    .img-content {
        display: block;
        background: #ededed;
        height: 40%;
        width: 100%;
        margin: auto;
    }

    .inner-content {
        margin: 50px 0;

        .line-content {
            display: block;
            background: #ededed;
            height: 12px;
            width: 90%;
            animation: blink 1s 1s 0 infinite ease-out none;
            margin-top: 20px;
        }
        .line-content:first-child{
            width: 20%;
        } 
        .line-content:nth-child(2){
            width: 70%;
        }
        .line-content:last-child{
            width: 100%;
        }
    }
    .flex-bt-content{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        .line-content-sm{
            display: block;
            background: #ededed;

            height: 10px;
            width: 100px;
            margin-top: 10px;
        }
    }
    @keyframes blink {
        0%{background: #ededed;}
        50%{background: #fffefe;}
        100%{background: #ededed;}

    }
}

</style>