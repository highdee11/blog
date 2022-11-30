<template>
    <div id="banner">
        <div class="banner-inner">
            <div class="orange-bg">
                <img src="../../assets/images/rocket.png" alt="jet-image" />
                <h1>Optimizing CSS for faster <br/> page loads </h1>
                <!-- <div></div> -->
            </div>
            <div class="text-wrapper"> 
                <div>
                    <span class="mini-text">Front-end</span>
                    <span class="mini-time "> . </span>
                    <span class="mini-time">1 Hour Ago</span>
                </div>
                <h2>Optimizing CSS for faster page loads </h2>
                <p class="text">
                    Not long ago I decided to improve the loading times of my website. It already loads pretty fast, 
                    but I knew there was still room for improvement and one of them was CSS loading. 
                    I will walk you through the process and show you how you can improve your load times as well.
                </p>
                <p class="text">
                    To see how CSS affects the load time of a webpage we first have to know how the browser converts an HTML document into a functional webpage...
                </p>
                <div class="read-full-wrap">
                    <span class="rf-time">3 Min Read</span>
                    <a href="">
                        <span>Read Full</span>
                        <img src="../../assets/images/arrow.svg" alt="read-more-arrow" />
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>

<style lang="scss" scoped>

    #banner {
        padding-top: 70px;
        .banner-inner{
            border: 1px solid #F5F5F5;
            padding: 10px;
            border-radius: 5px;
            display: grid;
            column-gap: 20px;
            grid-template-columns: 40% auto;
          
            .orange-bg {
                position: relative;
                background-color: #EF5623;
                // height: 500px;
                padding: 30px;

                // div{
                //     background-image: url('../../assets/images/Vector.png');
                //     height: 268px;
                //     width: 326px;
                //     position: absolute;
                //     right: 0;
                //     bottom: 0;
                //     z-index: 5;
                // }

                h1{
                    font-family: playFairRegular;
                    color: white;
                    font-size: 33px;
                    z-index: 10;
                    position: relative;
                }
                
                img{
                    padding-top: 53px;
                }
            }
        

            .text-wrapper{
                
                padding: 8px 0px;

                .mini-text{
                    font-family: sf-pro-semiBold;
                    color: #4B4B4B;
                }

                h2{
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
                        h2 {
                            font-size: 24px !important;
                        }
                    }
                }
                .orange-bg {
                    h1 {
                        font-size: 27px !important;
                    }
                    div {
                        height: 236px !important;
                        width: 258px !important;
                    }
                } 
        }
    }
</style>