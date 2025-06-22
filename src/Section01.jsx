import Cards from "../src/components/Cards"
import "../src/components/section11.css"
import img1 from "./assets/img/549.jpg"
import img2 from "./assets/img/imagem2.jpg"
import img3 from "./assets/img/imagem3.jpg"
import img4 from "./assets/img/imagem4.jpg"
function Section01(){
    
    return(
        <>
        <section id="section11">
         <Cards first_m={"Novidades"} url_img={img2} second_m={"Novos recursos disponiveis."}/> 
         <Cards first_m={"Conheça"} url_img={img1}second_m={"Aprendar a evoluir."}/> 
         <Cards first_m={"Invista"} url_img={img4} second_m={"Evolua nos seus resultados."}/> 
         <Cards first_m={"Serviços"} url_img={img3} second_m={"Funcionaldade disponivel."}/>
        </section>
        </>
    )
}
export default Section01;