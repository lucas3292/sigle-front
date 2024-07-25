import Styles from "./inputGeneral.module.css"
interface IProps{
    text: string
    type:string
    onChangeFunction: any
    value: string |number
}
export default function InputGeneral(props:IProps){
    return(
        <div className={Styles.inputContainer}>
            <label className={Styles.labelInputContainer}>{props.text}</label>
            <input className={Styles.fieldInputContainer} 
                value={props.value}
                onChange={props.onChangeFunction}
                type={props.type}></input>
        </div>
    )
}