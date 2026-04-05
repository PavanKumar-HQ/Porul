import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Order from "@/models/Order";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    
    const body = await req.json();
    const { items, total, customerInfo } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Empty order" }, { status: 400 });
    }

    const newOrder = new Order({
      items,
      total,
      customerInfo,
      paymentStatus: "pending", // Initially pending until payment gateway response
      deliveryStatus: "processing",
    });

    await newOrder.save();

    return NextResponse.json({ 
      success: true, 
      orderId: newOrder._id,
      message: "Order initiated successfully. Standing by for payment."
    }, { status: 201 });

  } catch (error: any) {
    console.error("Order Creation Error:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
