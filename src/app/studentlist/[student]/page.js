'use client'
const StdD=(hel)=>{
console.log(hel.params.student)
    return(
        <div>
            <h2>Detail of student</h2>
            <h3>name is {hel.params.student}</h3>
        </div>
    )
}
export default StdD;