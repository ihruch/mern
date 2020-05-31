import React, {useContext, useEffect, useState} from 'react'
import {useHttp} from "../hooks/http.hook"
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/auth.context";

export const AuthPage = () => {
    const {loading, request, error, cleatError} = useHttp();
    const [form, setForm] = useState({
        email: '', password: ''
    });
    const message = useMessage('');
    const auth = useContext(AuthContext);

    useEffect(() => {
        message(error);
        cleatError();
    }, [error, message, cleatError])

<<<<<<< HEAD

    const changeHandler = event => {
=======
     const changeHandler = event => {
>>>>>>> add router link back
        const { target: {name, value}} = event;
        setForm({...form, [name]: value});
    }
    
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message);
        } catch (e) {  }
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            message(data.message);
            auth.login(data.token, data.userId)
        } catch (e) { }
    }

    return(
        <div className="row">
            <div className="col s6 offset-s3">

                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div>
                            <div className="input-field">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Email:</label>
                            </div>
                            <div className="input-field">
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="email">Password:</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{marginRight: 10}}
                            onClick={loginHandler}
                        >Войти</button>
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >Регистрация</button>
                    </div>
                </div>

            </div>
        </div>
    )
}