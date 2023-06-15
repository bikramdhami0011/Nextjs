import Link from "next/link"
import './login.css'
export default function about({children}){
    return (<>
           <div>
            {/* <h1>hello this is about navbar</h1> */}
         
       
                <ul className="ul_item">
                    <h1>navbar of about</h1>
                    <li><Link href="/about">about</Link></li>
                    <li> <Link href="/about/stdabout">about student</Link></li>
                    <li>
                    <Link href="/about/techabout">about teacher</Link>
                    </li>
                    
                </ul>
                {children}
          </div>
        </>
    )
};