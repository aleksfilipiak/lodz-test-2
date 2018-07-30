import axios from "axios";

export const FETCH_USERS = "fetch_users";
export const FETCH_USER = "fetch_user";
export const CREATE_USER = "create_user";
export const DELETE_USER = "delete_user";

const ROOT_URL = "http://jsonplaceholder.typicode.com";
//const ROOT_URL = "http://localhost:3004";

export function fetchUsers(){
    const request = axios.get(`${ROOT_URL}/users`);

    return{
        type: FETCH_USERS,
        payload: request
    };
}

export function createUser(values, callback) {
    const request = axios
        .post(`${ROOT_URL}/users`, values)
        .then(()=>callback());
    return {
        type: CREATE_USER,
        payload: request
    }
}

export function fetchUser(id) {
    const request = axios.get(`${ROOT_URL}/users/${id}`);

    return{
        type: FETCH_USER,
        payload: request
    }
}

export function deleteUser(id, callback) {
    const request = axios
        .delete(`${ROOT_URL}/users/${id}`)
        .then(()=>callback());

    return{
        type: DELETE_USER,
        payload: id
    };

}
