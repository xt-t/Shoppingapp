import axios from 'axios'

interface Shoppingitem {
    name: string,
    id: string,
    quantity: number,
    isSelected: boolean
}

export const getAllShoppingitems = () =>
    axios.get(`/api/shop`).then(response => response.data)

export const addShoppingitem = (product:Shoppingitem) => axios.post(`/api/shop/`, product)

export const deleteWholeList = () => axios.delete(`/api/shop/`)

export const getShoppingitemById = (id: String) =>
    axios.get(`/api/shop/${id}`).then(response => response.data)

export const deleteShoppingitem = (id:String) => axios.delete(`/api/shop/${id}`)

export const updateShoppingitem = (product:Shoppingitem) =>
    axios.put(`/api/shop/${product.id}/update`, product)