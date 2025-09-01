import React from 'react'
import logo from "./assets/6744.jpg";


const Topnav = () => {
    return (
    <div id='top-navs' style={{width: "100%", display:"flex", gap: "400px", alignItems: "center", justifyContent: "center",backgroundColor: "#3765a9ff", paddingTop: "0px", marginTop: "-6px", borderRadius: "10px"}}>
      <img src={logo} alt="hello" style={{width: "70px", height: "40px"}} />  
      <h1 style={{margin: "0", padding: 0, color: "black"}}>ENUGU</h1>
      <h3>12:66pm</h3>  
    </div>    
    )
}

export default Topnav