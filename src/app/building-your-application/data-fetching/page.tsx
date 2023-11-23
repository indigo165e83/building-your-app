//参考 https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#async-and-await-in-server-components
import { NextResponse } from 'next/server'

async function getData() {
  const res = await fetch('http://localhost:8000/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  //return res
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
  console.log("@data@", data)
  console.log("@data@", data[0].title)

  return (
    <div>This is Fetch sample
      {data.map((post: any) => (
        <div key={post.id}>
          <h2>
            id:{post.id}
          </h2>
          <h2>
            title:{post.title}
          </h2>
          <p>
            author:{post.author}
          </p>
        </div>
      ))}
    </div>
  )
  
}