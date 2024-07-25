import { ConfigProvider, Table } from 'antd'
import Styles from "./tableItensAxios.module.css"

import { ColumnType } from 'antd/es/table';
import ButtonGeneral from '../Bottons/buttonGeneral';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

interface IItem {
    key:number;
    id: number;
    name: string;
    cost: number;
    power: number;
    skill: string;
    marketId: number;
    links?: {
        rel: string;
        action: string;
        href: string;
        type: string;
    }[];
}


export default function TableItensAxios(){
    
    const [item,setItem] = useState<IItem[]|[]>([])
    const fetchItems = () => {
        axios.get<IItem[]>("http://localhost:5112/api/item/v1")
            .then(response => {
                const filteredData = response.data.map(({ links, ...rest }) => ({
                    ...rest,
                    key:rest.id
                }));
                setItem(filteredData);
            })
            .catch(error => {
                console.error('Error fetching items:', error.response ? error.response.data : error.message);
            });
    };
    const deletItems = (id:number) => {
        axios.delete(`http://localhost:5112/api/item/v1/${id}`)
            .then(response => {
                console.log(response.status)
            })
            .catch(error => {
                console.log(error.status)
                console.error('Error fetching items:', error.response ? error.response.data : error.message);
            });
    };
    const deletActions = (id:number)=>{
        deletItems(id);
    }
    useEffect(() =>{
        fetchItems();
    },[])
    
    const keysItens = () =>{
        const keys = Object.keys(item[0]);
        const columns:any = keys.map(key => ({
            title: key, 
            dataIndex: key,
            key: key+1,
            width: 200,
        }));
        columns.push({
            title: 'action',
            dataIndex: 'action',
            key: 'action',
            width: 100,
            render: (_text: any, record: any) => 
                    <div style={{width:'90%', height:'30px', display:'flex', alignItems:'center'}}>
                        <Link to={`/itens/${record.id}`} style={{width:'100%', height:'100%', marginInline:'10px'}}>
                            <ButtonGeneral onClinckFunction={()=> null}>
                            edit
                            </ButtonGeneral>
                        </Link>
                        
                        <ButtonGeneral onClinckFunction={()=>deletActions(record.id)}>
                        delete
                        </ButtonGeneral>
                    </div>
          });
        return columns
    }
    const columns  = item.length === 0? null: keysItens();
    return(
        <div className={Styles.containerTable}>
            <Table pagination={false} columns={columns} dataSource={item} rowKey="nome"/>
        </div>

    )   
       
}