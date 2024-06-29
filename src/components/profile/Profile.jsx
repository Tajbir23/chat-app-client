import Image from "next/image"


const Profile = () => {
  return (
    <div className="space-y-6 sticky top-0 p-4 bg-white border-b border-gray-200 z-50">
          <div className="flex items-center gap-x-2">
            <div className="relative">
            <Image
              
              height={500}
              width={500}
              className="object-cover w-12 h-12 rounded-full"
              src='/image.jpg'
              alt=""
            />
            <span className="absolute bottom-0 w-3 h-3 rounded-full bg-emerald-500 right-1 ring-1 ring-white"></span>
            </div>

            <div>
              <h1 className="text-xl font-semibold text-gray-700 capitalize ">
                Mia John
              </h1>

              <p className="text-sm text-gray-500 ">
                miajohn@merakiui.com
              </p>
            </div>
          </div>
          <div>
            <input type="search" placeholder="Search" className="w-full px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-500" />
          </div>
        </div>
  )
}

export default Profile