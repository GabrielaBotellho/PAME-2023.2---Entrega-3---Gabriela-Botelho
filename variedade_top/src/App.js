import "./App.css";
import Header from "./components/Header";
import Categorias from "./components/Categorias";
import Promocoes from "./components/promocoes";


export default function App(){
  return <div className ="fundo"> 
  <Header></Header>
  <Categorias></Categorias>
  <Promocoes></Promocoes>
    
    


  </div>
}