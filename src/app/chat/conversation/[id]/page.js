
import Chat from "@/components/chat/Chat"



const conversation = async({params}) => {
  return (
    <div className="h-screen">
      <Chat id={params} />
    </div>
  )
}

export default conversation