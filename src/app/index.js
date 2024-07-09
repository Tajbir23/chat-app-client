"use server"

import BaseUrl from "@/components/api/baseUrl";
import { cookies } from "next/headers";


const handleSubmit = async({email, password}) => {
    const api = BaseUrl()
    try {

      
      const res = await fetch(`${api}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json()
      console.log(data);
      if(data.token){
        
        cookies().set('token', data.token, {
          path: '/',
          maxAge: 60 * 60 * 24 * 365,
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production'
        });
        
        return data.token
      }
      console.log(data.token);
    } catch (error) {
      console.log(error.message)
    }
  };

  export default handleSubmit