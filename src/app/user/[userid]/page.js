import { redirect } from 'next/dist/server/api-utils';
import { title } from 'process';
import React from 'react';


// export async function genrateStaticParams(){
//   return

// }

export async function generateMetadata(params){
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`);
   const data = await response.json();
   return{
    title:data.name
   }


  
}

async function Userid({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`);
  const data = await response.json();

  async function goback(){
    "use server"
    redirect("/")
  }

  return (
    <div className="bg-gray-100 flex flex-col pt-16 p-4">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p className="text-gray-600">{data.email}</p>
      <p className="text-gray-600">{data.phone}</p>
      <p className="text-gray-600">{data.website}</p>

      <form action={goback}>
        <button className='btn btn primary'>Go back</button>
      </form>
      
    </div>
  );
}

export default Userid;
