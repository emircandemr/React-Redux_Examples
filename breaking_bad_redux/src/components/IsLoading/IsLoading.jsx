import React from 'react'
import HashLoader from "react-spinners/HashLoader";
const IsLoading = () => {
  return (
    <div style={{padding:20 , width:"100%", height:"100vh", display:"flex" , justifyContent:"center", alignItems:"center" }} >
        <HashLoader color="#ddd" size={150}/>
    </div>
  )
}

export default IsLoading