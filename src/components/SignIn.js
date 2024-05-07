import { UseAuth } from '../Auth'
import { useNavigate } from 'react-router-dom';
import React, { useId, useState,useContext } from 'react'
import axios from 'axios';
import bcrypt from 'bcryptjs';

const SignIn = ({ changeAuthMode }) => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setStatus] = useState("");
    const navigate = useNavigate();
    const auth = UseAuth();

    const handleSignIn = async(e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData === null) {
            setStatus("Wrong credentials");
            setUserId("");
            setPassword("");
            return;
        }
        const HashedPassword = await bcrypt.hash(password,10)
        console.log(HashedPassword)

        // Compare the hashed password with the input password
       /* bcrypt.compare(password, userData.userPassword)
            .then(isValidPassword => {
                if (isValidPassword) {
                    navigate("/home");
                } else {
                    setStatus("Wrong credentials");
                    setUserId("");
                    setPassword("");
                }
            })
            .catch(err => console.log(err));*/
        // axios
        // .get("http://localhost:5156/api/User/validateUser?userId="+userId+"&userPassword="+password)
        // .then(
        //     userData=>{
        //         if(userData.data === null)
        //         {
        //             setStatus("Wrong credentials");
        //             setUserId("");
        //             setPassword("");
        //             return;
        //         }
        //         auth.login(userData.data.userId);
        //         navigate("/home");
        //     }
        // )
        // .catch(err=>console.log(err))
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>UserId</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            value={userId}
                            onChange={(e) => {setUserId(e.target.value)||setStatus("")}}
                            placeholder="Enter UserId"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value)||setStatus("") }}
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="text-center text-danger  mt-3">
                        <p>
                            {loginStatus}
                        </p>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button disabled={userId===""|password===""} type="submit" className="btn btn-primary" onClick={(e) => { handleSignIn(e) }}>
                            Submit
                        </button>
                    </div>
                    <div className="text-center mt-3">
                        Not registered yet?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign Up
                        </span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn
