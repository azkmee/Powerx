export const EmptyShoppingCart = () => {


    return(
        <div className="px-4 sm:px-6 pb-12">
            <div className="pt-6 pb-5">
              <div id="no-cart-item-message">
                <div className="p-4 text-center">
                  <svg className="inline-block w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                  </svg>
                </div>
                <p className="text-center text-gray-500">
                  There is no item in your shopping cart.
                </p>
              </div>
            </div>
          </div>
    )
}