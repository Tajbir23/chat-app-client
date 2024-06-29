const { NextResponse } = require("next/server");

export const middleware = async (request) => {
    const cookie = request.cookies.get('next-auth.session-token');
    
    if(!cookie){
        return NextResponse.redirect(new URL('/api/auth/signin', request.url))
    }
    return NextResponse.next();
};


export const config = {
    matcher: ['/chat/:path*'],
};