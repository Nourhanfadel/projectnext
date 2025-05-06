// import Image from "next/image";
import Users from "./user/page";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
   <div className="p-4 bg-white rounded-lg shadow-md m-8">

  <Users/>

   </div>

    </div>
  );
}