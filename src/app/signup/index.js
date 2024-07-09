"use server"

import baseUrl from "@/components/api/baseUrl";
import { cookies } from "next/headers";

  const handleSubmit = async({ name, email, password, image }) => {
    const api = baseUrl()
    try {
      
      const res = await fetch(`${api}/api/signup`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({name, email, password, image})
      })

      const {user} = await res.json()
      
      if(user){
        console.log(user, 'signup')
        const token = await fetch(`${api}/api/login`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({email,password})
        })

        const data = await token.json()
        console.log(data, 'signup')

        if(data.token){
          console.log(data.token)
          cookies().set({
            name: 'token',
            value: data.token,
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict', // 'strict' or 'lax'
          })
          return data.token
        }
      }
    } catch (error) {
      if(error.response?.data.message){
        console.log(error?.response?.data?.message);
      }
    }
  }

  export default handleSubmit