import "./Cards.css"

function Cards({first_m,url_img,second_m}){
    return(
        <>
        
        <div id="square">
            <img src={url_img} alt="imagem aqui" />
            <div id="second_square">
           <h1>{first_m} </h1>
           <p>{second_m}</p>
            <button>Acessar</button>
            </div>
        </div>
        </>
    )
}

export default Cards;
