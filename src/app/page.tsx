import Navbar from "@/app/components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="py-4 w-full h-[90vh]">

      {/* Wrapper */}
      <div className="w-full h-full">
        <div className="h-full lg:max-w-xs">
          {/* Holds all the chats */}
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
