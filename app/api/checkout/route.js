
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { PrismaClient } from '@prisma/client';
import { getUser } from "@/actions/getUser";

const prisma = new PrismaClient();


export const POST = async (request) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const currentUser = await getUser();
    if (!currentUser) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    try {
        const body = await request.json()
         const { items,payment_intent_id, email} = await body;
         const updateItems = await items.map((item) =>({
           quantity: item.quantity,
           price_data: {
             currency: 'ngn',
            unit_amount: item.price * 100,
            product_data: {
            name: item.name,
           description: item.description,
           }}}))

   
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: updateItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
            metadata: {
                email
            }
        });

        
        const order = await prisma.order.create({
            data: {
                currency: 'ngn', 
                status: 'success',
                deliveredStatus: 'pending',
                address: null,
                user: { connect: { id: currentUser.id } },
                 products: items,
                sessionId: session.id,
            }
        });

        return NextResponse.json({
                        message:'Connection alive',
                        success: true,
                        order,
                        id: session.id})
    } catch (error) {
        console.error("Error creating order:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
