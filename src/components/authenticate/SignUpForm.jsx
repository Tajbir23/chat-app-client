"use client"
import handleSubmit from "@/app/signup"
import { CldUploadWidget } from "next-cloudinary"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"


const SignUpForm = () => {
  const router = useRouter()
  const [imageUrl, setImageUrl] = useState(null);

  const onSubmit = async(e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    // const image = e.target.image.files[0]

    // const formData = new FormData(e.target)
    const data = await handleSubmit({ name, email, password, image: imageUrl })
    if(data){
      router.push("/chat")
    }
  }
  return (
    <form onSubmit={onSubmit} className="space-y-6" encType="multipart/form-data">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Username" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <CldUploadWidget
          cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
          uploadPreset="your-upload-preset"
          onSuccess={(result) => setImageUrl(result.info.secure_url)}
        >
          {({ open }) => (
            <button type="button" onClick={open} className="mt-1 block w-full text-sm text-gray-500">
              Upload Image
            </button>
          )}
        </CldUploadWidget>
        {imageUrl && <Image height={100} width={100} src={imageUrl} alt="Uploaded image" className="mt-2 h-20 w-20 object-cover" />}
            {/* <input 
              type="file" 
              name="image" 
              className="mt-1 block w-full text-sm text-gray-500"
            /> */}
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </button>
          </div>
        </form>
  )
}

export default SignUpForm