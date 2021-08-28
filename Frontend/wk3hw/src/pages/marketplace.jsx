import React from 'react'
import { Listings } from "../components/listings"
import { v4 as uuid } from 'uuid'
import { EmptyShoppingCart } from '../components/emptycart';
import { ListingCart } from '../components/listingcart';
import { ShoppingCartHeader } from '../components/shoppingcardheader';

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

    React.useEffect(()=> {
        console.log(carts)
        console.log(carts !== [])
    }, [carts])

    

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
        <ShoppingCartHeader>
            { carts.length !== 0 ? 
                <ListingCart
                    setCarts = {setCarts}
                    carts = {carts}/> : 
                <EmptyShoppingCart/> }
        </ShoppingCartHeader>
    </div>
    )
}

