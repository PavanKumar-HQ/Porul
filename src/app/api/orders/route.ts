import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items, total, customerInfo } = body;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Empty order" }, { status: 400 });
    }

    // Insert order into Supabase 'orders' table
    const { data, error } = await supabase
      .from('orders')
      .insert([
        { 
          items, 
          total, 
          customer_info: customerInfo,
          payment_status: "pending",
          delivery_status: "processing"
        }
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ 
      success: true, 
      orderId: data[0].id,
      message: "Order initiated successfully in Database. Standing by for payment."
    }, { status: 201 });

  } catch (error: any) {
    console.error("Supabase Order Creation Error:", error);
    return NextResponse.json({ error: "Failed to create order in registry" }, { status: 500 });
  }
}
