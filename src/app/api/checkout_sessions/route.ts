
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe"


interface typeOfData {
    price:string,
    name: string,
    quantity:number,
}


let orignalData:Array<typeOfData> = [
    {
        price:"price_1NVPpuHwR9tZB3QQS6i6ruQe",
        name:'kids',
        quantity:1,
    },
    {
        price:"price_1NVPpBHwR9tZB3QQeomkCUsj",
        name:'Raglan Sweatshirt',
        quantity:1,
    },
    {
        price:"price_1NVPonHwR9tZB3QQDujqzSeF",
        name:'Brushed Bomber',
        quantity:1,
    },
    {
        price:"price_1NVPoKHwR9tZB3QQI5gyYmRl",
        name:'Muscle Tank',
        quantity:1,
    },
    {
        price:"price_1NVPnsHwR9tZB3QQpnjhmbql",
        name:'Flex Push Button Bomber',
        quantity:1,
    },
    {
        price:"price_1NVPnUHwR9tZB3QQ1oBhpjnu",
        name:'Imperial Alpaca Hoodie',
        quantity:1,
    },
    {
        price:"price_1NVPn3HwR9tZB3QQBkjtIAds",
        name:'Lite Sweatpants',
        quantity:1,
    },
    {
        price:"price_1NVPmcHwR9tZB3QQZcr4Zvqf",
        name:'Pink Fleece Sweatpants',
        quantity:1,
    },
    {
        price:"price_1NVPm8HwR9tZB3QQhVJATwZA",
        name:'Flex Sweatpants',
        quantity:1,
    },
    {
        price:"price_1NVPlkHwR9tZB3QQfwzBUlo4",
        name:'Flex Sweatshirt',
        quantity:1,
    },
    {
        price:"price_1NVPlMHwR9tZB3QQwskY0tyh",
        name:'Cameryn Sash Tie Dress',
        quantity:1,
    },
    {
        price:"price_1NVPkvHwR9tZB3QQu0M96nua",
        name:'Brushed Raglan Sweatshirt',
        quantity:1,
    },
]


// stripe se connection bnane k liye AK VARIABLE BANA H OR US MAI STRIPE K KEY JO K .env MAI SAVE K THE WO DENI H
// developer mai ja k API mai se dono key niklni hai

//connection bnane k liye stripe pe variable bnana h us mai key deni h
// @ts-ignore
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req:NextRequest) {
    let cartItemsArray = await req.json()

    try {
        let line_item = orignalData.filter((item:typeOfData)=>{
            for (let index = 0; index < cartItemsArray.length; index++) {
                const element:oneProductType = cartItemsArray[index];
                if (element.productName === item.name){
                    return true
                }
                
            }
        })
        let line_itemToSend:any = line_item.map((item:typeOfData) => {
            for (let index = 0; index < cartItemsArray.length; index++) {
                const element:oneProductType = cartItemsArray[index]
                if (element.productName === item.name) {
                    return {
                    price:item.price,
                    quantity:item.quantity,

                }
            }
        }
        })
        let session = await stripe.checkout.sessions.create({
            line_items:line_itemToSend,
            mode:"payment",
            success_url:`${req.nextUrl.origin}/?success=true`,
            cancel_url:`${req.nextUrl.origin}/?success=false`,
        })
        // console.log("session :",session)
        return NextResponse.json({link:session.url})
        
    } catch (error) {
        // console.log((error as { message:string }).message)
        return NextResponse.json(error)
    }

}






