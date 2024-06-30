'use client';

import apiClient from "@/components/api/apiClient";
import axiosPublic from "@/components/api/usePublicAxios";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const res = await axiosPublic.post('/api/login', { email, password });
      console.log(res,'res')
      if(res.data){
        localStorage.setItem("token", `Bearer ${res.data}`);
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${res.data}`;
        router.push("/chat");
      }
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email">Email</label>
          <input className="border p-2 w-full rounded" type="email" name="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="mb-6">
          <label className="block mb-1" htmlFor="password">Password</label>
          <input className="border p-2 w-full rounded" type="password" name="password" id="password" placeholder="Enter your password" required />
        </div>
        <button className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600" type="submit">Login</button>
      </form>
    </div>
  );
}
