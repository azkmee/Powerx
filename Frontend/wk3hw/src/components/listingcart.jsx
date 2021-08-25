import { ShoppingCartItem } from './shoppingcart';


export const ListingCart = (props) => {

    const deleteFromCart = (id) => {
        let toUpdate = props.carts.filter(item => item.key == id)
        const theRest = props.carts.filter(item => item.key != id)

        if (toUpdate[0].quantity === 1) {
            props.setCarts([...theRest])
        } else {
            const quantity = toUpdate[0].quantity - 1
            toUpdate = {
                ...toUpdate[0],
                quantity
            }
            props.setCarts([...theRest, toUpdate])
        }
    }

    const calculateCartTotal = ()=> {
        let total = 0;
        props.carts.map(item => {total = total + (item.quantity * item.price)})

        return total;
    }


    return (
        <div>
            {props.carts.map(cart => (
                <ShoppingCartItem 
                    title= {cart.title}
                    price= {cart.price}
                    imgUrl= {cart.imgUrl}
                    quantity= {cart.quantity}
                    uid = {cart.key}
                    key= {cart.key}
                    onButtonClick = {(id) => deleteFromCart(id)}
                    />
                )
            )}

            <div className="
                flex-shrink-0
                px-4
                py-4
                flex
                justify-end
                border-t border-gray-200
            ">
                <span>Total <span className="text-3xl">$<span>{calculateCartTotal()}</span></span></span>
            </div>
        </div>
    )
}