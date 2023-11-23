// 参考：https://nextjs.org/docs/app/building-your-application/routing/router-handlers#static-route-handlers
import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('http://localhost:8000/posts')
  //console.log(res)
  const data = await res.json()

  return NextResponse.json({ data })
}