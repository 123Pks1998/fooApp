import React from 'react'
import MenuCard from './MenuCard'
import MenuData from '../MenuData'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <div className='menu_items'>
            <div className='menus'>
                {MenuData.map((data) => {
                    return (
                        <MenuCard
                            key={data.key}
                            image={data.image}
                            name={data.name}
                            price={data.price} />
                    )
                })}

                <div className='thanku'>
                    <Link to='/thanku'>Conform Order</Link>
                </div>
            </div>
        </div>
    )
}

export default Menu
