import "./Shoppinglist.scss"
import React, {FormEvent, useState} from "react";
import Einkaufskarte from "./Einkaufskarte";
import {Shoppingitem} from "./Shoppingitem";
import {v4 as uuidv4} from 'uuid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Shoppinglist() {

    const STORAGE_KEY = "MyValueKey"
    const [products, setProducts] = useState<Shoppingitem[]>(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));

    React.useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    }, [products]);

    // const [products, setProducts] = useState<Shoppingitem[]>([]);
    const [textfield, setTextfield] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        const newProduct = {
            name: textfield,
            id: uuidv4(),
            quantity: 1,
            isSelected: false,
        }
        if (textfield==="") {
            event.preventDefault();
        }
        else {
            const findProductByName: Shoppingitem | undefined = products.find(findProduct => findProduct.name === textfield)
            if (typeof findProductByName ==="object") {
                quantityIncrease(findProductByName.id);
            }
            else {
                setProducts([...products, newProduct]);
                // setProducts([...products,event.target.elements[0].value]);
            }
            event.preventDefault();
            setTextfield("");
        }
    };

    const quantityIncrease = (id: string) => {
        const newProducts = [...products];
        const findProductById: number = products.findIndex(findProduct => findProduct.id === id)
        if (findProductById !== -1) {
            newProducts[findProductById].quantity++;
            setProducts(newProducts);
        } else {
            console.log("Id nicht vorhanden", products, id, findProductById)
        }
    }

    const quantityDecrease = (id: string) => {
        const newProducts = [...products];
        const findProductById: number = products.findIndex(findProduct => findProduct.id === id)
        if (findProductById !== -1) {
            newProducts[findProductById].quantity--;
            if ((newProducts[findProductById].quantity) < 1) {
                remove(id);
            } else {
                setProducts(newProducts);
            }
        } else {
            console.log("Id nicht vorhanden", products, id, findProductById)
        }
    }

    const toggleComplete = (id: string) => {
        const newProducts = [...products];
        const findProductById: number | undefined = products.findIndex(findProduct => findProduct.id === id)
        if (findProductById !== -1) {
            newProducts[findProductById].isSelected = !newProducts[findProductById].isSelected
            setProducts(newProducts);
        }
    }

    const remove = (id: string) => {
        setProducts(products.filter(testRemoveProduct => testRemoveProduct.id !== id))
    }

    const removeAll = () => {
        setProducts([])
    }

    return (
        <div className="input">
            <form onSubmit={handleSubmit} className="formular">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-helperText"
                        label="Produkt hinzufügen"
                        value={textfield}
                        onChange={(e) => setTextfield(e.target.value)}
                    />
                </Box>
                <Button variant="contained" color="primary" type="submit" value="Submit">
                    Submit
                </Button>
            </form>
            <div className="shoppinglist">
                {products.map((product, index) => (
                    <Einkaufskarte
                        key={index}
                        product={product}
                        quantityDecrease={quantityDecrease}
                        quantityIncrease={quantityIncrease}
                        toggleComplete={toggleComplete}
                        remove={remove}
                    />
                ))}
            </div>
            <ProductsTotal totalproducts={products}/>
            <Button variant="outlined" className="delete" onClick={()=>removeAll()} startIcon={<DeleteIcon />}>
                Remove list
            </Button>
        </div>
    );
};

interface ProductsTotalProps {
    totalproducts: Shoppingitem[]
}

const ProductsTotal = ({totalproducts}:ProductsTotalProps) => {
    const amountProducts : number = totalproducts.reduce((total, totalproduct) => {
        return total + totalproduct.quantity;
    }, 0)
    return (
        <div className="total">Total: {amountProducts}</div>)
}