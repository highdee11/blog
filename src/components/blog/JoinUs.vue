<template>
    <div id="footer">

        <!-- Footer -->
       <div>
            <p class="footer-title">Join our Team of Writers</p>
            <p class="text footer-text">
                On dasdas, writers earn a living doing what they love.  <br/>
                Getting started is easy. Just pay a one time <span>$25</span> fee and everything is ready to go.
            </p>
            <button 
                @click="checkout"
                class="btn"
                :class="{'btn-success': joined}"
                href="">{{btnText}}</button>
       </div>
    </div>
</template>
<script lang="ts">
import FlutterWaveService, { type FlutterWavePaymentConfig, type FlutterwaveResponse } from '@/core/services/FlutterWaveCheckout';
import { computed } from '@vue/reactivity';
import { defineComponent, ref, type Ref } from 'vue';
import Swal from "sweetalert2";

export default defineComponent({

    setup(props) {
        const joined:Ref<boolean> = ref(false);
        const btnText = computed(()=> joined.value ? "Thank you for joining":"JOIN US")
        
        const config:FlutterWavePaymentConfig = {
            amount: 25,
            currency: "USD",
            customer: {
                consumer_id: 23,
                email: "rose@unsinkableship.com",
                phone_number: "08102909304",
                name: "Rose DeWitt Bukater",
            },
        };

        const publicKey:string = import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY as string
        
        const checkout = async()=>{ 

            if(joined.value) return;

            try{
                //initialise flutterwave service with payment config
                const flutterWaveService = new FlutterWaveService(publicKey, config);

                //checkout with flutterwaveService instance
                const response: FlutterwaveResponse|null = await flutterWaveService.checkout();
    
                //check if payment was successful
                if(response?.status == "successful"){
                    joined.value = true;
                    Swal.fire({
                        title: "Thank You For Joining",
                        text: "your payment was successfull",
                        icon: "success",
                    })
                }
            }catch(e){
                //payment not successfull
            }
        }

        return {
            btnText,
            joined,
            checkout
        }
    },
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
        .btn-success {
            background-color: forestgreen;
        }
    }

    @media (max-width: 700px ) {
        #footer{
            width: 100%;
        }
    }
</style>