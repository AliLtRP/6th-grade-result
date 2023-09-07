import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../navbar/NavBar";




function Auth() {
    const [auth, setAuth] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigate = useNavigate();

    /**
     * user Auth is for check if user is auth and can upload data
     */
    let userAuth = async (e) => {
        e.preventDefault();

        axios.get('http://3.64.179.220:3000/user/auth', {
            responseType: "json",
            params: {
                email,
                password
            }
        })
            .then(res => {
                console.log(res.data);
                if (res.data === 'true') {
                    navigate('/upload');
                } else {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    };




    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '65%' }} onSubmit={userAuth}>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )

}


export default Auth;