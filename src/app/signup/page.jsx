import SignUpForm from "@/components/authenticate/SignUpForm"


const signup = async() => {
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <SignUpForm />
      </div>
    </div>
  )
}

export default signup
