import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../firebase";
import axios from "../utils/axios";
import { getCartCount } from "../utils/constUrls";
import { useSelector } from 'react-redux'


const Nav2 = () => {
    const count = useSelector((state) => state.cart.cartCount)
    const [authUser, setAuthUser] = useState(null);
    const [cartCount, setCartCount] = useState(0)
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate()
    const userEmail = localStorage.getItem("userEmail")


    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                axios.get(getCartCount, { params: { email: userEmail } }).then((res) => {
                    setCartCount(res.data)
                })

            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        };
    }, [count]);


    const userSignOut = () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem("userEmail");
                navigate('/login')
            })
            .catch((error) => console.log(error));
    };


    return (

        <nav
            className="w-full bg-white shadow"
            style={{
                backgroundColor: "white",
                position: "fixed",
                top: 60,
                left: 0,
                right: 0,
                zIndex: 6
            }}
        >
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <div class="flex">
                            <img onClick={() => { navigate('/') }} className='cursor-pointer' src="/Screenshot from 2023-06-19 18-34-19.png" alt="" />
                            <div className="flex items-center">
                                <p className="border-2 bg-gray-100 h-10 pl-2 pr-2 ml-10 rounded-lg text-sm focus:outline-none border-none flex items-center">
                                    Classifields
                                    <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </p>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <input class="border-2 bg-gray-100 h-10 pl-2 pr-10 rounded-lg text-sm focus:outline-none border-none"
                        type="search" name="search" placeholder="Search" />
                    <FaSearch class="absolute right-2 top-2.5  text-gray-600" />

                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <ul className="flex flex-col items-center justify-center space-y-8 md:flex md:flex-row md:space-x-6 md:space-y-0">
                            <li className="text-sm text-black cursor-pointer flex items-center">
                                <FaRegHeart />
                            </li>
                            <li className="text-sm text-black cursor-pointer flex items-center pl-4">
                                <a onClick={() => {userEmail? navigate('/cart') : navigate('/login')}} role="button" className="relative flex">
                                    <svg className="flex-1 w-7 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                                    </svg>
                                    <span className="absolute right-0 top-0 rounded-full bg-blue-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center">{cartCount}</span>
                                </a>
                            </li>
                            <li className="text-sm text-black cursor-pointer flex items-center pl-4">
                                <FaUserCircle />
                            </li>

                            <li className="text-sm text-black cursor-pointer flex items-center pl-4">
                                {authUser ?
                                    <button onClick={userSignOut} class="bg-green-500 text-white text-sm rounded-full py-4 px-6">Logout</button>
                                    : <button onClick={() => navigate('/login')} class="bg-green-500 text-white text-sm rounded-full py-4 px-6">Login</button>
                                }

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav2


