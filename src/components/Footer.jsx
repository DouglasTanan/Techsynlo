import Logo from "../assets/img/logo_binting.png"
import insta_rede from "../assets/img/insta.png"
import youtube_rede from "../assets/img/youtube.png"
import linkedin_rede from "../assets/img/linkedinn.png"
import facebook_rede from "../assets/img/face.png"
import "./Footer.css"
function Footer(){
    return(
        <>
        <footer>
        <img src={Logo} alt="" id="Logoo"/>
        <div id="link_1">
            <a href="#">Sobre nós</a><a href="#">Contato</a><a href="#">Blog</a><a href="#">Ajuda</a>
        </div>

        <div id="link_2">
           <a href="#">Trabalhe conosco</a><a href="#">Suporte</a><a href="#">Politica de Privacidade</a><a href="">Termos de uso</a>
        </div>

        <div id="link_3"><a href="#">Parcerias</a><a href="#">Newsletter</a><a href="#">Acessibilidade</a><a href="#">Carreiras</a></div>

        <div id="imagens_rede">
            <img src={facebook_rede} alt="" /><img src={insta_rede} alt="" /><img src={youtube_rede} alt="" /><img src={linkedin_rede} alt="" />
        </div>
        </footer>
        </>
    )
}
export default Footer;