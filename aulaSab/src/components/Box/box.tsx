import { ReactNode } from "react"
import Styles from "./box.module.css"
interface IProps{
    children:ReactNode
}
export default function Box(props:IProps){
    return (
        <div className={Styles.boxContainer}>
            {props.children}
        </div>
    )
}