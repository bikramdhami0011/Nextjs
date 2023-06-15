'use client'
import { useRouter } from "next/navigation";
import './login.css'
const About=()=>{
    const router=useRouter();
    return (<div>
        <h1 className="heading"> this is about page </h1>
        {/* <button onClick={()=>{return router.push('/about/stdabout')}}>goto std about</button>
        <br />
        <button onClick={()=>{return router.push('/about/techabout')}}>goto techabout </button> */}
        </div>
    )
}
export default About;