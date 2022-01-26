import axios from 'axios'

interface Shoppingitem {
    name: string,
    id: string,
    quantity: number,
    checked: boolean
}

export interface LoginData {
    name: string,
    password: string,
}

// export const TOKEN_STORAGE_KEY = 'MY_TOKEN';
// const config = {headers:{'Authorization': 'Bearer '+localStorage.getItem(TOKEN_STORAGE_KEY) || ""}}

export const getAllShoppingitems = (token?: string) =>
    axios.get(`/api/shop`, token? {headers:{"Authorization": "Bearer" + token}}:{}).then(response => response.data)

export const addShoppingitem = (product: { quantity: number; name: string; checked: boolean; id: string }, token?: string) => axios.post(`/api/shop/`, product, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const deleteWholeList = (token?: string) => axios.delete(`/api/shop/`, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const getShoppingitemById = (id: String, token?: string) =>
    axios.get(`/api/shop/${id}`, token? {headers:{"Authorization": "Bearer" + token}}:{}).then(response => response.data)

export const deleteShoppingitem = (id:String, token?: string) => axios.delete(`/api/shop/${id}`, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const updateShoppingitem = (product: Shoppingitem, token?: string) =>
    axios.put(`/api/shop/${product.id}/update`, product, token? {headers:{"Authorization": "Bearer" + token}}:{})

export const loginPost = (login:LoginData, token?: string) =>
    axios.post(`auth/login`, login, token? {headers:{"Authorization": "Bearer" + token}}:{})