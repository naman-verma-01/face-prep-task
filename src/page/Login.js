import React, { useContext, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { SET_AUTH_STATUS } from '../Reducers/types';
import { useDispatch, useSelector } from 'react-redux'

function Login() {
    const [userInfo, setUserInfo] = useState({ username: "", password: "" })
    const nav = useNavigate();
    const dispatch = useDispatch()

    const submitHandler = async () => {
        if (userInfo.username == "foo" && userInfo.password == "bar") {
            dispatch({ type: SET_AUTH_STATUS, payload: { authStatus: true } });
            nav("/home");
        }
        else {
            window.alert("User unidentified!!")
        }
    }
    return (
        <div className='formPage'>
            <form className='formBody' onSubmit={submitHandler}>
            <h1 style={{}}>&nbsp;&nbsp; Login </h1> <hr/><br/>
                
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">User Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="User Name..." onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, username: event.target.value }) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password..." onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, password: event.target.value }) }} />
                </div>
                
                {/*<input type="text" placeholder='User Name' onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, username: event.target.value }) }} />
                <input type="password" placeholder='Password' onChange={(event) => { event.preventDefault(); setUserInfo({ ...userInfo, password: event.target.value }) }} />
    */}
                <button type="submit" style={{width:"100%"}} class="btn btn-dark" onClick={submitHandler}>Login</button>
                <hr/>
            </form>
        </div>
    )
}

export default Login