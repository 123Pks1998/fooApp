import React, { useState } from 'react'
import './menu.css'

const MenuCard = (props) => {
    const [product, setProduct] = useState(0)

    const addProduct = () => {
        setProduct(product + 1)
        console.warn(product);
    }

    const removeProduct = () => {
        setProduct(product - 1)
        console.warn(product);
    }


    return (
        <div className='cards_items'>
            <div className='menucard'>
                <img src={props.image} alt="img" className='cardImage' />
                <div className='cardAttributes'>
                    <p>{props.name}</p>
                    <p>{props.price}</p>
                    <button onClick={addProduct} className='addButton'>+</button>
                    <button onClick={removeProduct} className='removeButton'>-</button>
                </div>


            </div></div>
    )
}

export default MenuCard
