import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/deck") &&
    !pathname.startsWith("/deck/login") &&
    !pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico)$/)
  ) {
    const cookie = request.cookies.get("deck_auth");
    if (!cookie || cookie.value !== "authenticated") {
      return NextResponse.redirect(new URL("/deck/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/deck/:path*"],
};
