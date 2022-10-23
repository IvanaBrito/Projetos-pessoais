import React from "react";
import Style from './index.module.scss';

interface Props{
    titulo: React.ReactNode,
    texto: React.ReactNode,
    img: string
}

function Item({titulo, texto, img}:Props){
    return(
        <div className="info1">
            <div className={Style.borda}>
                <img src={img} alt="Imagem" />
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default Item;