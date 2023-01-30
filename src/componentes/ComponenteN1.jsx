import React from 'react'
import { useState } from "react"



const CmponenteN1 = () => {
    const [nombre, setNombre] = useState("Hook")
    
    return (
        <>
        <h1>{nombre}</h1>
        <button onClick={()=>setNombre("Nuevo Hook")}>cambiar nombre</button>
        </>
    )
}

export default CmponenteN1