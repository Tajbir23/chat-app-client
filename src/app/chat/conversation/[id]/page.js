
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Chat from "@/components/chat/Chat"
import { getServerSession } from "next-auth"


const conversation = async({params}) => {
  const session = await getServerSession(authOptions);
  console.log(session, 'session')
  return (
    <div className="h-screen">
      <Chat id={params} />
    </div>
  )
}

export default conversation