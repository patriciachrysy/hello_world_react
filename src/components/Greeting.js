import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveGreeting } from '../redux/greeting/greeting';


const Greeting = () => {
    const greeting = useSelector((state) => state.greeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveGreeting());
      }, []);

    return (
        <h1>{greeting.content}</h1>
    );
}

export default Greeting;