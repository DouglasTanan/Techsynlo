import "./sectio.css"
function Section02({aga1,para,imagem_personas}){

    return(<>
    <div id="history">
         <h1>{aga1}</h1>
         <img src={imagem_personas} alt="imagem here" />
         <p>{para}</p>
    </div>

    </>)
}
export default Section02;