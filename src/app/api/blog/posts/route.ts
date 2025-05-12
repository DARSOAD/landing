// src/app/api/blog/posts/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = searchParams.get("limit") ?? "10";
  const lastPostId = searchParams.get("lastPostId") ?? null;
  const page = searchParams.get("page") ?? "1";

  let res;

  if (page === '1') {
    // If page is 1, fetch the first page of posts
     res = await fetch(
      `${process.env.BACKEND_URL}/blog/posts?limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );    
  }
  else {
    // If lastPostId is not null, fetch the next page of posts
    res = await fetch(
      `${process.env.BACKEND_URL}/blog/posts?lastPostId=${lastPostId}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  // Check if the response is ok (status code 200-299)

  if (!res.ok) {
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
