
import { ReactNode } from "react";
import Style from "./buttonGeneral.module.css"
interface IProps{
    onClinckFunction : () => void ;
    children:ReactNode;
}
export default function ButtonGeneral(props:IProps){
    return(
        <button className={Style.btnStyle} onClick={props.onClinckFunction}>
            {props.children}
        </button>
    )
}