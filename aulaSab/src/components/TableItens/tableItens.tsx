import { ConfigProvider, Table } from 'antd'
import Styles from "./tableItens.module.css"
import './tableItens.module.css'; 
import { ColumnType } from 'antd/es/table';
import ButtonGeneral from '../Bottons/buttonGeneral';

interface IInterface{
    nome: string,
    custo: number,
    classe: string,
    
}

export default function TableItens(){
    const item: IInterface[] = [
        {
            nome: 'sword',
            custo: 23.33,
            classe: 'guerreiro',
        },
        {
            nome: 'sword',
            custo: 23.33,
            classe: 'guerreiro',
        },
        {
            nome: 'sword',
            custo: 23.33,
            classe: 'guerreiro',
        },
        {
            nome: 'sword',
            custo: 23.33,
            classe: 'guerreiro',
        },
        {
            nome: 'sword',
            custo: 23.33,
            classe: 'guerreiro',
        },
        {
            nome: 'shild',
            custo: 23.33,
            classe: 'guerreiro',
        },
        {
            nome: 'knif',
            custo: 23.33,
            classe: 'ladrão',
        },
        {
            nome: 'knif',
            custo: 23.33,
            classe: 'ladrão',
        },
        {
            nome: 'knif',
            custo: 23.33,
            classe: 'ladrão',
        },
        {
            nome: 'knif',
            custo: 23.33,
            classe: 'ladrão',
        },
        {
            nome: 'axe',
            custo: 23.33,
            classe: 'guerreiro',
        },
    ]
    const keysItens = () =>{
        const keys = Object.keys(item[0])
        const columns:any = keys.map(key => ({
            title: key, 
            dataIndex: key,
            key: key,
            width: 200,
        }));
        columns.push({
            title: 'action',
            dataIndex: 'action',
            key: 'action',
            width: 200,
            render: () => 
                    <div style={{width:'90%', height:'30px', display:'flex', alignItems:'center'}}>
                        <ButtonGeneral onClinckFunction={()=>console.log('ok')}>
                        edit
                        </ButtonGeneral>
                        <ButtonGeneral onClinckFunction={()=>console.log('ok')}>
                        delete
                        </ButtonGeneral>
                    </div>
          });
        return columns
    }
    const columns  = keysItens();
    return(
        <div className={Styles.containerTable}>
            <Table pagination={false} columns={columns} dataSource={item} rowKey="nome"/>
        </div>

    )   
       
}