import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/cardapio';
import Inicio from 'pages/inicio';
import NotFound from 'pages/NotFound';
import Prato from 'pages/Prato';
import Sobre from 'pages/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter(){
  return(
    <main className='container'>
      <Router>
        <Menu />
        <Routes> {/* pode ter vários */}
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre/>}/>
          </Route>
          <Route path='prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}