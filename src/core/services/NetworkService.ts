import type { AxiosResponse, AxiosRequestConfig, AxiosInstance,  } from "axios";
import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.baseURL = import.meta.env.VITE_API_URL as string;

export default class NetworkService {

    /**
     * @description send the GET HTTP request
     * @param resource: string
     * @returns Promise<AxiosResponse>
     */
    
    public static async get(
      resource: string,
    ): Promise<AxiosResponse> {
      return axios.get(`${resource}`);
    }
  
    /**
     * @description set the POST HTTP request
     * @param resource: string
     * @param params: any
     * @returns Promise<AxiosResponse>
     */
    public static async post(
      resource: string,
      params: any,
    ): Promise<AxiosResponse> {
      return axios.post(`${resource}`, params);
    }
   
    
}
  