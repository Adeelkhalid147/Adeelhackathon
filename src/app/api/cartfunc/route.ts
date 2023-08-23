import { NextRequest, NextResponse } from "next/server";
import { db, cartTableDrizzle } from "../../../lib/drizzle";
import { eq, and } from "drizzle-orm";

// get method mai db.select use ho ga
export async function GET(req: NextRequest) {
  let url = req.nextUrl.searchParams;
  try {
    if (url.has("user_id")) {
      let allCartData = await db
        .select()
        .from(cartTableDrizzle)
        .where(eq(cartTableDrizzle.user_id, url.get("user_id") as string));
      // console.log("data : ", allCartData);
      return NextResponse.json({ allCartData });
    }
  } catch (error) {
    // console.log("error :", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}

// POST REQUEST
// post method mai db.insert use ho ga k bad values mai (dataToInsert) put krna h

export async function POST(req: NextRequest) {
  let request = await req.json();
  try {
    if (
      request.product_id &&
      request.quantity &&
      request.user_id &&
      request.price
    ) {
      // as variable mai jo chez insert krni h wo likni h jse k yha hm ne value product id user id insert krni
      let response = await db
        .insert(cartTableDrizzle)
        .values(request)
        .returning();
      // console.log(response)
      return NextResponse.json({ response });
    } else {
      throw Error("Please put product_id quantity user_id");
    }
  } catch (error) {
    // console.log("error :", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}

// update method.(db.update) use ho ga update function mai phle se bna variable jis mai
// data save h us variable ko put krna h.eq ka mtlb h equal kro.

export async function PUT(req: NextRequest) {
  let request = await req.json();
  try {
    let response = await db
      .update(cartTableDrizzle)
      .set(request)
      .where(
        and(
          eq(cartTableDrizzle.product_id, request.product_id),
          eq(cartTableDrizzle.user_id, request.user_id)
        )
      )
      .returning();
    return NextResponse.json({ response });
  } catch (error) {
    // console.log("error :", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}

// DELETE REQUEST

export async function DELETE(req: NextRequest) {
  let url = req.nextUrl.searchParams;
  try {
    if (url.has("product_id") && url.has("user_id")) {
      let response = await db
        .delete(cartTableDrizzle)
        .where(
          and(
            eq(cartTableDrizzle.product_id, url.get("product_id") as string),
            eq(cartTableDrizzle.user_id, url.get("user_id") as string)
          )
        )
        .returning();
      return NextResponse.json({ response });
    }
  } catch (error) {
    // console.log("error :", (error as { message: string }).message);
    return NextResponse.json({ error });
  }
}
