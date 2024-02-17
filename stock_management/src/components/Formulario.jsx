import './Formulario.css'  //Se importa un css basico dara propositos esteticos
import { useState } from 'react'  //El uoseState se usara para capturar los datos

export function Formulario(){
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (event) =>{
        event.preventDefault()
        if(nombre === '' || contraseña === ''){
            setError(true)
            return
        }

        setError(false)

    }

    return(
        <section>
            <h1> Inicio de Sesión</h1>

            {// sadfsfsdfdds
            }
            
            <form 
                className='formulario'
                onSubmit={handleSubmit}
            > 
                <label>
                    Correo Electronico:
                    <br />
                    <input 
                        type="mail"
                        value={nombre}
                        onChange={event=> setNombre(event.target.value)}
                    />
                </label>

                <label>
                    Contraseña:
                    <br />
                    <input
                        type="password"
                        value={contraseña}
                        onChange={event=> setContraseña(event.target.value)}    
                    />
                </label>
                <button>Iniciar Sesion</button>
            </form>

            {error && <p>Todos los campos son Obligatorios</p>}

        </section>
    )
}