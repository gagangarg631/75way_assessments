import * as util from "./util";

const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

const post = async (url, data) => {
    return fetch(url, {
        method: "post",
        headers,
        body: JSON.stringify(data),
    }).then((res) => res);
};

const get = async (url) => {
    return fetch(url, {
        method: "get",
        headers,
    }).then((res) => res);
};

export const login = async (data) => {
    return await post("https://reqres.in/api/login", data);
};

export const logout = () => {
    if (localStorage.getItem(util.TOKEN)) {
        localStorage.removeItem(util.TOKEN);
    }
};

export const station = async (method) => {
    switch (method) {
        case "GET":
            return get("https://reqres.in/api/unknown")
                .then((res) => res.json())
                .then((res) => res);
        default:
            return [];
    }
};
