import axiosSecure from "./components/api/useAxiosSecure";

const { NextResponse } = require("next/server");

export const middleware = async (request) => {
    const token = request.cookies.get("token")?.value;
    // console.log(token, 'token')
    
    if(!token){
        return NextResponse.redirect(new URL('/', request.url))
    }

    try {
        if(token){
            axiosSecure.defaults.headers['Authorization'] = `Bearer ${token}`;
            const res = await axiosSecure.post('/secure-test')
        if(res.data){
            if(res.data.auth === false){
                request.cookies.delete('token')
                return NextResponse.redirect(new URL('/', request.url))
            }
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL('/', request.url))
        }
        }
    } catch (error) {
        
    }
    
};


export const config = {
    matcher: ['/chat/:path*'],
};