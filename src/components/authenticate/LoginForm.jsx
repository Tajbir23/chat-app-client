"use client"
import handleSubmit from "@/app"
import { useRouter } from "next/navigation"


const LoginForm = () => {
  const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const data = await handleSubmit({ email, password })
    if(data){
      router.push('/chat')
    }
  }
  return (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
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
  )
}

export default LoginForm