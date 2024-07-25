import { Link } from "react-router-dom";
import ButtonGeneral from "../../components/Bottons/buttonGeneral";
import TableItens from "../../components/TableItens/tableItens";
import TableItensAxios from "../../components/TableItensAxios/tableItensAxios";
import Styles from "./home.module.css"
export default function Home(){
    return (
        <div className={Styles.containerPage}>
            <div className={Styles.containerHeaderPage}>
                <div className={Styles.containerHeaderButtonPage}>
                    <Link to='/itens'>
                        <ButtonGeneral onClinckFunction={()=>null}>
                            Criar novo
                        </ButtonGeneral>
                    </Link>
                    
                </div>
            </div>
            {/* <TableItens></TableItens> */}
            <TableItensAxios></TableItensAxios>
        </div>
            
        
    );
}