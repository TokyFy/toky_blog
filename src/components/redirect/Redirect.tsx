import React, {FunctionComponent, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {LOCAL_STORAGE_TOKEN_ID} from "../../constants";

const Redirect: FunctionComponent = () => {
    const navigate = useNavigate();
    const {token} = useParams();

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_ID, `${token}`);
        navigate('/guestbook');
    });

    return (<p>Redirect...</p>);
};

export default Redirect;
