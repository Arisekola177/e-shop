
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
import { getUser } from "@/actions/getUser"

const prisma = new PrismaClient()

export async function POST(req) {
   const currentUser = await getUser() 

   if(!currentUser || currentUser.role !== 'ADMIN'){
     return NextResponse.error()
   }
   const body = await req.json()

   const { name, description, price, brand, category, inStock, images } = body

   const product = await prisma.product.create({
      data: {
         name,
         description,
         brand,
         price: parseFloat(price),
         category,
         inStock,
         images
      }
   })

   return NextResponse.json(product)
}
