import React from "react";
import Style from "./index.module.scss";

interface Props{
    titulo: React.ReactNode,
    texto: React.ReactNode,
    info2?: React.ReactNode,
    logo: string,
    id: string
}

function SecaoTextoImg({titulo, texto, info2, logo, id} : Props){
    return(
        <div className={Style.flex} id={id}>
            <div data-info={info2}>
            <h2>{titulo}</h2>
            <p>{texto}</p>
            </div>
            <div className="img1">
                <img src={logo} alt="Logo" />
            </div>
        </div>
    )
}
export default SecaoTextoImg;