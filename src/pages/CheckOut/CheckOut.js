import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const {title, price } = service
    const {user} = useContext(AuthContext)
    // console.log(servies)
    const handleOnClick 
    return (
        <div>
            <form >
                <h2 className="text-4xl">{title}</h2>
                <h4 className="text-3xl">Price: $ {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-success w-full " />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-success w-full " />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-success w-full " required/>
                    <input name='email' type="text" placeholder="Your Email"
                    defaultValue={user?.email} className="input input-bordered input-success w-full " readOnly />
                </div>
                <textarea name='message' className="textarea textarea-info w-full mt-5 h-28 mb-5" placeholder="Bio"></textarea>
                <input className='btn btn-outline btn-success mb-5 text-center' type="submit" value="Place Your Order" />
            </form>
        </div>
    );
};

export default CheckOut;