import { NextResponse } from "next/server";
import connection from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  try {
    await connection();

    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.error("Database Error:", err.message);
    return new NextResponse("Database Error", { status: 500 });
  }
};
