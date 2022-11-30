<template>
    <div id="details" class="max-width">

        <!-- Details -->
        <div class="details-wrapper">
            <div class="author">
                <span>By Ryan Jackson</span>
                <span class="textlight">2 Month Ago </span>
            </div>
            <h2 class="details-title">Optimizing CSS for faster page loads </h2>
            <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Nunc non blandit massa enim. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc
                consequat.
                Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Tellus elementum sagittis vitae et leo
                duis ut diam.
                Eget nullam non nisi est sit amet. Dignissim suspendisse in est ante in nibh mauris. Nec feugiat in
                fermentum posuere urna.
                Diam in arcu cursus euismod quis viverra. Facilisis mauris sit amet massa vitae tortor condimentum
                lacinia.
                Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Sed egestas egestas fringilla
                phasellus faucibus scelerisque eleifend.
                Sed elementum tempus egestas sed sed risus pretium quam vulputate. Lacus sed turpis tincidunt id aliquet
                risus feugiat in ante.
                Viverra nibh cras pulvinar mattis nunc sed blandit libero. Morbi tincidunt augue interdum velit euismod
                in.
                Accumsan lacus vel facilisis volutpat est velit egestas dui. Erat pellentesque adipiscing commodo elit
                at imperdiet.
                Quis risus sed vulputate odio ut. Nulla aliquet enim tortor at auctor urna.
            </p>
            <img src="../../assets/images/Safari (Catalina) - Dark 1.png" alt="blog-image" />
            <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
                Nunc non blandit massa enim. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc
                consequat.
                Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Tellus elementum sagittis vitae et leo
                duis ut diam.
                Eget nullam non nisi est sit amet. Dignissim suspendisse in est ante in nibh mauris. Nec feugiat in
                fermentum posuere urna.
                Diam in arcu cursus euismod quis viverra. Facilisis mauris sit amet massa vitae tortor condimentum
                lacinia.
                Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Sed egestas egestas fringilla
                phasellus faucibus scelerisque eleifend.
                Sed elementum tempus egestas sed sed risus pretium quam vulputate. Lacus sed turpis tincidunt id aliquet
                risus feugiat in ante.
                Viverra nibh cras pulvinar mattis nunc sed blandit libero. Morbi tincidunt augue interdum velit euismod
                in.
                Accumsan lacus vel facilisis volutpat est velit egestas dui. Erat pellentesque adipiscing commodo elit
                at imperdiet.
                Quis risus sed vulputate odio ut. Nulla aliquet enim tortor at auctor urna.


            </p>
            <p class="text">
                Proin fermentum leo vel orci porta non pulvinar neque. In egestas erat imperdiet sed euismod nisi porta
                lorem.
                Metus vulputate eu scelerisque felis imperdiet proin fermentum. Luctus venenatis lectus magna fringilla.
                Nunc scelerisque viverra mauris in aliquam. Et molestie ac feugiat sed lectus vestibulum mattis.
                Sem et tortor consequat id porta nibh venenatis cras sed. Sed felis eget velit aliquet sagittis id.
                Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Tincidunt ornare massa eget egestas
                purus viverra accumsan in.
                Aliquet lectus proin nibh nisl condime.
            </p>
        </div>
        <!-- Articles -->
        <h2 class="details-title">More Articles</h2>
        <div class="articles">
            <div class="card-wrapper">
                <div v-for="(blog, idx) in blogs" :key="idx">
                    <BlogCard :item="blog" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts"> 

import { defineComponent, reactive } from 'vue';
import BlogCard from '@/components/blog/Card.vue';

export default defineComponent({
    components: {BlogCard },
    setup() {
        const blogs = reactive([
            {
                subTitle: "Front-end",
                date: "1 Month Ago",
                title: "css grid",
                description: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning",
                readTime: "3 Min Read",
                img: "mini.png"
            },
            {
                subTitle: "Front-end",
                date: "1 Month Ago",
                title: "css grid",
                description: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning",
                readTime: "3 Min Read",
                img: "colors-in-css 1.png"
            },
            {
                subTitle: "Front-end",
                date: "1 Month Ago",
                title: "css grid",
                description: "The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning",
                readTime: "3 Min Read",
                img: "css variables 1.png"
            }

        ])
        return {
            blogs
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