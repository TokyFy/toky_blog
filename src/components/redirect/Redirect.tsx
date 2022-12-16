import React, {FunctionComponent, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";

const Redirect: FunctionComponent = () => {
    const navigate = useNavigate();
    const {token} = useParams();

    useEffect(() => {
        localStorage.setItem('token', `${token}`);
        navigate('/guestbook');
    });

    return (<p>Redirect...</p>);
};

export default Redirect;
