import http from '../http-common';

const getGreeting = () => http.get('/message');

const GreetingService = {
  getGreeting,
};

export default GreetingService;
