
import logo from "../src/assets/img/logo_binting.png";
import lucas from "../src/assets/img/lucasT1.png";
import ana from "../src/assets/img/imgAna.png";
import voice from "./command_voice";
import Section from "./Section01"
import Section02 from "./Sectio.jsx"
import Launcher from "./launcher01.jsx"
import Prefooter from "./Prefooter.jsx"
import Footer from "../src/components/Footer.jsx"

function App() {



 

  const  call_mic = () =>{
    voice();
  };
  return (
    <>  
    

      <header>
        <img src={logo} alt="" id="logo_img" />
        <div id="first_elements">
          <input type="text" placeholder="Pesquisar" id="search_barra" />
          <button id="audio_start_api" onClick={call_mic}></button>
        </div>
        <div id="seconds_elements">
        <button>Home</button>
          <button>Product</button>
          <button>About</button>
          <button>Chat</button>
        </div>
        </header>
     
      
      
        <video src="../src/assets/img/214405.mp4" autoPlay muted loop id="video_bg"></video>
       <Launcher/>
       <Section/>
       <Section02 aga1={"Como o Lucas Tomesco se tornou um sucesso com a plataforma Binting"} para={"Lucas Tomésco transformou sua paixão por felinos selvagens em um santuário que resgata e cuida de leões vítimas de maus-tratos. Com dedicação e apoio da comunidade, o projeto cresceu e se tornou referência nacional."} imagem_personas={lucas}/>
       
      <Section02 aga1={" Ana Cristoferson: Da Organização Pessoal à Liderança em Tecnologia"} para={"Usando a plataforma Binting para organizar suas finanças, Ana ganhou clareza e controle. Em seguida, aplicou esses princípios e tornou‑se CEO da maior empresa de eventos de tecnologia do país, creditando seu sucesso à Binting."}imagem_personas={ana}/>
        <Prefooter/>
        <Footer/>


    
    </>
  );
}

export default App;
