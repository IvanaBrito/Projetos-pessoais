import React from "react";
import Style from "./index.module.scss";
import {iTem} from "../../types/itemConteudo";

interface Props{
    titulo: React.ReactNode,
    texto: React.ReactNode,
    info2?: React.ReactNode
}

function SecaoTextoImg({titulo, texto, info2} : Props){
    return(
        <div className={Style.flex}>
            <div data-info={info2}>
            <h2>{titulo}</h2>
            <p>{texto}</p>
            </div>
            <div className="img1">
            
            </div>
        </div>
    )
}
export default SecaoTextoImg;