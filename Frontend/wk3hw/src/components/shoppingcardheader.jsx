export const ShoppingCartHeader = ({children}) => {


    return (
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
                {children}
            </div>
                
        </div>        
    


    )
}