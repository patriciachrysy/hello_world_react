import http from '../http-common';

const getDevelopers = (headers) => http.get('/web_developers', {headers});
const getDeveloper = (id, headers) => http.get('/web_developers/'+id, {headers});
const createDeveloper = (data, headers) => http.post('/web_developers', data, {headers});
const updateDeveloper = (id, data, headers) => http.put('/web_developers/'+id, data, {headers});
const deleteDeveloper = (id, headers) => http.delete('/web_developers/'+id, {headers});

const DeveloperService = {
    getDevelopers,
    getDeveloper,
    createDeveloper,
    updateDeveloper,
    deleteDeveloper
};

export default DeveloperService;
