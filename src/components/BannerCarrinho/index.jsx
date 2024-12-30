import React from "react";
import bannerCarrinho from "/assets/images/banner-carrinho.png";
import "./styles.css";

export const BannerCarrinho = () => {
  return (
    <img
      className="custom-img"
      src={bannerCarrinho}
      alt="Imagem de uma sacola de compras"
    />
  );
};
