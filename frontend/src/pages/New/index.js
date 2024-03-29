import React, {useState, useMemo} from 'react';
import api from '../../services/api';
import camera from '../../assets/camera.svg';
import { useNavigate } from "react-router-dom"; 
import '../../App.css';
import './style.css';

export default function New() {
    const [thumbnail, setThumbnail] = useState(null);
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();


    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]);

    async function handleSubmit(evento){
        evento.preventDefault();
        const data = new FormData();
        const user_id = localStorage.getItem('user');

        data.append('thumbnail', thumbnail);
        data.append('company', company);
        data.append('techs', techs);
        data.append('price', price);

        await api.post('/spots', data, {headers: {user_id}});


        navigate('/dashboard');
    }


    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label 
                    id="thumbnail" 
                    style={{ backgroundImage: `url(${preview})` }} 
                    className={thumbnail ? 'has-thumbnail' : ''} 
                >
                    <input type="file" onChange={event => setThumbnail(event.target.files[0])}/>
                    <img src={camera} alt="Selecione a imagem" />
                </label>


                <label htmlFor="company">Empresa *</label>
                <input
                    id="company"
                    type="text"
                    placeholder="Sua empresa."
                    value={company}
                    onChange={event => setCompany(event.target.value)}
                />

                <label htmlFor="company">Tecnologias * <span>(separadas por vírgula)</span></label>
                <input
                    id="techs"
                    type="text"
                    placeholder="Quais tecnologias usam?"
                    value={techs}
                    onChange={event => setTechs(event.target.value)}
                />

                <label htmlFor="company">Valor da diária * <span>(em branco para GRATUITO)</span></label>
                <input
                    id="price"
                    type="text"
                    placeholder="Valor cobrado por diaria."
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                />


                <button className="btn" type="submit">Cadastrar</button>



            </form>    
        </>
    )
};