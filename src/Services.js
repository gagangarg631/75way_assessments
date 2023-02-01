const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const post = async (url, data) => {
    return fetch(url, {
        method: 'post',
        headers,
        body: JSON.stringify(data),
    }).then(res => res);
}


export const login = async (email, password) => {
    return await post('https://reqres.in/api/login', {email, password});
}

export const allStations = async () => {
    return fetch('https://reqres.in/api/unknown').then(res => res.json()).then(res => res);
}