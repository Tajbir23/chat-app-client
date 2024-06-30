const { NextResponse } = require("next/server");

export const middleware = async (request) => {
    const token = request.headers.get('Authorization');
    console.log(token, 'token')
    
    if(!token){
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next();
};


export const config = {
    matcher: ['/chat/:path*'],
};