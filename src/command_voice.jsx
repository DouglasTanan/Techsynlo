import mic_audio_link from "../src/assets/audio/mic_audio.mp3";

async function call_mic(){
  
    document.getElementById('audio_start_api').style.scale = "1.3";
    document.getElementById('audio_start_api').style.backgroundImage = "url('../src/assets/img/microfone_on.png')"
    const mic_audio = new Audio(mic_audio_link);
    mic_audio.play();
    const palavroes = [ 
        "merda",
        "caralho",
        "porra",
        "foda-se",
        "desgraçado",
        "imbecil",
        
        "vagabundo",
        "puta",
        "piranha",
        "cu",
        "bosta",
        "arrombado",
        "viado",
        "cuzão",
        "bixona"]// array de palavroes pra substituição por *******
    
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'pt-BR'; // Português Brasil
    recognition.interimResults = true;
    recognition.start();
    
    recognition.onresult = function(event) {
      const resultado = event.results[0][0].transcript;
      const resultado_formatado_symbols = resultado.replace(/[.,?!]/g,'');// substituindo simbolos 
      let resultado_formatado_PBC = resultado_formatado_symbols;
      palavroes.forEach(palavra =>{
        resultado_formatado_PBC = resultado_formatado_PBC.replace(palavra,"*".repeat(palavra.length))
      });
      recognition.onend = function(){ // função que aciona um evento após o microfone desligar
         document.getElementById('audio_start_api').style.scale = "1";
         document.getElementById('audio_start_api').style.backgroundImage = "url('../src/assets/img/microfone.png')"
      };
      
      document.getElementById('search_barra').value = resultado_formatado_PBC;
}
}

export default call_mic;