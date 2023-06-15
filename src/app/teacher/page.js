import Link from "next/link"
const Teacher=()=>{
    return (
        <>
        <h1>Name of the teacher</h1>
        <div>
        <h2> Student list </h2>
         <ul>
            this is not working inside the innerhtml of the given content
            <li>
               <Link href='/teacher/bikram'>bikram dhami</Link> 
            </li>
            <li>
               <Link href='/teacher/anil'>anil Msdjio JS</Link> 
            </li>
            <li>
               <Link href='/teacher/rakesh'>rakesh sdkjOI ADJa</Link> 
            </li>
         </ul>
    </div>
   </>
    )
}
export default Teacher;