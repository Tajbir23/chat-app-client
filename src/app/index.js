"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const { default: axiosPublic } = require("@/components/api/usePublicAxios");

const handleSubmit = async(e) => {
    
    
    const email = e.get('email')
    const password = e.get('password')

    try {
      const res = await axiosPublic.post('/api/login', { email, password });

      if(res.data){
        console.log(res.data)
        cookies().set('token', res.data, {
          path: '/',
          maxAge: 60 * 60 * 24 * 365,
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production'
        });
        redirect('/chat')
      }
    } catch (error) {
      console.log(error.message)
    }
  };

  export default handleSubmit