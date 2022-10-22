import React from "react";
import Style from "./index.module.scss";
import Item from "./itens";

interface Props{
    titulo: React.ReactNode,
}

function SecaoItem({titulo}:Props){
    return(
        <div className={Style.background}>
            <h2>{titulo}</h2>
            <div className={Style.flex}>
                <Item 
                    titulo="item 1" 
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu venenatis massa."
                />
                <Item 
                    titulo="item 2" 
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu venenatis massa."
                />
                <Item 
                    titulo="item 3" 
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu venenatis massa."
                />
            </div>
        </div>
    )
}

export default SecaoItem;