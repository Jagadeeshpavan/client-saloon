import React,{useState,useContext} from 'react'
import axios from 'axios';
import {store} from '../App';
import { useNavigate } from 'react-router-dom'; 
import { BASE_URL } from "../method/Helper";

const Login = () => {
    const navigate = useNavigate(); 
    const [token,setToken] = useContext(store)
    const [data,setData] = useState({
        email:'',
        password:'',
    })

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = e =>{
        e.preventDefault();
        axios.post(`${BASE_URL}/api/login`,data).then(
            res => setToken(res.data.token)
        )
    };
    
    if(token){
        navigate('/dashboard');
    };

    return (
        <div>
            <center>
            <form onSubmit={submitHandler} autocomplete="off">
                <h3>Login</h3>
                <input type="email" onChange={changeHandler} name="email" placeholder="Email" /><br />
                <input type="password" onChange={changeHandler} name="password" placeholder="Password" /><br />
                <input type="submit" value="Login" /><br />
            </form>
            </center>
        </div>
    )
}

export default Login