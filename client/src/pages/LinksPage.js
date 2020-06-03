import React, {useCallback, useContext, useEffect, useState} from 'react'
import {AuthContext} from "../context/auth.context";
import {useHttp} from "../hooks/http.hook";
import {Loader} from "../components/Loader";
import {LinksList} from "./../components/LinksList";

export const LinksPage = () => {
    
    const [links, setLinks] = useState([]);
    const {loading, request} = useHttp();
    const {token} = useContext(AuthContext);

    const fetchLinks = useCallback( async() => {
            try{
                const fetched =  await  request('/api/link', 'GET', null, {
                    Authorization: `Bearer ${token}`
                })
                console.log({fetched})
                setLinks(fetched)
            } catch (e) { }

    }, [token, request])

    useEffect( () => {
        fetchLinks();
    }, [fetchLinks])

    if(loading) {
        return <Loader />
    }

    return(
        <div>
          { !loading && <LinksList links={links} /> }
        </div>
    )
}
