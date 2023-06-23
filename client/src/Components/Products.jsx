import { useEffect, useState } from 'react'
import axios from '../utils/axios'
import { getProducts, addCart } from '../utils/constUrls'
import { auth } from '../firebase'
import { useSelector, useDispatch } from 'react-redux'
import { setCount } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const Products = () => {


  const dispatch = useDispatch()
  const navigate = useNavigate()

const user = localStorage.getItem("userEmail");


if (user) {
  console.log('User email:', user);
} else {
  console.log('No user is currently logged in.');
}


  const [products, setProducts] = useState([''])
  const [cart, setCart] = useState('')

  useEffect(() => {
    axios.get(getProducts)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, [cart]);



  const addToCart = (id) => {
    const email = user; // Access the email from the currentUser object
  
    if (email) {
      const payload = {
        id: id,
        email: email
      };
  
      axios.patch(`${addCart}/${id}`, payload)
        .then((res) => {
          setCart(res);
          dispatch(setCount())
        })
        .catch((err) => console.log(err));
    } else {
      console.log('No user is currently logged in.');
      navigate('/login')
      
    }
  };
  
  



  return (
    <>
      <div className="ml-44 mt-8">
        <h2 className="text-4xl font-bold">Best Seller Products</h2>
        <p className="text-base font-light">LogoIpsum....</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-9 w-full">

        {
          products.map(item => {
            return (
              <div key={item._id} className="cursor-pointer flex items-center">
                <div className="mr-4">
                  <img
                    src={item.image}
                    width={250}
                    height={250}
                    className="rounded-lg bg-gray-200 transform transition-transform duration-500"
                  />
                </div>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="font-semibold mt-1  text-blue-600">{item.price}</p>
                  <div className="flex items-center mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600 fill-current" viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.442l4.472 2.73-1.077-4.977L19 7.53l-5.027-.463L10 2 8.027 7.067 3 7.53l4.605 3.665L7.528 18.17z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.442l4.472 2.73-1.077-4.977L19 7.53l-5.027-.463L10 2 8.027 7.067 3 7.53l4.605 3.665L7.528 18.17z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600 fill-current" viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.442l4.472 2.73-1.077-4.977L19 7.53l-5.027-.463L10 2 8.027 7.067 3 7.53l4.605 3.665L7.528 18.17z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600 fill-current" viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.442l4.472 2.73-1.077-4.977L19 7.53l-5.027-.463L10 2 8.027 7.067 3 7.53l4.605 3.665L7.528 18.17z"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600 fill-current" viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 15.442l4.472 2.73-1.077-4.977L19 7.53l-5.027-.463L10 2 8.027 7.067 3 7.53l4.605 3.665L7.528 18.17z"
                      />
                    </svg>
                    <p className='ml-2'>({item.stock})</p>
                  </div>

                  <button onClick={() => addToCart(item._id)} className="bg-blue-500 text-white text-sm py-2 px-4 mt-3 rounded-md">Add to Cart</button>

                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Products