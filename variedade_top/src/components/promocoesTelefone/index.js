import "./index.css"

import RedmiNote9 from "../../imagens/xiaomiRedmiNote9.jpg"
import RedmiNote12 from "../../imagens/xiaomiRedmiNote12.jpg"
import GalaxyA14 from "../../imagens/SamsungGalaxyA14.jpg"
import GalaxyA3 from "../../imagens/SamsungGalaxyA3.jpg"
import Iphone13 from "../../imagens/AppleIphone13.jpg"




export default function PromocoesTelefone(){
    return <div className="PromocoesTelefone">
    
    

    <div className="RedmiNote12"> 
            
            <div className ="nomeRedmi12"> Xiaomi Redmi Note 12  </div>
            <img id="RedmiNote12" src={RedmiNote12} alt=""></img>
            <div className= "tamanhoRedmi12"> 6.67 polegadas, Traseira em plástico fosco </div>
            <p></p>
            <div className= "precoRedmi12"> R$ 1447,90 </div>  
        
        </div>

        <div className="RedmiNote9"> 
            
            <div className ="nomeRedmi9"> Xiaomi Redmi Note 09  </div>
            <img id="RedmiNote9" src={RedmiNote9} alt=""></img>
            <div className= "tamanhoRedmi9"> 6.53 polegadas, Traseira em vidro </div>
            <p></p>
            <div className= "precoRedmi9"> R$ 849,90 </div>  
        
        </div>

        <div className="GalaxyA14"> 
            
            <div className ="nomeGalaxyA14"> Samsung Galaxy A14  </div>
            <img id="GalaxyA14" src={GalaxyA14} alt=""></img>
            <div className= "tamanhoGalaxyA14"> 6.6 polegadas, Traseira em vidro </div>
            <p></p>
            <div className= "material">  </div>
            <div className= "precoGalaxyA14"> R$ 899,10 </div>  
        
        </div>

        <div className="GalaxyA3"> 
            
            <div className ="nomeGalaxyA3"> Galaxy A3  </div>
            <img id="GalaxyA3" src={GalaxyA3} alt=""></img>
            <div className= "tamanhoGalaxyA3"> 6.5 polegadas, Traseira em plástico </div>
            <p></p>
            <div className= "precoGalaxyA3"> R$ 494,10 </div>  
        
        </div>

        <div className="Iphone13"> 
            
            <div className ="nomeIphone13"> Iphone 13  </div>
            <img id="Iphone13" src={Iphone13} alt=""></img>
            <div className= "tamanhoIphone13"> 6.1 polegadas, Traseira em vidro </div>
            <p></p>
            <div className= "precoIphone13"> R$ 3999,90 </div>  
        
        </div>




    </div>
}
