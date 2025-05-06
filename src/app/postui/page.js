"use client"
import React, { use, useState } from 'react'
import { posts } from '../posts/data'
import { title } from 'process'
import { sign } from 'crypto'



 function Postui() {
   const[post,setpost]= useState([])
   const[inputname,setinputname]=useState("")
   const[inputdetails,setinputdetails]=useState("")
   const [editId, setEditId] = useState(null);


   
  async function getpost() {
 const res=await fetch("http://localhost:3000/posts")
 const data=await res.json()
 setpost(data)
 console.log(data)
   }

  async function addpost(){
   await fetch("http://localhost:3000/posts",{
        method:"POST",
        body:JSON.stringify({name:inputname, details:inputdetails}),
        headers:{
            "content-Type":"applicatin/json"
        }
    })
    setinputname("")
    setinputdetails("")
    getpost()

   }

   async function updatepost() {
    await fetch("http://localhost:3000/posts",{
        method:"PUT",
        body: JSON.stringify({ id: editId, name: inputname, details: inputdetails }),
        headers: { "Content-Type": "application/json" },

    })
    setinputname("")
    setinputdetails("")
    setEditId(null)
    getpost()
}

 async function deletepost(id) {
    await fetch("http://localhost:3000/posts", {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      getpost();
 }

 function handleEdit(p) {
    setinputname(p.name || "")
    setinputdetails(p.details || "")
    setEditId(p.id)
  }




  return (
    <>

<div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Posts Management</h1>

      <table className="w-full table-auto border border-gray-300 mb-6">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Details</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {post.map((post) => (
            <tr key={post.id} className="text-center">
              <td className="border px-4 py-2">{post.id}</td>
              <td className="border px-4 py-2">{post.name}</td>
              <td className="border px-4 py-2">{post.details}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="bg-yellow-400 px-3 py-1 rounded text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() => deletepost(post.id)}
                  className="bg-red-500 px-3 py-1 rounded text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={getpost}> Get data</button>
      </div>

      <div className="border-t pt-4">
        <h2 className="text-xl font-semibold mb-2">{editId ? "Edit Post" : "Add New Post"}</h2>
        <div className="flex gap-4 mb-4">
          <input
            value={inputname}
            onChange={(e) => setinputname(e.target.value)}
            placeholder="Enter name"
            className="border px-3 py-2 flex-1 rounded"
          />
          <input
            value={inputdetails}
            onChange={(e) => setinputdetails(e.target.value)}
            placeholder="Enter details"
            className="border px-3 py-2 flex-1 rounded"
          />
        </div>
        {editId ? (
          <button onClick={updatepost} className="bg-blue-600 text-white px-6 py-2 rounded">
            Update Post
          </button>
        ) : (
          <button onClick={addpost} className="bg-green-600 text-white px-6 py-2 rounded">
            Add Post
          </button>
        )}
      </div>



    </div>
  
    
    
    
    
    </>
  )
}

export default Postui