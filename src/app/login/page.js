 'use client'
 import { useRouter } from "next/navigation";
const Login=()=>{
const router=useRouter();
    return (<>
        <h1> hello this is login page </h1>
        <button onClick={()=>router.push("/about/stdabout")}>goto stdabout</button>
        <br />
        <button onClick={()=>router.push("/")}>goto home</button>
        </>
    )
}
export default Login;