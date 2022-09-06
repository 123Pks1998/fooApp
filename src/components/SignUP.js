import React from 'react'
import { Link } from 'react-router-dom'

const SignUP = () => {
    return (
        <div className='signup_div'>
            <div className='signup_form'>
                <label className='signup_text'>Register</label>
                <input className='inputbox' type="text" placeholder='Enter Name' />

                <input className='inputbox' type="text" placeholder='Enter Email' />

                <input className='inputbox' type="password" placeholder='Enter Password' />

                <Link to='/login' className='go_to_menu'><p className='go_to_sign'>Sign Up</p></Link>
            </div>

        </div>
    )
}

export default SignUP
