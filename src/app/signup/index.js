"use server"

import { cookies } from "next/headers";

const { default: axiosPublic } = require("@/components/api/usePublicAxios");

  const handleSubmit = async({ name, email, password, image }) => {
    // const name = e.get('name')
    // const email = e.get('email')
    // const password = e.get('password')
    // const image = e.get('image')
    
    // const form = e.target;
    // const name = form.name.value;
    // const email = form.email.value;
    // const password = form.password.value;
    // const image = form.image.files[0];
    try {
      const res = await axiosPublic.post('/api/signup', { name, email, password, image });
      
      if(res.data){
        console.log(res.data, 'signup')
        const token = await axiosPublic.post('/api/login', { email, password });
        if(token.data){
          console.log(token.data)
          cookies().set({
            name: 'token',
            value: token.data,
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict', // 'strict' or 'lax'
          })
          return token.data
        //   localStorage.setItem("token", `Bearer ${token.data}`);
        //   router.push("/chat");
        }
      }
    } catch (error) {
      if(error.response?.data.message){
        console.log(error?.response?.data?.message);
      }
    }
  }

  export default handleSubmit