
import  redirect from 'next/dist/server/api-utils';
import Link from 'next/link';
import React, { use } from 'react'


async function Users() {
    let data
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
         data = await response.json();
        // console.log(data);


  return (
    <div className="bg-gray-100 flex flex-row flex-wrap justify-between pt-16 p-4">
    
        {data.map((user) => {
            return (
                <div key={user.id}>
                    <div className="bg-white shadow-md rounded-lg p-4 mb-4 ">
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-gray-600">{user.phone}</p>
                        <p className="text-gray-600">{user.website}</p>
                        <Link href={`/user/${user.id}`} type="button"  class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                            details</Link>
                    </div>
          
                    
                </div>

                
            )
        }
        )}
                        <Link href="/login">Login</Link>
    </div>
  )
}

export default  Users;
