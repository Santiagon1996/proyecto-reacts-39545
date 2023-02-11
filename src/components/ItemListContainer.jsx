import React from 'react'
import ItemList from './ItemList'
import Product from "../product.json";
import { Center, Heading } from '@chakra-ui/react'
//import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    // const [suma, setSuma] = useState(0)
    // const sumar = ()=>{
    //     setSuma(suma + 1)
    // } para el carrito
    //desable

    // const[mensaje, setMensaje]= useState("Hola")
    // useEffect(()=>{
    //     console.log("componente montado")
    // }, [mensaje])


    // const aplicarDescuento = new Promise ((resolve, reject)=>{
    //     const descuento = true
    //     if(descuento){
    //         resolve("Descuento aplicado")
    //     }else {
    //         reject("No se pudo aplicar el descuento")
    //     }
    // })

    // aplicarDescuento
    // .then((resultado)=>{
    //     console.log(resultado)
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })

    const { category } = useParams()
 
    const mostrarProductos = () => {
        return new Promise((resolve, reject) => {
            if (Product.length === 0) {
                reject(new Error("No hay productos"))
            }
            setTimeout(() => {
                resolve(Product)
            }, 3000);
        })
    }
    async function renderData() {
        try {
            const datosRender = await mostrarProductos()

        } catch (err) {
            console.log(error)
        }
        // .then((resultado) => {
        //     console.log(resultado)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })
    }

    renderData()

    // const arrayMap = productos.map((productos)=>{
    //     console.log(productos)
    // })
    // if (category === undefined) {
    //     return (
    //         <div>
    //             <Center bg="blue" h="50px" color="black" >
    //                 <Heading as="h3" size="2x1" >
    //                     CATALGO
    //                 </Heading>
    //                 <ItemList productos={Product} />
    //             </Center>
    //         </div>
    //     )
    // } else {
        const catFilter = Product.filter((producto) => producto.category === category)
        return (
            <div>
                <Center bg="green" h="100px" color="black">
                    <Heading as="h2" size="2x1">
                        Catalogo de Bebidas
                    </Heading>
                </Center>
                {category ? <ItemList productos={catFilter} /> : <ItemList productos={Product} />}
            </div>
        )
    
}

export default ItemListContainer
// return (
//     <>
//         {/* <h1>{suma}</h1>
//  <button onClick={sumar}>Agregar</button>
//  {/* suma con una funcion */}
//         {/* <button onClick={()=> setSuma(suma + 1)}>SUMAR</button> */}
//         {/* suma con funcion en misma linea */}
//         {/* <button onClick={()=> setSuma (0)}>Reset</button> */}
//         {/* para volver a 0  */}

//         {/* <div>
//   <p>{mensaje}</p>
//   <button onClick={()=> setMensaje("mensaje modificado")}></button>
//  </div> */}
//         {/*

//       {productos.map((item) => {
//           return (
//               <div key={item.id}>
//                   <h1>{item.name}</h1>
//                   <h2>{item.description}</h2>
//                   <h3>{item.stock}</h3>
//               </div>
//           )
//       })} */}


//         {/* <ItemList/> */}

//     </>
// )
// }