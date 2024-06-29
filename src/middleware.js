const { NextResponse } = require("next/server")

export const middleware = (request) => {
    return NextResponse.redirect(new URL('/chat', request.url))
}

export const config = {
    matcher: ['/']
}