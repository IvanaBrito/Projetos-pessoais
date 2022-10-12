import React from 'react';
import Style from './scss/index.module.scss';
import SecaoTextoImg from '../components/secao-textoImg';
import SecaoItem from '../components/secao-items';


function App() {
  return (
    <div className={Style.App}>
      <head>
        <div className={Style.header}>
          <h1>Testando React</h1>
        </div>
        <div className={Style.menu}>
          <div className={Style.traco1}></div>
          <div className={Style.traco2}></div>
          <div className={Style.traco3}></div>
        </div>
      </head>
      <SecaoTextoImg 
        titulo="Secao 2" 
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu venenatis massa. Donec ac felis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sodales at nulla non commodo. Nulla vitae ullamcorper ex, in sollicitudin risus. Vivamus vel vestibulum nulla. Aenean volutpat ac lectus eget consectetur. Phasellus in eleifend orci."
      />
      <SecaoTextoImg 
        titulo="Secao 3" 
        info2="info2"
        texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu venenatis massa. Donec ac felis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sodales at nulla non commodo. Nulla vitae ullamcorper ex, in sollicitudin risus. Vivamus vel vestibulum nulla. Aenean volutpat ac lectus eget consectetur. Phasellus in eleifend orci."
      />
      <SecaoItem titulo="Secao 4"/>
    </div>
  );
}

export default App;
