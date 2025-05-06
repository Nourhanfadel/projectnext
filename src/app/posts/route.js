import { posts } from "./data";

export async function GET() {
    return Response.json(posts)
    
}

export async function POST(req) {
    const post =await req.json()
    const newPost={
        id:posts.length +1,
        name:post.name,
        details:post.details
    }
    posts.push(newPost)
    return new Response(JSON.stringify(newPost))
    
}

export async function PUT(req) {
    const { id, name, details } = await req.json();
    const index = posts.findIndex((p) => p.id === id);
    if (index !== -1) {
      posts[index] = { id, name, details };
      return Response.json(posts[index]);
    }
    return new Response("Post not found", { status: 404 });
  }
  
  export async function DELETE(req) {
    const { id } = await req.json();
    const index = posts.findIndex((p) => p.id === id);
    if (index !== -1) {
      const deleted = posts.splice(index, 1);
      return Response.json(deleted[0]);
    }
    return new Response("Post not found", { status: 404 });
  }