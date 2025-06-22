import "./Launcher.css"
import img1 from"./assets/img/money.png"
import FundoDesaparecendo  from "./SumirFundo.jsx";
function Launcher(){
    
return(
    
    <>
   
    <div id="launcher_dad">
    <div id="launcher">
        <h1 id="h1_text">O <span style={{color: "Red"}}>P</span>
        <span style={{color: "blue"}}>o</span><span style={{color: "purple"}}>d</span><span style={{color: "gray"}}>e</span><span style={{color: "pink"}}>r</span> vive em sua decisão, sempre.</h1>

        <p id="p_text">Acompanhe seus gastos, defina metas,
Organize sua vida financeira de forma simples e inteligente.</p>
<button id="Saiba">Saiba mais</button>
    </div>
    <img src={img1} alt="" id="img1"/>
     
    </div>
     <FundoDesaparecendo/>
    </>
    
)
}
export default Launcher;