import Style from './Buscador.module.scss';
import {CgSearch} from 'react-icons/cg';

export default function buscador(){
    return(
        <div className={Style.busca}>
            <input type="text" placeholder="Pesquise pelos itens" />
            <div className={Style.icone}>
                <CgSearch 
                    size={20}
                    color="#6c63ff"
                />
            </div>
        </div>
    )
}