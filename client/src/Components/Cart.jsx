
import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import { getCart, deleteProduct } from '../utils/constUrls';

const Cart = () => {
    const user = localStorage.getItem("userEmail")
    const userEmail = localStorage.getItem('userEmail');
    const [cart,setCart] = useState([''])
    const [removeData, setRemoveData] = useState('')

    useEffect(() => {
        axios.get(getCart,{ params: { email: userEmail } })
            .then((res) => {
                // Handle the response data
                setCart(res.data)
            })
            .catch((err) => {
                // Handle any errors
                console.log(err);
            });
    }, [removeData]);

    const handleRemove=(id,quantity)=>{
        console.log("hello");
        const body={
            id,
            quantity,
            userEmail
        }
        console.log(id);
        axios.post(deleteProduct,body).then((res)=>{
            setRemoveData(res.data)
        })
    }


    return (

        <div class="h-screen bg-gray-100 pt-20 mt-14">
            <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div class="rounded-lg md:w-2/3">

                    {
                        cart.map(item=>{
                            return(
                                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                        <img src={item.product?.image} alt="product-image" class="w-full rounded-lg sm:w-40" />
                        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                            <div class="mt-5 sm:mt-0">
                                <h2 class="text-lg font-bold text-gray-900">{item.product?.name}</h2>
                                <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                            </div>
                            <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                <div class="flex items-center border-gray-100">
                                    {/* <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span> */}
                                    <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={item.quantity} min="1" />
                                    {/* <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span> */}
                                </div>
                                <div class="flex items-center space-x-4">
                                    <p class="text-sm">{item.price}</p>
                                <div onClick={()=>handleRemove(item.item,item.quantity)}>
                                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                            )
                        })
                    }
                    
                    
                </div>
            </div>
        </div>

    )
}

export default Cart