// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";

    if (isMaintenanceMode) {
        const pathname = request.nextUrl.pathname;

        if (
            !pathname.startsWith("/maintenance") &&
            !pathname.startsWith("/_next") &&
            !pathname.startsWith("/api/")
        ) {
            return NextResponse.redirect(new URL("/maintenance", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!maintenance|_next|api/).*)"],
};