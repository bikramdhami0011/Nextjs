'use client'
const Detail=(cos)=>{
//   console.log(params) if we use in this -->const Detail=({params})=>{
 
    return(<>
        <h1>about catch all segments</h1>
        <li>day:{cos.params.detail[1]}</li>
        <li> lecture:{cos.params.detail[0]}</li>
        </>
    )
}
export default Detail;