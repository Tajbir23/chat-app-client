
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
            
            const res = await fetch(`http://localhost:5000/api/secure-test`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                cache: 'force-cache'
            })

            if(!res.ok){
                return console.log(`status : ${res.status} line 36`)
            }

            const data = await res.json()

        console.log(data, 'line 22')

        if(data){
            if(data.auth === false){
                const response = NextResponse.redirect(new URL('/', request.url))
                
                console.log(pathname, 'line 33')

                response.cookies.delete('token')
                
                return response
            }

            console.log(data, 'data')

            console.log(pathname, 'line 51')

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
        console.log(error.message);
    console.log(pathname, 'line 45')
        return NextResponse.redirect(new URL('/', request.url))
    }
    
};


export const config = {
    matcher: ['/', '/chat/:path*'],
};


