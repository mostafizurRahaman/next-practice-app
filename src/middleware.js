import { NextResponse } from "next/server";

export const middleware = (req) => {
   return NextResponse.rewrite(new URL("/login", req.url));
};

export const config = {
   matcher: ["/about/:path*", "/studentlist"],
};
