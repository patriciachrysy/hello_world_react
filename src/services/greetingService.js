import http from '../http-common';

const getGreeting = () => {
    return http.get(`/message`);
};

const GreetingService = {
    getGreeting
};

export default GreetingService;