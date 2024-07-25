import { ChangeEvent, useEffect, useState } from "react"
import ButtonGeneral from "../../components/Bottons/buttonGeneral"
import Box from "../../components/Box/box"
import InputGeneral from "../../components/InputGeneral/inputGeneral"
import Styles from "./editItem.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

interface IItem {
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

export default function EditItem(){
    const [item, setItem] = useState<IItem>(
        
        {
        id: 0,
        name: "Sword",
        cost: 2.3,
        power: 3,
        skill: "Double Jumper",
        marketId: 1,
    });

    const navigator = useNavigate();
    const { id } = useParams();
    console.log(id)

    const postItems = (url: string) => {
        axios.post<IItem>("http://localhost:5112/api/item/v1", item)
            .then(response => {
                console.log(response.status);
                navigator(url);
            })
            .catch(error => {
                console.error('Error posting item:', error.response ? error.response.data : error.message);
            });
    };

    const updateItem = (url: string) => {
        axios.put<IItem>("http://localhost:5112/api/item/v1", item)
            .then(response => {
                console.log(response.status);
                navigator(url);
            })
            .catch(error => {
                console.error('Error updating item:', error.response ? error.response.data : error.message);
            });
    };

    const getByIdItems = (id: number) => {
        axios.get<IItem>(`http://localhost:5112/api/item/v1/${id}`)
            .then(response => {
                const { links, ...rest } = response.data;
                setItem(rest);
            })
            .catch(error => {
                console.error('Error fetching item:', error.response ? error.response.data : error.message);
            });
    };

    const handleActionPost = () => {
        if (id) {
            updateItem("/");
        } else {
            postItems("/");
        }
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement>, key: string) => {
        setItem(item => ({
            ...item,
            [key]: e.target.value
        }));
    };

    useEffect(() => {
        if (id) {
            getByIdItems(parseInt(id));
        }
    }, []);
    return(
        <div className={Styles.editItemContainer}>
            <Box>
                <h1>
                    {id? "Modifique seu item":"Crie seu item"}
                </h1>
                <div style={{width:"90%", height:"25px", marginBlock:"20px"}}>
                    <InputGeneral 
                    text="nome:" 
                    type="text" 
                    value={item.name}
                    onChangeFunction={(e:ChangeEvent<HTMLInputElement>)=>handleInput(e,"name")}/>
                </div>
                <div style={{width:"90%", height:"25px", marginBlock:"20px"}}>
                    <InputGeneral 
                    text="custo:" 
                    type="number"
                    value={item.cost}
                    onChangeFunction={(e:ChangeEvent<HTMLInputElement>)=>handleInput(e,"cost")}/>
                </div>
                <div style={{width:"90%", height:"25px", marginBlock:"20px"}}>
                    <InputGeneral 
                    text="poder:" 
                    type="number"
                    value={item.power}
                    onChangeFunction={(e:ChangeEvent<HTMLInputElement>)=>handleInput(e,"power")}/>
                </div>
                <div style={{width:"90%", height:"25px", marginBlock:"20px"}}>
                    <InputGeneral 
                    text="habilidade:" 
                    type="text"
                    value={item.skill}
                    onChangeFunction={(e:ChangeEvent<HTMLInputElement>)=>handleInput(e,"skill")}/>
                </div>
                <div style={{width:"90%", height:"25px", marginBlock:"20px"}}>
                    <InputGeneral 
                    text="idMercado:" 
                    type="number"
                    value={item.marketId}
                    onChangeFunction={(e:ChangeEvent<HTMLInputElement>)=>handleInput(e,"marketId")}
                    />
                </div>
                <div style={{width:"20%", height:"50px", marginBlock:"20px"}}>
                    <ButtonGeneral onClinckFunction={handleActionPost}>salvar</ButtonGeneral>
                </div>
            </Box>
        </div>
    )
}