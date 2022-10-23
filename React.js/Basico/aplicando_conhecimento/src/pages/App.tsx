import React, { useState } from 'react';
import Style from './scss/index.module.scss';
import SecaoTextoImg from '../components/secao-textoImg';
import SecaoItem from '../components/secao-items';
import collecting from 'assets/src/collecting.svg';
import music from 'assets/src/happy_music.svg';
import classNames from 'classnames';
import menus from './menu.json';

function App() {
  const [menu, setMenu] = useState(false);
  return (
    <div className={Style.App}>
      <head>
        <div className={Style.header}>
          <h1>Testando React</h1>
        </div>
        <button className={classNames({
          [Style.menu]: true,
          [Style.menu__aberto]: menu
        })} onClick={()=>setMenu(!menu)}>
          <div className={Style.traco1}></div>
          <div className={Style.traco2}></div>
          <div className={Style.traco3}></div>
        </button>
        <div className={classNames({
          [Style.lista_menu]:true,
          [Style.lista_menu__aberta]: menu
        })}>
          <ul>
            {menus.map((menu)=>(
              <li>
              <a href={menu.link} onClick={()=>setMenu(false)}>{menu.nome}</a>
            </li>
            ))}
          </ul>
        </div>
      </head>
      <SecaoTextoImg 
        titulo="Secao 2" 
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu venenatis massa. Donec ac felis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sodales at nulla non commodo. Nulla vitae ullamcorper ex, in sollicitudin risus. Vivamus vel vestibulum nulla. Aenean volutpat ac lectus eget consectetur. Phasellus in eleifend orci."
        logo={collecting}
        id="secao2"
      />
      <SecaoTextoImg 
        titulo="Secao 3" 
        info2="info2"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu venenatis massa. Donec ac felis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sodales at nulla non commodo. Nulla vitae ullamcorper ex, in sollicitudin risus. Vivamus vel vestibulum nulla. Aenean volutpat ac lectus eget consectetur. Phasellus in eleifend orci."
        logo={music}
        id="secao3"
      />
      <SecaoItem titulo="Secao 4" id="secao4"/>
    </div>
  );
}

export default App;
