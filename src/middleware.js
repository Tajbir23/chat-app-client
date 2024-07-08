
import axiosSecure from "./components/api/useAxiosSecure";

const { NextResponse } = require("next/server");

export const middleware = async (request) => {
    const token = request.cookies.get("token")?.value;
    const pathname = request.nextUrl.pathname
    // console.log(token, 'token')
    console.log(pathname, 'line 10')
    
    if(!token){
        console.log(pathname, 'line 13')
        if (pathname !== '/') {
            return NextResponse.redirect(new URL('/', request.url));
        }
        return NextResponse.next()
    }

    console.log(pathname, 'line 15')
    try {
        if(token){
            
            axiosSecure.defaults.headers['Authorization'] = `Bearer ${token}`;
            const res = await axiosSecure.post('/secure-test')

        console.log(pathname, 'line 22')

        if(res.data){
            if(res.data.auth === false){
                const response = NextResponse.redirect(new URL('/', request.url))
                
                console.log(pathname, 'line 33')

                response.cookies.delete('token')
                
                return response
            }

            console.log(res.data)

            console.log(pathname, 'line 29')

            if(pathname === "/"){
                console.log(pathname)
                return NextResponse.redirect(new URL('/chat', request.url))
            }
            return NextResponse.next();
        } else {

            console.log(pathname, 'line 38')

            return NextResponse.redirect(new URL('/', request.url))
        }
        }
    } catch (error) {
        console.log(error);
    console.log(pathname, 'line 45')
        return NextResponse.redirect(new URL('/', request.url))
    }
    
};


export const config = {
    matcher: ['/', '/chat/:path*'],
};


