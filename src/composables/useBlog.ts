import { ref, type Ref } from "vue";
import type Article from '@/core/models/Article';
import NetworkService from "@/core/services/NetworkService"

interface UsableBlog {
    isLoading: Ref<boolean>
    articles: Ref<Article[]>;
    currentPage: Ref<number>,
    perPage: Ref<number>,
    getArticles: ()=> void;
    getArticle: (id: number)=> void;
}

export const useBlog = (): UsableBlog => {
    const articles: Ref<Article[]> = ref([]);
    const isLoading: Ref<boolean> = ref(false);
    const currentPage: Ref<number> = ref(1);
    const perPage: Ref<number> = ref(5);

    const getArticle = (id: number)=>{}
    
    const getArticles = async (page:number = currentPage.value)=>{
        const response = await NetworkService.get(`posts?per_page=${perPage.value}&page=${page}`);

        if(response.data){
            articles.value = response.data as Article[];
        }
        
        console.log(response);
    }

    return {
        isLoading,
        articles,
        perPage,
        currentPage,
        getArticle,
        getArticles
    }
}