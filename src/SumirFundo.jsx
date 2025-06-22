import React, { useEffect, useState } from "react";

const FundoDesaparecendo = () => {
  const [opacidade, setOpacidade] = useState(0); // começa transparente

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const novaOpacidade = Math.min(scrollY / 2000, 1); // aumenta a opacidade ao descer
      setOpacidade(novaOpacidade);
    };

    handleScroll(); // garante opacidade correta no carregamento
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "200vh" }}>
      {/* Camada escura que aparece ao rolar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: `rgba(0, 0, 0, ${opacidade})`,
          pointerEvents: "none",
          zIndex: -1,
          transition: "background-color 0.2s ease"
        }}
      />

     
      
        
      
    </div>
  );
};

export default FundoDesaparecendo;
