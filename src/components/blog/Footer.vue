<template>
    <div id="footer">

        <!-- Footer -->
       <div>
            <p class="footer-title">Join our Team of Writers</p>
            <p class="text footer-text">
                On dasdas, writers earn a living doing what they love.  <br/>
                Getting started is easy. Just pay a one time <span>$25</span> fee and everything is ready to go.
            </p>
            <a href="">JOIN US</a>
       </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style lang="scss" scoped>
    #footer{
        padding: 110px 0 80px;
        width: 630px;
        margin: auto;
        text-align: center;

        .footer-title{
            font-family: sf-pro-medium;
            font-size: 25px;
            margin: 0;
            color: #2C2C2C;
        }

        .footer-text{
            font-family: sf-pro-regular;
            margin-bottom: 40px;

            span{
                font-family: sf-pro-semiBold;
                font-size: 18px;
            }
        }

        a{
            background: #000000;
            color: white;
            text-decoration: none;
            padding: 10px 44px;
            font-size: 14px;
            
        }
    }

    @media (max-width: 700px ) {
        #footer{
            width: 100%;
        }
    }
</style>