import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login_div'>
            <div className='signup_form'>
                <label className='login_text'>Login Here</label>
                <input type="text" placeholder='Email' className='inputbox'
                />
                <input type="text" placeholder='Password' className='inputbox'
                />

                <Link to='/home' className='go_to_menu'><p className='go_to_sign'>Login</p></Link>

            </div>

        </div>
    )
}

export default Login
