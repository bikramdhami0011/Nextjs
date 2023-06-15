"use client"
import {useRouter}from "next/navigation"
import Link from "next/link"
export default function Home() {

  const routers=useRouter();
  return (
    <>

    <main className="">
     <h1>hello</h1>
     <button onClick={()=>{
      return routers.push("/login")
     }}>click to go login</button>
     <br />
     <button onClick={()=>routers.push("/about")}> go about</button>
     <Link href='/login'>go login</Link>
    </main>
     </>
  )
}
