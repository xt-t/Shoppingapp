import "./Einkaufskarte.scss"
import "./Shoppinglist"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faChevronLeft, faChevronRight, faCircle} from "@fortawesome/free-solid-svg-icons";
import {Shoppingitem} from "../model/Shoppingitem";
import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

interface propssetup{
    product: Shoppingitem,
    quantityDecrease:Function,
    quantityIncrease:Function,
    toggleComplete:Function
    remove: Function
}

export default function Einkaufskarte({product, quantityDecrease, quantityIncrease, toggleComplete, remove}:propssetup) {
    return (
        <div className="shoppingcard">
            <div className='item-name' onClick={() => toggleComplete(toggleComplete(product.id))}>
                {product.checked ? (
                    <>
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span className='completed'>{product.name}</span>
                    </>
                ) : (
                    <>
                        <FontAwesomeIcon icon={faCircle} />
                        <span>{product.name}</span>
                    </>
                )}
            </div>
            <div className='quantity'>
                <button className="crease">
                    <FontAwesomeIcon icon={faChevronLeft} onClick={() => quantityDecrease(product.id)}/>
                </button>
                <span> {product.quantity} </span>
                <button className="crease">
                    <FontAwesomeIcon icon={faChevronRight} onClick={() => quantityIncrease(product.id)}/>
                </button >
                <Button onClick={()=>remove(product.id)} startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </div>
        </div>
    )
}