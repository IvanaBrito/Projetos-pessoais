import React from "react";
import Style from './index.module.scss';

interface Props{
    titulo: React.ReactNode,
    texto: React.ReactNode,
}

function Item({titulo, texto}:Props){
    return(
        <div className="info1">
            <div className={Style.borda}>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </div>
        </div>
    )
}

export default Item;