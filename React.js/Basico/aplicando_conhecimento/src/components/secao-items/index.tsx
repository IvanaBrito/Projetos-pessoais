import React from "react";
import Style from "./index.module.scss";
import Item from "./itens";
import feeling_happy from 'assets/src/feeling_happy.svg';
import young_happy from 'assets/src/young_happy.svg';
import after_rain from 'assets/src/after_rain.svg';
import classNames from 'classnames';
import Buscador from './buscador';

interface Props{
    titulo: React.ReactNode,
    id: string
}

function SecaoItem({titulo, id}:Props){
    return(
        <div className={Style.background} id={id}>
            <div className={classNames({
                [Style.secao4_titulo]:true,
                [Style.flex]:true
            })}>
                <h2>{titulo}</h2>
                <Buscador />
            </div>
            <div className={Style.flex}>
                <Item 
                    titulo="item 1" 
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu venenatis massa."
                    img={feeling_happy}
                />
                <Item 
                    titulo="item 2" 
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu venenatis massa."
                    img={young_happy}
                />
                <Item 
                    titulo="item 3" 
                    texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu venenatis massa."
                    img={after_rain}
                />
            </div>
        </div>
    )
}

export default SecaoItem;