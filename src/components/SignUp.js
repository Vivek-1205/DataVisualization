import React, {useState,useEffect} from 'react';
import { UseAuth } from '../Auth';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import bcrypt from 'bcryptjs';

const SignUp = ({ changeAuthMode }) => {
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [signupStatus, setStatus] = useState("");
    const [isIDAvaliable, setavaliablity] = useState(true);
    
    const auth = UseAuth();
    const navigate = useNavigate()

    useEffect(()=>{
        if(userId==="")return;
        // axios
        // .get("http://localhost:5156/api/User/UserIdExist?userId="+userId)
        // .then(
        //     res=>{
        //         if(res.data === false)
        //         {
        //             setStatus("");
        //             setavaliablity(true);
        //         }
        //         else
        //         {
        //             setStatus("userID is unavaliable.")
        //             setavaliablity(false);
        //         }
        //     }
        // )
        // .catch(err=>console.log(err))
    },[userId])

    const handleSignUp = async(e)=>{
        e.preventDefault();
        const hashedPassword = await bcrypt.hash(password,10)
        console.log(hashedPassword)
        const userData = {
            userId: userId,
            userName: userName,
            userEmail: email,
            userPassword: hashedPassword,
            userRole: "user",
            joinDate: new Date().toLocaleDateString()
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        

        // axios
        // .post("http://localhost:5156/api/User/adduser",{
        //     "userId": userId,
        //     "userName": userName,
        //     "userEmail": email,
        //     "userPassword": hashedPassword,
        //     "userRole": "user",
        //     "joinDate": new Date().toLocaleDateString()
        // });
        // auth.login(userId);
        // setUserId("");
        // setEmail("");
        // setPassword("");
        // setStatus("");
        // setUserName("");
        // setavaliablity(true);
        navigate("/home");
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                            value={userName}
                            onChange={(e)=>{setUserName(e.target.value)}}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>User ID</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane2002"
                            value={userId}
                            onChange={(e)=>{setUserId(e.target.value)}}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    <div className="text-center text-danger  mt-3">
                        <p>
                            {signupStatus}
                        </p>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" disabled={userName===""||userId===""||password===""||email===""||!isIDAvaliable} onClick={(e)=>{handleSignUp(e)}} className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <div className="text-center mt-3">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp
