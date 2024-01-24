import "./index.css";
import poteTupperwareRoxo from "../../imagens/poteTupperwareRoxo.jpg"
import poteTupperwareRosa from "../../imagens/poteTupperwareRosa.jpg"
import poteTupperwareAzul from "../../imagens/poteTupperwareAzul.jpg"


export default function PromocoesTupperware(){
    return <div className="PromocoesTupperware">
        
        <div className="poteRoxo"> 
            
            <div className ="nomeRoxo"> Tupperware Roxo </div>
            <img id="imgPoteRoxo" src={poteTupperwareRoxo} alt="" ></img>
            <div className= "tamanhoRoxo"> 780ml,  Plástico </div>
            <p></p>
            
            <div className= "materialRoxo">  </div>
            
            <div className= "precoRoxo"> R$ 44,99 </div>
        
        </div>
        
        <div className="poteRosa"> 
            
            <div className ="nomeRosa"> Tupperware Rosa </div>
            <img id="imgPoteRosa" src={poteTupperwareRosa} alt="" ></img>
            <div className= "tamanhoRosa"> 160ml, Plástico </div>
            <p></p>
            <div className= "material">  </div>
            
            <div className= "precoRosa"> R$ 21,99 </div>  
        
        </div>

        <div className="poteAzul"> 
            
            <div className ="nomeAzul"> Tupperware Azul </div>
            <img id="imgPoteAzul" src={poteTupperwareAzul} alt="" ></img>
            <div className= "tamanhoAzul"> 2,6L, Plástico </div>
            <p></p>
            <div className= "material">  </div>
            
            <div className= "precoAzul"> R$ 59,90 </div>  
        
        </div>

        

    </div>
}
