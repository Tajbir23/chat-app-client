"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"


const Users = () => {
    const {id} = useParams()
    const dummyArray =  Array.from({length: 500}, (x, i) => i)

    const session = useSession()
    console.log(session)

  return (
    <div className="p-4 flex flex-col gap-y-4">
          {dummyArray.map((item) => {
            
            return <Link href={`/chat/conversation/${item}`} className={`hover:bg-gray-400 p-2 ${Number(id) === item ? 'bg-gray-400' : ''}`} key={item}>
          <div className="flex items-center gap-x-2">
            <div className="relative">
            <Image
              
              height={500}
              width={500}
              className="object-cover w-8 h-8 rounded-full"
              src='/image.jpg'
              alt=""
            />
            <span className="absolute bottom-0 w-3 h-3 rounded-full bg-emerald-500 right-1 ring-1 ring-white"></span>
            </div>

            <div>
              <h1 className="text-base font-semibold text-gray-700 capitalize ">
                Mia John
              </h1>

              <p className="text-xs text-gray-500 ">
                miajohn@merakiui.com
              </p>
            </div>
          </div>
        </Link>
          })}
    </div>
  )
}

export default Users