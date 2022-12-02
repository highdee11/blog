<template>
    <div class="max-width" id="navbar">
        <!-- Blog Logo -->
        <div><router-link to="/"><img class="logo" src="../../assets/logo.svg" alt="blog-logo" /></router-link></div>

        <!-- Blog Socials -->
        <div class="socials">
            <ul class="socials-ul">
                <li><a href=""><img src="../../assets/socials/dribbble.svg" /></a></li>
                <li><a href=""><img src="../../assets/socials/Twitter.svg" /></a></li>
                <li><a href=""><img src="../../assets/socials/Vector.svg" /></a></li>
                <li><a href=""><img src="../../assets/socials/figma.svg" /></a></li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style lang="scss">
    #navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;

        .socials-ul {
            display: flex;
            li{
                list-style: none;
                padding: 10px;

                :hover{
                    color: #9747ff;
                }
            }
        }
    }

    @media (max-width: 400px) {
        .logo{
            width: 60px;
        }
    }
</style>