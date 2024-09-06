import React from 'react';
import {useState} from 'react'
import {Button, code} from '@nextui-org/react'
import {Input} from '@nextui-org/react'

export default function Login(){
    const [formData, setFormData] = useState({num: '', password: ''});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http:', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
        }catch (error) {
            console.error(error);
        }
    };

    return (
        <main>
            <div className='flex flex-col my-20 gap-9 justify-center place-items-center align-middle'>
                <div className='flex gap-6 justify-center'>
                    <img src='https://files.ingebook.com/ib/img/ingebook/ESP/logos_biblioteca/USAC%20transparente.png' alt='logo' className='w-20 h-20 mx-auto'/>
                    <div className='flex-col gap-2 justify-center'>
                        <h1 className='text-4xl font-bold'>Facultad de Ingeniería</h1>
                        <h3> Universidad de San Carlos de Guatemala</h3>
                    </div>
                </div>
                <div>
                    <h2> Iniciar Sesión Ingeniería USAC</h2>
                </div>
                <form onSubmit={handleSubmit} 
                className="flex flex-col gap-4 justify-center place-items-center align-middle"
                >
                <div className="flex gap-4 justify-center">
                    <Input  type="text" color='secondary' label="Usuario" name='num' value={formData.num} onChange={handleChange}/>
                    <Input type="password" color='secondary' label="Contraseña" name='password' value={formData.password} onChange={handleChange}/>
                </div>
                <div className='flex gap-10 justify-center'>
                    <Button type='submit' color='primary'>Iniciar Sesión</Button>
                    <Button color='secondary'>Registrarse</Button>
                </div>   
                </form>
            </div>
            <div>
                <footer className='flex justify-center'>
                    <p>© 2024 Facultad de Ingeniería USAC</p>
                </footer>
            </div>
        </main>



    );
}