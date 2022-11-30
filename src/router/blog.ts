import BlogList from "@/views/blog/List.vue";
import BlogView from "@/views/blog/View.vue";

export default [
    {
        path: '/',
        name: 'blog.list',
        component: BlogList
    },
    {
        path: '/view/:id/:title',
        name: 'blog.view',
        component: BlogView
    },
];