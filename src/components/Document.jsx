import React from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState, useParam } from "react";
const Document = () => {
    const {id}= useParam
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fb = getFirestore()
        const Item = doc(fb, "bebidas", `${id}`)
        getDoc(Item).then((snapshot) => {
            if (snapshot.exists()) {
                const docs = snapshot.product()
                setProduct(docs)
            }else{
                console.log("No se encuentra producto")
            }
        })
    }, [])



    return (
        <>
            <h1>Producto</h1>
            { 
                <div>
                    <h4>Producto : {product.name} </h4>
                    <p>Categoria:{product.category}</p>
                    <p>Precio: ${product.price}</p>
                </div>
            }
        </>
    )
}

export default Document