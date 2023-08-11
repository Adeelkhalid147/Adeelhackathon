
import { NextRequest, NextResponse } from "next/server";
import { oneProductType } from "@/components/utils/ProductsDataArrayAndType";



export async function GET (request:NextRequest){
    const orignalData : Array<oneProductType> = [];  // khali array mai data push ho k ae ga neche k api se
    const url = request.nextUrl.searchParams;  //same to same ye chapna h (request) upr function parametr se ae gey
    
        
        let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-08-09/data/query/production?query=*[_type == "products"]`)
        let dataFrom_API = await res.json()
        orignalData.push(...dataFrom_API.result)
        
        if (url.has("start") || url.has("end")){
            if (orignalData[Number(url.get("start"))]) {
            let productArray = orignalData.slice(Number(url.get("start")),Number(url.get("end")))
            return NextResponse.json({productArray})
        }
        return NextResponse.json({ productArray:"Not Found" })
    }
    return NextResponse.json({ orignalData })
   
}