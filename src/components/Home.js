import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Home = () => {
    return (
        <div>
            <div className='home_design'>
                <div className='food_text'>
                    <p>Welcome To Food's <br /> kitchen</p>
                    <div className='menuButton'>
                        <NavLink to="/menu" className='go_to_menu'><p className='go_to_p'>GO TO MENU</p></NavLink></div></div>
            </div>


        </div>
    )
}

export default Home
