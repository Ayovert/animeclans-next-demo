import getConfig from 'next/config'

import { userService } from '../services/userService';

const { publicRuntimeConfig } = getConfig();

export const fetchWrapper = {
    get,
    post,
    //put,
   // delete: _delete
};

function get(url){
    const requestOptions = {
        method: 'GET',
        headers: authHeader(url)
    };

    return fetch(url, requestOptions).then(handleResponse);
}

async function post(url, body){
    const requestOptions ={
        method: 'POST',
        headers : {'Content-Type' : 'application/json', ...authHeader(url)},
        body: JSON.stringify(body)
    }

    const response = await fetch(url, requestOptions);
    return handleResponse(response);
}


function authHeader(url){
    // return auth header with jwt if user is logged in and request is to the api url

    const user = userService.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);

    if(isLoggedIn && isApiUrl){
        return{Authorization: `Bearer ${user.token}`};
    }else{
        return {};
    }
}

function handleResponse(response){
    return response.text().then(text=> {
        const data = text && JSON.parse(text);

        if(!response.ok){
            if([401, 403].includes(response.status) && userService.userValue){
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                userService.logout();
            }
            const error = (data && data.message) || response.statusText;
            //const error = (data) || response.statusText;
        return Promise.reject(error);
        }

        return data;
    })

}


