import ItemDetail from "./ItemDetail"
import { useState } from "react"
import Product from "../product.json"
import { useParams } from "react-router"


const ItemDetailContainer = () => {
  const { id } = useParams()
  const [productos, setProductos] = useState([])
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Product.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        const productoFilter = Product.filter((producto) => producto.id == id);
        resolve(productoFilter)
      }, 2000)
    })
  }


  async function fetchingProduct() {
    try {
      const datosFetched = await getDatos();
      setProductos(datosFetched)
    } catch (err) {
      console.log(err);
    }
  }

  fetchingProduct()
  return <ItemDetail productos={Product} />
}

export default ItemDetailContainer;
