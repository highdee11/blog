declare var FlutterwaveCheckout:any

export interface FlutterWavePaymentConfig {
    amount: number;
    currency: string;
    customer: FlutterwaveCustomer;
}

export interface FlutterwaveCustomer {
    consumer_id: number;
    email: string;
    phone_number: string;
    name: string;
}

export interface FlutterwaveResponse {
    amount: number;
    charge_response_code: string;
    charge_response_message: string;
    charged_amount: number
    created_at: string;
    currency: string;
    customer: FlutterwaveCustomer
    flw_ref: string;
    redirectstatus: undefined
    status: string;
    transaction_id: 3992768
    tx_ref: string;
}

export default class FlutterWaveService {
    
    private publicKey:string;
    private config: FlutterWavePaymentConfig;

    constructor(pKey: string, config: FlutterWavePaymentConfig){
        this.publicKey = pKey;
        this.config = config
    }

    public checkout = async (): Promise<FlutterwaveResponse|null> => {
       return new Promise<FlutterwaveResponse|null>((resolve, reject)=> {
            let response: FlutterwaveResponse|null;

            const modal = FlutterwaveCheckout({
                public_key: this.publicKey,
                tx_ref: "titanic-"+(Math.random() * 10),
                amount: this.config.amount,
                currency: this.config.currency,
                payment_options: "card",
                meta: {
                    consumer_id: this.config.customer.consumer_id,
                    consumer_mac: "92a3-912ba-1192a",
                },
                customer: {
                    email: this.config.customer.email,
                    phone_number: this.config.customer.phone_number,
                    name: this.config.customer.name,
                },
                customizations: {
                    title: "The Titanic Store",
                    description: "Payment for an awesome cruise",
                    logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
                },
                callback: (payment: FlutterwaveResponse)=> {
                    response = payment;

                    setTimeout(()=>{
                        modal.close();
                        resolve(response);
                    }, 10000);
                },
                onclose: (incomplete: boolean)=> {
                    if (incomplete === false) {
                        resolve(response)
                    } else {
                        reject(response)
                    }
                }
            });        
        })
    }
}