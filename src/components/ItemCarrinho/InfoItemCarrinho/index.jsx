import React from "react";
import "./styles.css";

const InfoItemCarrinho = ({ itemCarrinho }) => {
  return (
    <div className="mx-4 mx-md-2 text-center text-md-start descricao">
      <p className="fw-semibold fs-4">{itemCarrinho.titulo}</p>
      <p className="m-0">{itemCarrinho.descricao}</p>
    </div>
  );
};

export default InfoItemCarrinho;
