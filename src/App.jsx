import ComponenteN1 from "./components/ComponenteN1"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App() {
  return(
  <>
    <NavBar/>
    <ItemListContainer mensaje="Bienvenido"/>
    <ComponenteN1
    />
  </>
)
  
}



export default App
