import "./App.css";
import Header from "./components/Header";
import Categorias from "./components/Categorias";
import CaixaMensagem from "./components/CaixaMansagem";

import PromocoesTupperware from "./components/promocoesTupperware";
import PromocoesTelefone from "./components/promocoesTelefone";


export default function App(){
  return <div className ="fundo"> 
  <Header></Header>
  <Categorias></Categorias>
  <CaixaMensagem></CaixaMensagem>
  
  <h1> Promoções em Tupperware</h1>
  <PromocoesTupperware></PromocoesTupperware>
  <h2> Promoções em Telefones </h2>
  <PromocoesTelefone></PromocoesTelefone> 


  </div>
}