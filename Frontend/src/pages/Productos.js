import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users, setUsers] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        // console.log("Estamos melos?")
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users")
        //  console.log(result.data)
        setUsers(result.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }

    return (
        <div className="container">
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre del Producto</th>
                            <th scope="col">Caracteristicas</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Empresa</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                            to={`/viewuser/${user.id}`}
                                        >
                                            Detalles
                                        </Link>
                                        <Link className='btn btn-outline-primary mx-2'
                                            to={`/edituser/${user.id}`}
                                        >
                                            Editar
                                        </Link>
                                        <button className='btn btn-danger mx-2'

                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Borrar
                                        </button>

                                    </td>
                                </tr>

                            ))
                        }



                    </tbody>
                </table>


            </div>
        </div>
    )
}
