import {useState, useCallback, useEffect} from 'react';
const storageName = 'userData';

export const useAuth = () => {
    const [token, setToken]   = useState(null);
    const [userId, setUserId] = useState(null);

    //LOGIN
    const login = useCallback(  (jwtToken, id) => {
        setToken(jwtToken);
        setUserId(id);
        try {
            localStorage.setItem(storageName, JSON.stringify({ userId: id, token: jwtToken}))
        } catch (e) {
            console.log({message: 'Не удалось сохранить в storage data'})
        }

    }, [] );

    //LOGOUT
    const logout = useCallback( () => {
        setToken(null);
        setUserId(null);
        try {
            localStorage.removeItem(storageName)
        } catch (e) {
            console.log({message: 'Не удалось далить со стораджа'})
        }
    }, []);

    useEffect( () => {
        const data = JSON.parse( localStorage.getItem(storageName))
        if(data && data.token) {
            login(data.userId, data.token);
        }
    }, [login])

    return {login, logout, token, userId}
}
