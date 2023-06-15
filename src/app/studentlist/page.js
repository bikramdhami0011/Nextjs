import Link from "next/link";
const StList=()=>{
    return (
        <div>
            <h2> Student list </h2>
             <ul>
                this is not working inside the innerhtml of the given content
                <li>
                   <Link href='/studentlist/bikram'>bikram dhami</Link> 
                </li>
                <li>
                   <Link href='/studentlist/anil'>anil Msdjio JS</Link> 
                </li>
                <li>
                   <Link href='/studentlist/rakesh'>rakesh sdkjOI ADJa</Link> 
                </li>
             </ul>
        </div>
    )
}
export default StList;
