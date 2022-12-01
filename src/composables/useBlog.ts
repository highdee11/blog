import { ref, type Ref } from "vue";
import type Article from '@/core/models/Article';
import NetworkService from "@/core/services/NetworkService"
import { API } from "@/core/enums/ApiEnums"

interface UsableBlog {
    isLoading: Ref<boolean>
    article: Ref<Article|null>;
    articles: Ref<Article[]>;
    currentPage: Ref<number>,
    perPage: Ref<number>,
    hasError: Ref<boolean>,
    errorMessage: Ref<string|null>,
    getArticles: (perPage: number, page: number)=> void;
    getArticle: (id: number)=> void;
}

export const useBlog = (): UsableBlog => {

    const isLoading: Ref<boolean> = ref(false);
    const currentPage: Ref<number> = ref(1);
    const perPage: Ref<number> = ref(10);

    const hasError: Ref<boolean> = ref(false)
    const errorMessage: Ref<string|null> = ref(null);

    const article: Ref<Article | null> = ref(null);
    const articles: Ref<Article[]> = ref([]);

    const getArticle = async(id: number)=>{
        hasError.value = false;
        try {
            isLoading.value = true;
            const response = await NetworkService.get(`${API.GET_POST}/${id}`);
            if(response.data){ 
                article.value = response.data as Article; 
            }
            isLoading.value = false;
        }catch(e:any){
            hasError.value = true;
            errorMessage.value = e.response?.data.message;
        }
    }
    
    const getArticles = async (max?:number, page?:number)=>{
        hasError.value = false;
        try{
            max = max ?? perPage.value;
            page = page ?? currentPage.value;

            isLoading.value = true;
            const response = await NetworkService.get(`${API.GET_POST}?per_page=${max}&page=${page}`);
            const temp = response.data as Article[];
            articles.value = [...articles.value, ...temp];
            
            currentPage.value = page;
            isLoading.value = false;
        }catch(e:any){
            hasError.value = true;
            errorMessage.value = e.response?.data.message;
        }
    }

    return {
        isLoading,
        article,
        articles,
        perPage,
        currentPage,
        hasError,
        errorMessage,
        getArticle,
        getArticles
    }
}