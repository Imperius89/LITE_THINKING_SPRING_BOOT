import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {

    const [user,setUsers]=useState({
        
        name:"",
        username:"",
        email:""
    })

    const{id}=useParams();

    useEffect(()=>{
        loadUsers()
    },[])

    const loadUsers=async () =>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUsers(result.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Detalles:</h2>

                    <div className="card">
                        <div className="card-header">

                            Detalles de la empresa: 
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>NIT: </b>
                                    {user.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Nombre: </b>
                                    {user.name}
                                </li>
                                <li className="list-group-item">
                                    <b>Direccion: </b>
                                    {user.username}
                                </li>
                                <li className="list-group-item">
                                    <b>Telefono: </b>
                                    {user.email}
                                </li>

                            </ul>

                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/"}>Regresar</Link>

                </div>
            </div>
        </div>

    );
}
