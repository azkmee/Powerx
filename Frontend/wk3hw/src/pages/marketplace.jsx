import React from 'react'
import { Listings } from "../components/listings"
import { ShoppingCartItem } from '../components/shoppingcart';
import { v4 as uuid } from 'uuid'

const getListings = (page=1) =>
  fetch(`https://ecomm-service.herokuapp.com/marketplace?page=${page}`).then((res) => res.json());

export const Marketplace = () => {

    const [listings, setListings] = React.useState()
    const [carts, setCarts] = React.useState([]);
    
    const fetchListing = async () => {
        getListings().then((listings) => {
            // console.log(listings);
            setListings(listings)})
    }

    

    const addToCart = (newItem) => {
        let toUpdate = carts.filter(item => item.key == newItem.key)
        const theRest = carts.filter(item => item.key != newItem.key)
        // console.log(carts)
        console.log('same in cart',toUpdate)
        if (toUpdate.length == 0) {
            toUpdate = {
                key: newItem.key,
                title: newItem.title,
                price: newItem.price,
                imgUrl: newItem.imgUrl,
                quantity: 1,
            }
            // console.log('yes')
        } else {
            // toUpdate.quantity += 1;
            
            const quantity = toUpdate[0].quantity + 1
            toUpdate = {
                ...toUpdate[0],
                quantity
            }
        }      
        
        setCarts([...theRest, toUpdate])
    }

    const calculateCartTotal = ()=> {
        let total = 0;
        carts.map(item => {total = total + (item.quantity * item.price)})

        return total;
    }

    
    // fetchListing()
    if (!listings) {fetchListing()}

    return (
    <div className='bg-gray-50 lg:flex'>
        <div className='flex-1'>
            <div className='max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8'>
                {/* header */}
                <div className="sm:flex sm:flex-col sm:align-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
                    Marketplace
                    </h1>
                </div>

                {/* listings */}
                <div className="
                    grid
                    md:grid-cols-2
                    gap-x-4 gap-y-8
                    xl:grid-cols-3 xl:gap-x-6
                    ">
                        { listings && 
                            listings.map( (list) => (
                                // console.log(list);
                                <Listings 
                                    imgUrl = {list.imageUrl}
                                    price = {list.price}
                                    numOfStock = {list.numOfStock}
                                    title = {list.title}
                                    desc = {list.description} 
                                    uid = {list._id}
                                    key = {list._id}
                                    onButtonClick = {(items) => addToCart(items)}/>
                            ))}
                    </div>  
            </div>
        </div>
        

        {/* cart */}
        <div className="
                flex-initial
                bg-white
                w-full
                lg:max-w-md
                border-b border-gray-100
            ">
            <div className="flex flex-col h-full">
                <div className="py-6 px-4 bg-pink-700 sm:px-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium text-white">Your shopping cart</h2>
                    </div>
                    <div className="mt-1">
                        <p className="text-sm text-pink-300">
                            Listing added into your shopping cart
                        </p>
                    </div>
                </div>
            {carts && 
                carts.map(cart => (
                    <ShoppingCartItem 
                        title= {cart.title}
                        price= {cart.price}
                        imgUrl= {cart.imgUrl}
                        quantity= {cart.quantity}
                        key= {cart.key}
                        />
                )
                    
                )
                }
            {carts && 
                <div class="
                flex-shrink-0
                px-4
                py-4
                flex
                justify-end
                border-t border-gray-200
              ">
                    <span>Total <span class="text-3xl">$<span>{calculateCartTotal()}</span></span></span>
                    </div>}
                    </div>
        </div>        
    
    </div>
    )
}

